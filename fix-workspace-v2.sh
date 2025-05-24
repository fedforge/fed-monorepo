#!/bin/bash

# Fix cyclic dependencies by updating package.json files
mkdir -p packages/testing/src
cat > packages/testing/package.json << 'EOF'
{
  "name": "@fed/testing",
  "version": "0.1.0",
  "private": true,
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "scripts": {
    "build": "tsc",
    "dev": "tsc --watch",
    "lint": "eslint src"
  },
  "devDependencies": {
    "typescript": "^5.3.3",
    "eslint": "^8.57.0"
  }
}
EOF

mkdir -p packages/tools/src
cat > packages/tools/package.json << 'EOF'
{
  "name": "@fed/tools",
  "version": "0.1.0",
  "private": true,
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "scripts": {
    "build": "tsc",
    "dev": "tsc --watch",
    "lint": "eslint src"
  },
  "devDependencies": {
    "typescript": "^5.3.3",
    "eslint": "^8.57.0"
  }
}
EOF

# Fix mobile app package.json
mkdir -p apps/mobile
cat > apps/mobile/package.json << 'EOF'
{
  "name": "@fed/mobile",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@fed/shared": "workspace:*",
    "@fed/ui": "workspace:*",
    "@fed/core": "workspace:*",
    "react": "^18.2.0",
    "react-native": "^0.73.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.61",
    "@types/react-native": "^0.73.0",
    "typescript": "^5.3.3"
  }
}
EOF

# Install turbo globally
echo "Installing turbo..."
pnpm add -g turbo

echo "Workspace fixed! Now run:"
echo "1. pnpm install"
echo "2. pnpm build" 