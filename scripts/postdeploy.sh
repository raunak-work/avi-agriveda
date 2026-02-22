#!/bin/bash

# Post-deployment script for Vercel
# This script runs database migrations and seeds the database

echo "🚀 Running post-deployment setup..."

# Check if DATABASE_URL is set
if [ -z "$DATABASE_URL" ]; then
  echo "❌ Error: DATABASE_URL environment variable is not set"
  exit 1
fi

# Detect database provider from DATABASE_URL
if [[ "$DATABASE_URL" == postgresql* ]]; then
  echo "📊 Detected PostgreSQL database"
  # Update Prisma schema to use PostgreSQL
  sed -i.bak 's/provider = "sqlite"/provider = "postgresql"/' prisma/schema.prisma
  npx prisma generate
elif [[ "$DATABASE_URL" == file:* ]]; then
  echo "📊 Detected SQLite database"
else
  echo "⚠️  Unknown database type, assuming PostgreSQL"
  sed -i.bak 's/provider = "sqlite"/provider = "postgresql"/' prisma/schema.prisma
  npx prisma generate
fi

# Run migrations
echo "🔄 Running database migrations..."
npx prisma migrate deploy

# Seed database (only if needed - check if admin exists)
echo "🌱 Seeding database..."
npm run seed

echo "✅ Post-deployment setup complete!"
