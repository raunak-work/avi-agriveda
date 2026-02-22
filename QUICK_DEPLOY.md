# Quick Deployment Guide - Deploy in 5 Minutes! 🚀

## Fastest Way to Deploy

### Step 1: Get Free Database (2 minutes)

**Option A: Supabase (Easiest)**
1. Go to https://supabase.com
2. Click "Start your project" → Sign up with GitHub
3. Create new project → Wait 2 minutes
4. Go to Settings → Database
5. Copy the **Connection string** (URI format)

**Option B: Neon**
1. Go to https://neon.tech
2. Sign up → Create project
3. Copy connection string

### Step 2: Push to GitHub (1 minute)

```bash
# In your project folder
git init
git add .
git commit -m "Ready for deployment"
git branch -M main

# Create repo at github.com/new, then:
git remote add origin https://github.com/YOUR_USERNAME/agroveda-exports.git
git push -u origin main
```

### Step 3: Deploy to Vercel (2 minutes)

1. Go to https://vercel.com
2. Click "Add New" → "Project"
3. Import your GitHub repo
4. Add Environment Variables:
   - `DATABASE_URL` = Your PostgreSQL connection string
   - `NEXTAUTH_URL` = `https://your-app-name.vercel.app` (Vercel will show this)
   - `NEXTAUTH_SECRET` = Run: `openssl rand -base64 32`
5. Click "Deploy"

### Step 4: Set Up Database

After deployment, run these commands locally:

```bash
# Pull environment variables
vercel env pull .env.local

# Update Prisma for PostgreSQL
# Edit prisma/schema.prisma, change:
# provider = "postgresql"

# Generate and migrate
npx prisma generate
npx prisma migrate deploy

# Seed database
npm run seed
```

**OR** use Vercel CLI:

```bash
npm i -g vercel
vercel login
vercel link
vercel env pull .env.local
# Then run migrations and seed
```

## That's It! 🎉

Your website is now live at: `https://your-app-name.vercel.app`

**Admin Login:**
- Email: `admin@agrovedaexports.com`
- Password: `admin123`

**Don't forget to change the admin password after first login!**

## Need Help?

Check `DEPLOYMENT.md` for detailed instructions.
