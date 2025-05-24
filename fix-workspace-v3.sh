#!/bin/bash

# Update root package.json with correct React version
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
    "turbo": "^1.13.4",
    "typescript": "^5.3.3",
    "rimraf": "^5.0.10"
  },
  "resolutions": {
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "@types/react": "^18.2.61"
  }
}
EOF

# Fix mobile app package.json with correct React version
cat > apps/mobile/package.json << 'EOF'
{
  "name": "@fed/mobile",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@fed/shared": "workspace:*",
    "@fed/ui": "workspace:*",
    "@fed/core": "workspace:*",
    "react": "18.2.0",
    "react-native": "^0.73.11"
  },
  "devDependencies": {
    "@types/react": "^18.2.61",
    "@types/react-native": "^0.73.0",
    "typescript": "^5.3.3"
  }
}
EOF

# Fix web app package.json
cat > apps/web/package.json << 'EOF'
{
  "name": "@fed/web",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@fed/shared": "workspace:*",
    "@fed/ui": "workspace:*",
    "@fed/core": "workspace:*",
    "next": "14.1.0",
    "react": "18.2.0",
    "react-dom": "18.2.0"
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

# Create .npmrc to handle peer dependencies better
cat > .npmrc << 'EOF'
strict-peer-dependencies=false
auto-install-peers=true
resolve-peers-from-workspace-root=true
EOF

echo "Cleaning up..."
rm -rf node_modules
rm -rf apps/*/node_modules
rm -rf packages/*/node_modules
rm -f pnpm-lock.yaml

echo "Workspace fixed! Now run:"
echo "1. pnpm install"
echo "2. pnpm build" 