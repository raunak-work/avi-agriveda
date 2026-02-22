#!/bin/bash

# Startup script for Agroveda Exports website

echo "🚀 Starting Agroveda Exports Website Setup..."

# Check if .env exists
if [ ! -f .env ]; then
    echo "📝 Creating .env file..."
    cat > .env << EOF
DATABASE_URL="file:./dev.db"
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=$(openssl rand -base64 32)
WHATSAPP_NUMBER=+919876543210
EOF
    echo "✅ .env file created"
else
    echo "✅ .env file already exists"
fi

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo "✅ Dependencies installed"
else
    echo "✅ Dependencies already installed"
fi

# Generate Prisma Client
echo "🔧 Setting up database..."
npx prisma generate

# Check if database exists
if [ ! -f "prisma/dev.db" ]; then
    echo "🗄️  Creating database..."
    npx prisma migrate dev --name init
    echo "✅ Database created"
else
    echo "✅ Database already exists"
fi

# Check if database is seeded
SEEDED=$(npx prisma db execute --stdin <<< "SELECT COUNT(*) as count FROM Product;" 2>/dev/null | grep -o '[0-9]' | head -1 || echo "0")

if [ "$SEEDED" = "0" ] || [ -z "$SEEDED" ]; then
    echo "🌱 Seeding database with initial data..."
    npm run seed
    echo "✅ Database seeded"
else
    echo "✅ Database already seeded"
fi

echo ""
echo "🎉 Setup complete! Starting development server..."
echo ""
echo "📍 Website will be available at: http://localhost:3000"
echo "🔐 Admin login: admin@agrovedaexports.com / admin123"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

# Start the development server
npm run dev
