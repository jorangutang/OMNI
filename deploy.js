#!/usr/bin/env node

import { S3Client, PutObjectCommand, ListObjectsV2Command, DeleteObjectCommand } from '@aws-sdk/client-s3';
import { CloudFrontClient, CreateInvalidationCommand } from '@aws-sdk/client-cloudfront';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import mime from 'mime-types';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configuration - UPDATE THESE VALUES AFTER AWS SETUP
const BUCKET_NAME = process.env.S3_BUCKET_NAME || 'omni-web-bucket';
const CLOUDFRONT_DISTRIBUTION_ID = process.env.CLOUDFRONT_DISTRIBUTION_ID || 'EAHP0ENGXG83U';
const AWS_REGION = process.env.AWS_REGION || 'us-east-1';

// Initialize AWS clients
const s3Client = new S3Client({ region: AWS_REGION });
const cloudFrontClient = new CloudFrontClient({ region: AWS_REGION });

// Function to upload a file to S3
async function uploadFile(filePath, key) {
  const fileContent = fs.readFileSync(filePath);
  const contentType = mime.lookup(filePath) || 'application/octet-stream';
  
  const command = new PutObjectCommand({
    Bucket: BUCKET_NAME,
    Key: key,
    Body: fileContent,
    ContentType: contentType,
    CacheControl: key.endsWith('.html') ? 'no-cache' : 'max-age=31536000', // 1 year for assets
  });

  try {
    await s3Client.send(command);
    console.log(`✅ Uploaded: ${key}`);
  } catch (error) {
    console.error(`❌ Error uploading ${key}:`, error);
    throw error;
  }
}

// Function to upload directory recursively
async function uploadDirectory(dirPath, prefix = '') {
  const files = fs.readdirSync(dirPath);
  
  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const key = prefix ? `${prefix}/${file}` : file;
    
    if (fs.statSync(filePath).isDirectory()) {
      await uploadDirectory(filePath, key);
    } else {
      await uploadFile(filePath, key);
    }
  }
}

// Function to clear S3 bucket
async function clearBucket() {
  console.log('🧹 Clearing existing files from S3 bucket...');
  
  try {
    const listCommand = new ListObjectsV2Command({ Bucket: BUCKET_NAME });
    const listResponse = await s3Client.send(listCommand);
    
    if (listResponse.Contents && listResponse.Contents.length > 0) {
      for (const object of listResponse.Contents) {
        const deleteCommand = new DeleteObjectCommand({
          Bucket: BUCKET_NAME,
          Key: object.Key,
        });
        await s3Client.send(deleteCommand);
        console.log(`🗑️  Deleted: ${object.Key}`);
      }
    }
  } catch (error) {
    console.error('❌ Error clearing bucket:', error);
    throw error;
  }
}

// Function to invalidate CloudFront cache
async function invalidateCloudFront() {
  if (!CLOUDFRONT_DISTRIBUTION_ID) {
    console.log('⚠️  CloudFront distribution ID not set, skipping cache invalidation');
    console.log('   Set CLOUDFRONT_DISTRIBUTION_ID environment variable to enable cache invalidation');
    return;
  }

  console.log('🔄 Invalidating CloudFront cache...');
  
  const command = new CreateInvalidationCommand({
    DistributionId: CLOUDFRONT_DISTRIBUTION_ID,
    InvalidationBatch: {
      CallerReference: `deploy-${Date.now()}`,
      Paths: {
        Quantity: 1,
        Items: ['/*']
      }
    }
  });

  try {
    await cloudFrontClient.send(command);
    console.log('✅ CloudFront cache invalidation initiated');
  } catch (error) {
    console.error('❌ Error invalidating CloudFront cache:', error);
    throw error;
  }
}

// Main deployment function
async function deploy() {
  try {
    console.log('🚀 Starting deployment to AWS S3...');
    
    // Check if dist directory exists
    const distPath = path.join(__dirname, 'dist');
    if (!fs.existsSync(distPath)) {
      console.error('❌ dist directory not found. Please run "npm run build" first.');
      process.exit(1);
    }

    // Clear existing files
    await clearBucket();
    
    // Upload new files
    console.log('📤 Uploading files to S3...');
    await uploadDirectory(distPath);
    
    // Invalidate CloudFront cache
    await invalidateCloudFront();
    
    console.log('🎉 Deployment completed successfully!');
    console.log(`🌐 S3 Website URL: http://${BUCKET_NAME}.s3-website-${AWS_REGION}.amazonaws.com`);
    if (CLOUDFRONT_DISTRIBUTION_ID) {
      console.log(`☁️  CloudFront cache invalidation initiated`);
      console.log(`   Note: CloudFront URL will be available in AWS Console`);
    }
    
  } catch (error) {
    console.error('💥 Deployment failed:', error);
    process.exit(1);
  }
}

// Run deployment
deploy();
