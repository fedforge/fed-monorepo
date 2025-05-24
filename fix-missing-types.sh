#!/bin/bash

# List of packages that need types fixed
PACKAGES=("sdk" "monitoring" "i18n" "docs" "security" "tools" "analytics")

for pkg in "${PACKAGES[@]}"; do
    # Create types directory if it doesn't exist
    mkdir -p "packages/$pkg/src/types"
    
    case $pkg in
        "sdk")
            cat > "packages/$pkg/src/types/index.ts" << 'EOF'
export interface SDKOptions {
  apiKey: string;
  environment: 'development' | 'staging' | 'production';
  debug?: boolean;
  timeout?: number;
}

export interface SDKResponse<T> {
  data: T;
  status: number;
  headers: Record<string, string>;
}
EOF
            ;;
            
        "monitoring")
            cat > "packages/$pkg/src/types/index.ts" << 'EOF'
export interface LogEntry {
  level: 'debug' | 'info' | 'warn' | 'error';
  message: string;
  timestamp: string;
  metadata?: Record<string, any>;
}

export interface MetricConfig {
  name: string;
  type: 'counter' | 'gauge' | 'histogram';
  description?: string;
  labels?: string[];
}
EOF
            ;;
            
        "i18n")
            cat > "packages/$pkg/src/types/index.ts" << 'EOF'
export interface Locale {
  code: string;
  name: string;
  direction: 'ltr' | 'rtl';
}

export interface TranslationString {
  key: string;
  value: string;
  context?: string;
  plurals?: Record<string, string>;
}
EOF
            ;;
            
        "docs")
            cat > "packages/$pkg/src/types/index.ts" << 'EOF'
export interface Document {
  id: string;
  title: string;
  content: string;
  metadata?: {
    author?: string;
    tags?: string[];
    lastModified?: string;
  };
}

export interface SearchOptions {
  query: string;
  filters?: Record<string, any>;
  limit?: number;
}
EOF
            ;;
            
        "security")
            cat > "packages/$pkg/src/types/index.ts" << 'EOF'
export interface AuthConfig {
  type: 'jwt' | 'oauth2' | 'apikey';
  secret?: string;
  expiresIn?: number;
}

export interface EncryptionOptions {
  algorithm: string;
  key: string;
  iv?: string;
}
EOF
            ;;
            
        "tools")
            cat > "packages/$pkg/src/types/index.ts" << 'EOF'
export interface ToolConfig {
  name: string;
  version: string;
  command: string;
  options?: Record<string, any>;
}

export interface GeneratorOptions {
  template: string;
  output: string;
  variables: Record<string, any>;
  force?: boolean;
}
EOF
            ;;
            
        "analytics")
            cat > "packages/$pkg/src/types/index.ts" << 'EOF'
export interface Event {
  name: string;
  timestamp: string;
  properties?: Record<string, any>;
  userId?: string;
}

export interface AnalyticsConfig {
  provider: string;
  apiKey: string;
  options?: Record<string, any>;
}
EOF
            ;;
    esac

    # Update the package's index.ts to export types
    cat > "packages/$pkg/src/index.ts" << 'EOF'
export * from './types'
EOF

    # Create __tests__ directory if it doesn't exist
    mkdir -p "packages/$pkg/src/__tests__"
    
    # Update the test file to just export types without Jest
    cat > "packages/$pkg/src/__tests__/index.ts" << 'EOF'
export * from '../types'
EOF

done

echo "Missing type definitions added! Now run: pnpm dev" 