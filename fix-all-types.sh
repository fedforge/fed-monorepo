#!/bin/bash

# List of all packages
PACKAGES=($(ls -d packages/*/ | cut -f2 -d'/'))

for pkg in "${PACKAGES[@]}"; do
    echo "Setting up $pkg..."
    
    # Create basic directory structure
    mkdir -p "packages/$pkg/src/types"
    
    # Create minimal index.ts
    cat > "packages/$pkg/src/index.ts" << 'EOF'
export * from './types'
EOF
    
    # Create types based on package
    case $pkg in
        "config")
            cat > "packages/$pkg/src/types/index.ts" << 'EOF'
export interface BaseConfig {
  enabled?: boolean;
}

export interface BuildConfig {
  env: 'development' | 'staging' | 'production';
  optimize: boolean;
  sourceMaps: boolean;
}

export interface RuntimeConfig {
  features: Record<string, boolean>;
  api: {
    url: string;
    timeout: number;
  };
}
EOF
            ;;
        "testing")
            cat > "packages/$pkg/src/types/index.ts" << 'EOF'
export interface BaseConfig {
  enabled?: boolean;
}

export interface TestFixturesConfig {
  path: string;
  cleanup: boolean;
}

export interface TestHelpersConfig {
  timeout: number;
  retries: number;
}

export interface TestIntegrationConfig {
  baseUrl: string;
  auth?: {
    username: string;
    password: string;
  };
}
EOF
            ;;
        *)
            cat > "packages/$pkg/src/types/index.ts" << 'EOF'
export interface BaseConfig {
  enabled?: boolean;
}
EOF
            ;;
    esac

    # Create package.json if it doesn't exist
    if [ ! -f "packages/$pkg/package.json" ]; then
        cat > "packages/$pkg/package.json" << EOF
{
  "name": "@fed/$pkg",
  "version": "0.0.1",
  "private": true,
  "main": "src/index.ts",
  "types": "src/index.ts",
  "scripts": {
    "dev": "tsc --watch --preserveWatchOutput",
    "watch": "tsc --watch --preserveWatchOutput",
    "build": "tsc",
    "clean": "rimraf dist",
    "lint": "eslint src/**/*.ts"
  },
  "devDependencies": {
    "typescript": "^5.3.3",
    "rimraf": "^5.0.5"
  }
}
EOF
    fi

    # Create tsconfig.json if it doesn't exist
    if [ ! -f "packages/$pkg/tsconfig.json" ]; then
        cat > "packages/$pkg/tsconfig.json" << 'EOF'
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "outDir": "dist",
    "rootDir": "src",
    "composite": true,
    "incremental": true,
    "tsBuildInfoFile": "./dist/.tsbuildinfo"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
EOF
    fi
done

# Create base tsconfig if it doesn't exist
if [ ! -f "tsconfig.base.json" ]; then
    cat > "tsconfig.base.json" << 'EOF'
{
  "compilerOptions": {
    "target": "es2020",
    "module": "commonjs",
    "lib": ["es2020"],
    "declaration": true,
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "incremental": true
  }
}
EOF
fi

# Update root package.json scripts
cat > "package.json" << 'EOF'
{
  "name": "fed-monorepo",
  "private": true,
  "packageManager": "pnpm@10.10.0",
  "scripts": {
    "dev": "turbo run dev --parallel --concurrency=25",
    "watch": "turbo run watch --parallel --concurrency=25",
    "build": "turbo run build",
    "clean": "turbo run clean",
    "lint": "turbo run lint",
    "test": "jest"
  },
  "devDependencies": {
    "@types/jest": "^29.5.12",
    "@types/node": "^20.11.24",
    "@types/react": "^18.2.61",
    "jest": "^29.7.0",
    "ts-jest": "^29.3.4",
    "tsup": "^8.0.0",
    "turbo": "^1.13.4",
    "typescript": "^5.3.3",
    "rimraf": "^5.0.5"
  }
}
EOF

echo "All packages have been set up with watch mode configuration. Run 'pnpm install && pnpm dev' to start development." 