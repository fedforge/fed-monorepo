#!/bin/bash

# Clean up
rm -rf node_modules
rm -rf apps/*/node_modules
rm -rf packages/*/node_modules
rm -f pnpm-lock.yaml

# Update root package.json
cat > package.json << 'EOF'
{
  "name": "fed-monorepo",
  "private": true,
  "packageManager": "pnpm@10.10.0",
  "scripts": {
    "dev": "turbo run dev",
    "build": "turbo run build",
    "lint": "turbo run lint",
    "native": "cd apps/mobile && pnpm start",
    "web": "cd apps/web && pnpm dev",
    "clean": "pnpm -r exec rimraf dist node_modules",
    "reset": "pnpm clean && pnpm install"
  },
  "devDependencies": {
    "@types/react": "^18.2.61",
    "eslint": "^8.57.0",
    "turbo": "^1.12.4",
    "typescript": "^5.3.3",
    "rimraf": "^5.0.5"
  }
}
EOF

# Update web app package.json
mkdir -p apps/web
cat > apps/web/package.json << 'EOF'
{
  "name": "@fed/web",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@fed/shared": "workspace:*",
    "@fed/ui": "workspace:*",
    "@fed/core": "workspace:*",
    "next": "14.1.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/node": "^20.11.24",
    "@types/react": "^18.2.61",
    "@types/react-dom": "^18.2.19",
    "eslint": "8.57.0",
    "eslint-config-next": "14.1.0",
    "typescript": "^5.3.3"
  }
}
EOF

# Update turbo.json
cat > turbo.json << 'EOF'
{
  "$schema": "https://turbo.build/schema.json",
  "globalDependencies": ["**/.env.*local"],
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**", ".next/**", "!.next/cache/**"]
    },
    "lint": {},
    "dev": {
      "cache": false,
      "persistent": true
    }
  }
}
EOF

# Ensure workspace config is correct
cat > pnpm-workspace.yaml << 'EOF'
packages:
  - 'packages/*'
  - 'apps/*'
EOF

# Create basic package structure if it doesn't exist
mkdir -p packages/shared/src
mkdir -p packages/ui/src
mkdir -p packages/core/src

# Create basic package.json for required packages
for pkg in shared ui core; do
  cat > "packages/$pkg/package.json" << EOF
{
  "name": "@fed/$pkg",
  "version": "0.1.0",
  "private": true,
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "scripts": {
    "build": "tsc",
    "dev": "tsc --watch",
    "lint": "eslint src"
  }
}
EOF
done

echo "Workspace fixed! Now run:"
echo "1. pnpm install"
echo "2. pnpm build" 