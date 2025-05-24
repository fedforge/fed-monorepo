#!/bin/bash

# Install tsup globally in the workspace
pnpm add -Dw tsup

# Update all package.json files to use consistent dev scripts
for dir in packages/*/; do
    pkg=$(basename "$dir")
    cat > "$dir/package.json" << EOF
{
  "name": "@fed/$pkg",
  "version": "0.1.0",
  "private": true,
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "scripts": {
    "dev": "tsc --watch",
    "build": "tsc",
    "lint": "eslint src"
  },
  "devDependencies": {
    "typescript": "^5.3.3",
    "eslint": "^8.57.0"
  }
}
EOF
done

# Create tsconfig.json for each package if it doesn't exist
for dir in packages/*/; do
    if [ ! -f "$dir/tsconfig.json" ]; then
        cat > "$dir/tsconfig.json" << EOF
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "outDir": "dist",
    "rootDir": "src"
  },
  "include": ["src"]
}
EOF
    fi
done

# Ensure src directory exists
for dir in packages/*/; do
    mkdir -p "$dir/src"
    if [ ! -f "$dir/src/index.ts" ]; then
        echo "// Add exports here" > "$dir/src/index.ts"
    fi
done

# Update specific packages that need different dev scripts
cat > packages/web/package.json << 'EOF'
{
  "name": "@fed/web",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "14.1.0",
    "react": "18.2.0",
    "react-dom": "18.2.0"
  }
}
EOF

cat > packages/mobile/package.json << 'EOF'
{
  "name": "@fed/mobile",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "react-native start",
    "android": "react-native run-android",
    "ios": "react-native run-ios"
  },
  "dependencies": {
    "react": "18.2.0",
    "react-native": "^0.73.11"
  }
}
EOF

echo "Dev scripts fixed! Now run: pnpm install && pnpm dev" 