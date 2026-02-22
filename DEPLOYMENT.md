# Production Deployment Guide

This guide will help you deploy Agroveda Exports to Vercel (free hosting platform).

## Prerequisites

1. **GitHub Account** - Free account at [github.com](https://github.com)
2. **Vercel Account** - Free account at [vercel.com](https://vercel.com)
3. **Database Account** - Free PostgreSQL database (we'll use Supabase or Neon)

## Step 1: Set Up Free PostgreSQL Database

### Option A: Supabase (Recommended)

1. Go to [supabase.com](https://supabase.com)
2. Sign up for a free account
3. Create a new project
4. Go to **Settings** → **Database**
5. Copy the **Connection string** (URI format)
   - It will look like: `postgresql://postgres:[YOUR-PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres`

### Option B: Neon (Alternative)

1. Go to [neon.tech](https://neon.tech)
2. Sign up for a free account
3. Create a new project
4. Copy the **Connection string** from the dashboard

## Step 2: Update Prisma Schema for PostgreSQL

The schema is already configured to work with both SQLite (development) and PostgreSQL (production).

## Step 3: Push Your Code to GitHub

1. **Initialize Git** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Agroveda Exports"
   ```

2. **Create a GitHub repository**:
   - Go to [github.com/new](https://github.com/new)
   - Name it `agroveda-exports` (or any name you prefer)
   - Don't initialize with README
   - Click "Create repository"

3. **Push to GitHub**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/agroveda-exports.git
   git branch -M main
   git push -u origin main
   ```

## Step 4: Deploy to Vercel

1. **Go to Vercel**:
   - Visit [vercel.com](https://vercel.com)
   - Sign up/Login with your GitHub account

2. **Import Project**:
   - Click "Add New" → "Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js

3. **Configure Environment Variables**:
   Add these in Vercel's environment variables section:
   
   ```
   DATABASE_URL=your-postgresql-connection-string
   NEXTAUTH_URL=https://your-app-name.vercel.app
   NEXTAUTH_SECRET=generate-a-random-secret-here
   ```
   
   To generate NEXTAUTH_SECRET:
   ```bash
   openssl rand -base64 32
   ```

4. **Configure Build Settings**:
   - Framework Preset: Next.js
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)
   - Install Command: `npm install` (default)

5. **Deploy**:
   - Click "Deploy"
   - Wait for build to complete (2-3 minutes)

## Step 5: Set Up Database

After deployment, you need to run migrations and seed the database:

1. **Run Prisma Migrations**:
   ```bash
   npx prisma migrate deploy
   ```
   
   Or use Vercel's CLI:
   ```bash
   vercel env pull .env.local
   npx prisma migrate deploy
   ```

2. **Seed the Database**:
   ```bash
   npm run seed
   ```

   **Note**: You can run these commands locally with production DATABASE_URL, or use Vercel's CLI.

## Step 6: Access Your Website

Once deployed, Vercel will provide you with:
- **Production URL**: `https://your-app-name.vercel.app`
- **Admin Dashboard**: `https://your-app-name.vercel.app/admin`

## Step 7: Set Up Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Click **Settings** → **Domains**
3. Add your custom domain
4. Follow DNS configuration instructions

## Environment Variables Reference

| Variable | Description | Example |
|----------|-------------|---------|
| `DATABASE_URL` | PostgreSQL connection string | `postgresql://user:pass@host:5432/db` |
| `NEXTAUTH_URL` | Your app URL | `https://your-app.vercel.app` |
| `NEXTAUTH_SECRET` | Secret for NextAuth | Random 32+ character string |
| `WHATSAPP_NUMBER` | WhatsApp number (optional) | `919876543210` |

## Post-Deployment Checklist

- [ ] Database migrations run successfully
- [ ] Database seeded with admin user and products
- [ ] Admin login works
- [ ] Products display correctly
- [ ] Enquiry forms work
- [ ] Email and WhatsApp links work
- [ ] Custom domain configured (if applicable)
- [ ] SSL certificate active (automatic with Vercel)

## Troubleshooting

### Database Connection Issues
- Verify DATABASE_URL is correct
- Check if database allows connections from Vercel's IPs
- Ensure SSL is enabled in connection string (add `?sslmode=require`)

### Build Failures
- Check build logs in Vercel dashboard
- Ensure all environment variables are set
- Verify Prisma schema is correct

### Authentication Issues
- Verify NEXTAUTH_URL matches your deployment URL
- Check NEXTAUTH_SECRET is set correctly
- Ensure cookies are enabled in browser

## Free Tier Limits

### Vercel Free Tier:
- ✅ Unlimited deployments
- ✅ 100GB bandwidth/month
- ✅ Automatic SSL
- ✅ Custom domains
- ⚠️ Serverless functions: 100GB-hours/month

### Supabase Free Tier:
- ✅ 500MB database storage
- ✅ 2GB bandwidth/month
- ✅ Unlimited API requests

### Neon Free Tier:
- ✅ 0.5GB storage
- ✅ Unlimited projects
- ✅ Auto-suspend after inactivity

## Support

For deployment issues, check:
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
- [Prisma Deployment Guide](https://www.prisma.io/docs/guides/deployment)

---

**Your website is now live! 🎉**
