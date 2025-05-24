#!/bin/bash

BASE_DIR="./packages"
ROOT_TS_CONFIG='../../tsconfig.base.json'

# Function to create directory and index.ts with proper exports
create_dir_with_index() {
    local dir="$1"
    local comment="$2"
    if [[ ! -d "$dir" ]]; then
        mkdir -p "$dir"
        cat <<EOF > "$dir/index.ts"
/**
 * $comment
 * @packageDocumentation
 */

export * from './types'
EOF
    fi
}

# Function to create package.json with proper dependencies
create_package_json() {
    local dir="$1"
    local name="$2"
    local deps="$3"
    local devDeps="$4"
    cat <<EOF > "$dir/package.json"
{
  "name": "@fed/$name",
  "version": "0.1.0",
  "private": true,
  "main": "dist/index.js",
  "module": "dist/index.mjs",
  "types": "dist/index.d.ts",
  "sideEffects": false,
  "files": ["dist"],
  "scripts": {
    "build": "tsup src/index.ts --format cjs,esm --dts --clean",
    "dev": "tsup src/index.ts --format cjs,esm --dts --watch",
    "lint": "eslint src --ext .ts,.tsx",
    "test": "jest",
    "clean": "rimraf dist"
  },
  "dependencies": {
    $deps
  },
  "devDependencies": {
    $devDeps
  }
}
EOF
}

# Function to create tsconfig.json
create_tsconfig() {
    local dir="$1"
    cat <<EOF > "$dir/tsconfig.json"
{
  "extends": "$ROOT_TS_CONFIG",
  "compilerOptions": {
    "outDir": "dist",
    "rootDir": "src",
    "paths": {
      "@fed/*": ["../*/src"]
    }
  },
  "include": ["src"],
  "exclude": ["node_modules", "dist", "**/*.test.ts"]
}
EOF
}

# Function to create README with proper documentation
create_readme() {
    local dir="$1"
    local name="$2"
    local description="$3"
    cat <<EOF > "$dir/README.md"
# @fed/$name

$description

## Installation

\`\`\`bash
pnpm add @fed/$name
\`\`\`

## Usage

\`\`\`typescript
import { ... } from '@fed/$name'
\`\`\`

## Structure
\`\`\`
$(tree -L 3 "$dir/src" 2>/dev/null || echo "Directory structure will be generated")
\`\`\`

## Development

\`\`\`bash
# Build
pnpm build

# Development with watch mode
pnpm dev

# Run tests
pnpm test

# Lint
pnpm lint
\`\`\`
EOF
}

# Create essential base packages
declare -A BASE_PACKAGES=(
    ["core"]="Core business logic and domain models"
    ["shared"]="Shared utilities and common functionality"
    ["ui"]="UI components and design system"
    ["api"]="API services and endpoints"
    ["features"]="Business features and modules"
)

# Create infrastructure packages
declare -A INFRA_PACKAGES=(
    ["config"]="Configuration management"
    ["testing"]="Testing utilities and helpers"
    ["tools"]="Development tools and scripts"
    ["infrastructure"]="Infrastructure and deployment"
)

# Create specialized packages
declare -A SPECIALIZED_PACKAGES=(
    ["analytics"]="Analytics and tracking"
    ["security"]="Security and authentication"
    ["monitoring"]="System monitoring and logging"
    ["i18n"]="Internationalization"
    ["sdk"]="Client SDKs"
    ["docs"]="Documentation and examples"
)

# Setup base packages
for pkg in "${!BASE_PACKAGES[@]}"; do
    DIR="$BASE_DIR/$pkg"
    DESC="${BASE_PACKAGES[$pkg]}"
    
    echo "📦 Setting up $pkg package..."
    
    # Create basic structure
    create_dir_with_index "$DIR/src" "$DESC"
    create_dir_with_index "$DIR/src/types" "Type definitions"
    create_dir_with_index "$DIR/src/__tests__" "Test files"
    
    # Package-specific directories
    case $pkg in
        "core")
            create_dir_with_index "$DIR/src/models" "Domain models"
            create_dir_with_index "$DIR/src/services" "Core services"
            create_dir_with_index "$DIR/src/utils" "Core utilities"
            DEPS=""
            ;;
        "shared")
            create_dir_with_index "$DIR/src/utils" "Shared utilities"
            create_dir_with_index "$DIR/src/hooks" "Shared hooks"
            create_dir_with_index "$DIR/src/constants" "Shared constants"
            DEPS="\"@fed/core\": \"workspace:*\""
            ;;
        "ui")
            create_dir_with_index "$DIR/src/components/atoms" "Atomic components"
            create_dir_with_index "$DIR/src/components/molecules" "Molecular components"
            create_dir_with_index "$DIR/src/components/organisms" "Organism components"
            create_dir_with_index "$DIR/src/hooks" "UI hooks"
            create_dir_with_index "$DIR/src/styles" "Styling utilities"
            create_dir_with_index "$DIR/src/themes" "Theme definitions"
            DEPS="\"@fed/shared\": \"workspace:*\""
            ;;
        "api")
            create_dir_with_index "$DIR/src/routes" "API routes"
            create_dir_with_index "$DIR/src/controllers" "Route controllers"
            create_dir_with_index "$DIR/src/middleware" "API middleware"
            create_dir_with_index "$DIR/src/services" "API services"
            create_dir_with_index "$DIR/src/graphql" "GraphQL definitions"
            DEPS="\"@fed/core\": \"workspace:*\""
            ;;
        "features")
            create_dir_with_index "$DIR/src/auth" "Authentication feature"
            create_dir_with_index "$DIR/src/users" "User management"
            create_dir_with_index "$DIR/src/payments" "Payment processing"
            DEPS="\"@fed/core\": \"workspace:*\", \"@fed/ui\": \"workspace:*\", \"@fed/shared\": \"workspace:*\""
            ;;
    esac
    
    # Common dev dependencies
    DEV_DEPS="\"@fed/testing\": \"workspace:*\", \"@fed/tools\": \"workspace:*\""
    
    # Create configuration files
    create_package_json "$DIR" "$pkg" "$DEPS" "$DEV_DEPS"
    create_tsconfig "$DIR"
    create_readme "$DIR" "$pkg" "$DESC"
done

# Setup infrastructure packages
for pkg in "${!INFRA_PACKAGES[@]}"; do
    DIR="$BASE_DIR/$pkg"
    DESC="${INFRA_PACKAGES[$pkg]}"
    
    echo "🛠️  Setting up $pkg package..."
    
    create_dir_with_index "$DIR/src" "$DESC"
    
    case $pkg in
        "config")
            create_dir_with_index "$DIR/src/env" "Environment configuration"
            create_dir_with_index "$DIR/src/build" "Build configuration"
            create_dir_with_index "$DIR/src/runtime" "Runtime configuration"
            ;;
        "testing")
            create_dir_with_index "$DIR/src/fixtures" "Test fixtures"
            create_dir_with_index "$DIR/src/helpers" "Test helpers"
            create_dir_with_index "$DIR/src/mocks" "Mock services"
            create_dir_with_index "$DIR/src/integration" "Integration test utilities"
            ;;
        "tools")
            create_dir_with_index "$DIR/src/generators" "Code generators"
            create_dir_with_index "$DIR/src/scripts" "Build scripts"
            create_dir_with_index "$DIR/src/ci" "CI/CD configuration"
            create_dir_with_index "$DIR/src/dev" "Development utilities"
            ;;
        "infrastructure")
            create_dir_with_index "$DIR/src/aws" "AWS configuration"
            create_dir_with_index "$DIR/src/docker" "Docker configuration"
            create_dir_with_index "$DIR/src/kubernetes" "Kubernetes configuration"
            create_dir_with_index "$DIR/src/terraform" "Terraform configuration"
            ;;
    esac
    
    create_package_json "$DIR" "$pkg" "" "$DEV_DEPS"
    create_tsconfig "$DIR"
    create_readme "$DIR" "$pkg" "$DESC"
done

# Setup specialized packages
for pkg in "${!SPECIALIZED_PACKAGES[@]}"; do
    DIR="$BASE_DIR/$pkg"
    DESC="${SPECIALIZED_PACKAGES[$pkg]}"
    
    echo "🔧 Setting up $pkg package..."
    
    create_dir_with_index "$DIR/src" "$DESC"
    create_dir_with_index "$DIR/src/types" "Type definitions"
    create_dir_with_index "$DIR/src/__tests__" "Test files"
    
    DEPS="\"@fed/core\": \"workspace:*\", \"@fed/shared\": \"workspace:*\""
    
    create_package_json "$DIR" "$pkg" "$DEPS" "$DEV_DEPS"
    create_tsconfig "$DIR"
    create_readme "$DIR" "$pkg" "$DESC"
done

# Create root tsconfig.base.json if it doesn't exist
if [[ ! -f "./tsconfig.base.json" ]]; then
    cat <<EOF > "./tsconfig.base.json"
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
fi

echo "🎉 Perfect monorepo structure created!"
echo "
📦 Package Dependencies:
shared <---- ui <---- features
  ^         ^          ^
  |         |          |
  +--- core <----------+
        ^
        |
       api

🔧 Next steps:
1. Run 'pnpm install' to install dependencies
2. Run 'pnpm build' to build all packages
3. Run 'pnpm test' to verify setup
"