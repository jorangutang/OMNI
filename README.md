# OMNI

A React + TypeScript + Vite + Tailwind CSS website deployed to AWS S3 and CloudFront.

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

### Setup

1. Create an S3 bucket for static website hosting
2. Create a CloudFront distribution pointing to the S3 bucket
3. Update the `deploy.js` file with your bucket name and CloudFront distribution ID
4. Configure AWS credentials (via AWS CLI or environment variables)

### Deploy

```bash
# Build and deploy
npm run deploy:full

# Or deploy only (if already built)
npm run deploy
```

### Environment Variables

You can set these environment variables to override the default configuration:

- `S3_BUCKET_NAME`: Your S3 bucket name
- `CLOUDFRONT_DISTRIBUTION_ID`: Your CloudFront distribution ID
- `AWS_REGION`: AWS region (default: us-east-1)

Example:
```bash
S3_BUCKET_NAME=my-bucket CLOUDFRONT_DISTRIBUTION_ID=E123456789ABC npm run deploy:full
```

Or set them in the deploy.js file directly.

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **AWS S3** - Static website hosting
- **AWS CloudFront** - CDN and HTTPS

## Project Structure

```
OMNI/
├── public/           # Static assets
├── src/
│   ├── pages/       # Page components
│   ├── components/  # Reusable components
│   ├── App.tsx      # Main app component
│   ├── main.tsx     # Entry point
│   └── index.css    # Global styles
├── deploy.js        # Deployment script
└── ...config files
```
