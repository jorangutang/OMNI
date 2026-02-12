# OMNI - Deployment Guide

This guide covers deploying the OMNI website to AWS S3 and CloudFront.

## Prerequisites

- AWS Account with appropriate permissions
- AWS CLI installed and configured
- Node.js and npm installed

## AWS Setup Steps

### 1. Configure AWS CLI

If you haven't already, configure your AWS credentials:

```bash
aws configure
```

You'll need:
- AWS Access Key ID
- AWS Secret Access Key
- Default region (e.g., us-east-1)
- Default output format (json)

### 2. Create S3 Bucket

Create a unique bucket name (S3 bucket names must be globally unique):

```bash
# Example bucket name format: omni-website-[your-aws-account-id]
BUCKET_NAME="omni-website-123456789012"

# Create the bucket
aws s3api create-bucket \
  --bucket $BUCKET_NAME \
  --region us-east-1
```

### 3. Configure S3 Bucket for Static Website Hosting

```bash
# Enable static website hosting
aws s3 website s3://$BUCKET_NAME/ \
  --index-document index.html \
  --error-document index.html

# Update bucket policy to allow CloudFront access
# Note: We'll use Origin Access Control (OAC) which is set up in CloudFront
```

### 4. Create CloudFront Distribution

Create a CloudFront distribution to serve your website:

**Important Settings:**
- **Origin Domain**: Use your S3 bucket endpoint
- **Origin Access**: Use Origin Access Control (OAC) - recommended
- **Viewer Protocol Policy**: Redirect HTTP to HTTPS
- **Allowed HTTP Methods**: GET, HEAD
- **Cache Policy**: CachingOptimized or create custom
- **Default Root Object**: index.html
- **Custom Error Response**: 
  - Error Code: 403
  - Response Page Path: /index.html
  - Response Code: 200
  - (This enables React Router to work)

You can create this via AWS Console or CLI. After creation, note down:
- **Distribution ID** (e.g., E3CAKXS95F2HI1)
- **CloudFront Domain Name** (e.g., d1234567890abc.cloudfront.net)

### 5. Update deploy.js

Edit the `deploy.js` file and update these values:

```javascript
const BUCKET_NAME = process.env.S3_BUCKET_NAME || 'omni-website-123456789012';
const CLOUDFRONT_DISTRIBUTION_ID = process.env.CLOUDFRONT_DISTRIBUTION_ID || 'E3CAKXS95F2HI1';
const AWS_REGION = process.env.AWS_REGION || 'us-east-1';
```

Or use environment variables:

```bash
export S3_BUCKET_NAME="omni-website-123456789012"
export CLOUDFRONT_DISTRIBUTION_ID="E3CAKXS95F2HI1"
export AWS_REGION="us-east-1"
```

You can also create a `.env` file (don't commit this):

```bash
cp env.example .env
# Then edit .env with your values
```

## Deployment

### First Deployment

```bash
# Build the project
npm run build

# Deploy to S3 and invalidate CloudFront cache
npm run deploy
```

Or use the combined command:

```bash
npm run deploy:full
```

### Subsequent Deployments

After making changes:

```bash
npm run deploy:full
```

This will:
1. Build the React app
2. Clear the S3 bucket
3. Upload new files
4. Invalidate CloudFront cache

## Verification

After deployment:

1. **S3 Website URL**: `http://[bucket-name].s3-website-[region].amazonaws.com`
2. **CloudFront URL**: Check in AWS Console → CloudFront → Distributions
3. Wait 5-10 minutes for CloudFront to deploy changes

## Troubleshooting

### Permission Denied

If you get permission errors:
- Verify AWS credentials are correctly configured
- Check IAM permissions for S3 and CloudFront
- Ensure bucket policy allows your operations

### CloudFront Caching

If changes don't appear:
- Wait for cache invalidation to complete (check AWS Console)
- Invalidations can take 5-15 minutes
- Try hard refresh in browser (Cmd+Shift+R / Ctrl+Shift+R)

### 404 Errors on Routes

If React Router routes return 404:
- Ensure CloudFront error response is configured (403 → /index.html → 200)
- Check that index.html is set as default root object

## Future: Custom Domain

When you're ready to add a custom domain:

1. Register domain or use existing domain
2. Create SSL/TLS certificate in AWS Certificate Manager (us-east-1 region)
3. Validate domain ownership
4. Update CloudFront distribution to use custom domain
5. Add CNAME record in Route 53 or your DNS provider

## Cost Considerations

- **S3 Storage**: Minimal for static websites
- **S3 Requests**: Pay per request
- **CloudFront**: Free tier includes 1TB transfer/month for 12 months
- **CloudFront Invalidations**: First 1,000 paths per month are free

## Security Best Practices

- Use Origin Access Control (OAC) instead of making bucket public
- Enable CloudFront HTTPS only
- Keep AWS credentials secure (never commit to git)
- Regularly rotate access keys
- Use IAM roles with minimal permissions
