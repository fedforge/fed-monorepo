#!/bin/bash

# Update turbo.json with correct configuration
cat > turbo.json << 'EOF'
{
  "$schema": "https://turbo.build/schema.json",
  "globalDependencies": ["**/.env.*local"],
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**", ".next/**", "!.next/cache/**"]
    },
    "dev": {
      "cache": false,
      "persistent": true
    },
    "lint": {}
  }
}
EOF

# Run turbo with explicit concurrency flag
echo 'Adding dev script with concurrency...'
cat > package.json << 'EOF'
{
  "name": "fed-monorepo",
  "private": true,
  "packageManager": "pnpm@10.10.0",
  "scripts": {
    "dev": "turbo run dev --concurrency=20",
    "build": "turbo run build",
    "lint": "turbo run lint",
    "native": "cd apps/mobile && pnpm start",
    "web": "cd apps/web && pnpm dev"
  },
  "devDependencies": {
    "turbo": "^1.13.4"
  }
}
EOF

echo "Turbo config fixed! Now run: pnpm dev" 