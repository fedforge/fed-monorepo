#!/bin/bash

# Add missing dependencies to root package.json
cat > package.json << 'EOF'
{
  "name": "fed-monorepo",
  "private": true,
  "packageManager": "pnpm@10.10.0",
  "scripts": {
    "dev": "turbo run dev --concurrency=25",
    "build": "turbo run build",
    "lint": "turbo run lint"
  },
  "devDependencies": {
    "@types/react": "^18.2.61",
    "@types/node": "^20.11.24",
    "typescript": "^5.3.3",
    "turbo": "^1.13.4",
    "tsup": "^8.0.0"
  }
}
EOF

# Add dependencies to shared package
cat > packages/shared/package.json << 'EOF'
{
  "name": "@fed/shared",
  "version": "0.1.0",
  "private": true,
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "scripts": {
    "dev": "tsc --watch",
    "build": "tsc"
  },
  "dependencies": {
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.2.1",
    "react": "^18.2.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.61",
    "typescript": "^5.3.3"
  }
}
EOF

# Add dependencies to ui package
cat > packages/ui/package.json << 'EOF'
{
  "name": "@fed/ui",
  "version": "0.1.0",
  "private": true,
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "scripts": {
    "dev": "tsc --watch",
    "build": "tsc"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-native": "^0.73.11",
    "@fed/shared": "workspace:*"
  },
  "devDependencies": {
    "@types/react": "^18.2.61",
    "@types/react-native": "^0.73.0",
    "typescript": "^5.3.3"
  }
}
EOF

# Create types files for packages that need them
for pkg in docs security sdk analytics tools i18n testing monitoring config; do
    mkdir -p "packages/$pkg/src/types"
    cat > "packages/$pkg/src/types/index.ts" << 'EOF'
export interface BaseConfig {
  enabled: boolean;
}

export interface ExtendedConfig extends BaseConfig {
  debug?: boolean;
  version?: string;
}
EOF
done

# Update tsconfig.json in root to include proper paths
cat > tsconfig.base.json << 'EOF'
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "node",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "jsx": "react-jsx",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "declaration": true,
    "sourceMap": true,
    "baseUrl": ".",
    "paths": {
      "@fed/*": ["packages/*/src"]
    }
  }
}
EOF

echo "Installing dependencies..."
pnpm install

echo "Types and dependencies fixed! Now run: pnpm dev" 