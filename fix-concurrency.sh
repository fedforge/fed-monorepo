#!/bin/bash

# Update root package.json with higher concurrency
cat > package.json << 'EOF'
{
  "name": "fed-monorepo",
  "private": true,
  "packageManager": "pnpm@10.10.0",
  "scripts": {
    "dev": "turbo run dev --concurrency=25",
    "build": "turbo run build",
    "lint": "turbo run lint",
    "native": "cd apps/mobile && pnpm start",
    "web": "cd apps/web && pnpm dev"
  },
  "devDependencies": {
    "@types/react": "^18.2.61",
    "eslint": "^8.57.0",
    "turbo": "^1.13.4",
    "typescript": "^5.3.3",
    "tsup": "^8.0.0"
  }
}
EOF

echo "Concurrency fixed! Now run: pnpm dev" 