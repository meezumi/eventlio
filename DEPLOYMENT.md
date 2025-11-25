# Deployment Guide for Eventlio

## Node.js Version Update (Required)

This project has been updated to use **Node.js 22.x** to comply with Vercel's requirements.

### Changes Made:
1. ✅ Created `.nvmrc` file specifying Node.js 22
2. ✅ Created `.node-version` file for additional version management
3. ✅ Updated `package.json` with engines field requiring Node.js >= 22.0.0
4. ✅ Created `.env.example` file with all required environment variables

---

## Prerequisites

Before deploying, ensure you have:

- Node.js 22.x or higher installed locally
- npm or yarn package manager
- A Vercel account
- Required API keys and credentials (see Environment Variables section)

---

## Environment Variables

Copy `.env.example` to `.env.local` and fill in the required values:

### Clerk Authentication
```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
WEBHOOK_SECRET=your_clerk_webhook_secret
```
Get these from: https://clerk.com/

### MongoDB
```env
MONGODB_URI=your_mongodb_connection_string
```
Get this from: https://www.mongodb.com/cloud/atlas

### UploadThing
```env
UPLOADTHING_SECRET=your_uploadthing_secret
UPLOADTHING_APP_ID=your_uploadthing_app_id
```
Get these from: https://uploadthing.com/

### Stripe
```env
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
```
Get these from: https://stripe.com/

---

## Local Development Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your actual values
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## Deploying to Vercel

### Method 1: Via Vercel Dashboard (Recommended)

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Update to Node.js 22"
   git push origin master
   ```

2. **Import project in Vercel:**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "Add New" → "Project"
   - Import your GitHub repository

3. **Configure Node.js version:**
   - The `.nvmrc` file will automatically set Node.js 22
   - Verify in Project Settings → General → Node.js Version shows "22.x"

4. **Set environment variables:**
   - Go to Project Settings → Environment Variables
   - Add all variables from your `.env.local` file
   - Make sure to add them for Production, Preview, and Development environments

5. **Deploy:**
   - Click "Deploy"
   - Vercel will build and deploy your application

### Method 2: Via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```
   Follow the prompts to link your project and deploy.

4. **Deploy to production:**
   ```bash
   vercel --prod
   ```

---

## Updating Existing Vercel Project

If you already have the project deployed on Vercel:

1. **Update Project Settings:**
   - Go to your project in Vercel Dashboard
   - Navigate to Settings → General
   - Under "Node.js Version", select **22.x**
   - Click "Save"

2. **Push the updated code:**
   ```bash
   git add .
   git commit -m "Update to Node.js 22"
   git push origin master
   ```

3. **Redeploy:**
   Vercel will automatically trigger a new deployment with Node.js 22

---

## Webhook Configuration

After deployment, you need to configure webhooks:

### Clerk Webhook
1. Go to your Clerk Dashboard
2. Navigate to Webhooks
3. Add endpoint: `https://your-domain.vercel.app/api/webhook/clerk`
4. Subscribe to user events (user.created, user.updated, etc.)
5. Copy the webhook secret to your Vercel environment variables

### Stripe Webhook
1. Go to your Stripe Dashboard
2. Navigate to Developers → Webhooks
3. Add endpoint: `https://your-domain.vercel.app/api/webhook/stripe`
4. Subscribe to payment events
5. Copy the webhook secret to your Vercel environment variables

---

## Post-Deployment Verification

1. **Check deployment logs:**
   - Verify no errors in build logs
   - Ensure all environment variables are loaded correctly

2. **Test functionality:**
   - [ ] User authentication (sign up/sign in)
   - [ ] Event creation
   - [ ] Event browsing
   - [ ] Image uploads
   - [ ] Payment processing
   - [ ] Order management

3. **Monitor application:**
   - Check Vercel Analytics for performance
   - Monitor error logs in Vercel Dashboard

---

## Troubleshooting

### Build Failures
- Ensure all environment variables are set correctly
- Check build logs for specific errors
- Verify Node.js version is set to 22.x

### Runtime Errors
- Check function logs in Vercel Dashboard
- Verify MongoDB connection string is correct
- Ensure webhook secrets match between services and environment variables

### Database Connection Issues
- Whitelist Vercel's IP addresses in MongoDB Atlas
- Or use "Allow access from anywhere" (0.0.0.0/0) for MongoDB Atlas

---

## Additional Resources

- [Next.js Deployment Documentation](https://nextjs.org/docs/deployment)
- [Vercel Documentation](https://vercel.com/docs)
- [Node.js 22 Release Notes](https://nodejs.org/en/blog/release/v22.0.0)

---

## Support

If you encounter any issues during deployment, please:
1. Check the troubleshooting section above
2. Review Vercel deployment logs
3. Consult the official documentation for each service

---

**Last Updated:** November 24, 2025
