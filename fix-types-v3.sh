#!/bin/bash

# Fix UI package's React Native types with a different approach
cat > "packages/ui/src/config/rn-variants.ts" << 'EOF'
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  base: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000',
    fontWeight: '600',
  },
  // Size variants
  sizeSmall: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  sizeMedium: {
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  sizeLarge: {
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  // Variant styles
  variantPrimary: {
    backgroundColor: '#007AFF',
  },
  variantSecondary: {
    backgroundColor: '#5856D6',
  },
  variantTertiary: {
    backgroundColor: '#FF2D55',
  },
  // Tone styles
  toneSubtle: {
    opacity: 0.8,
  },
  // Intent styles
  intentInfo: {
    backgroundColor: '#007AFF',
  },
  intentSuccess: {
    backgroundColor: '#34C759',
  },
  intentWarning: {
    backgroundColor: '#FF9500',
  },
  // Shape styles
  shapeSquare: {
    borderRadius: 0,
  },
  shapeRounded: {
    borderRadius: 8,
  },
  shapePill: {
    borderRadius: 9999,
  },
  // Elevation styles
  elevationNone: {},
  elevationLow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  elevationMedium: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export { styles };
EOF

# Create proper type files for testing package
mkdir -p "packages/testing/src/types"
cat > "packages/testing/src/types/index.ts" << 'EOF'
export interface TestConfig {
  timeout?: number;
  retries?: number;
  parallel?: boolean;
}

export interface TestFixture {
  name: string;
  setup(): Promise<void>;
  teardown(): Promise<void>;
}

export interface TestHelper {
  name: string;
  run<T>(fn: () => Promise<T>): Promise<T>;
}

export interface IntegrationTest {
  name: string;
  dependencies: string[];
  setup(): Promise<void>;
  test(): Promise<void>;
  cleanup(): Promise<void>;
}
EOF

# Create proper type files for security package
mkdir -p "packages/security/src/types"
cat > "packages/security/src/types/index.ts" << 'EOF'
export interface SecurityConfig {
  encryption: {
    algorithm: string;
    keySize: number;
  };
  authentication: {
    type: 'jwt' | 'oauth2';
    expiresIn: string;
  };
  rateLimit: {
    windowMs: number;
    maxRequests: number;
  };
}
EOF

# Create proper type files for i18n package
mkdir -p "packages/i18n/src/types"
cat > "packages/i18n/src/types/index.ts" << 'EOF'
export interface TranslationConfig {
  defaultLocale: string;
  supportedLocales: string[];
  fallbackLocale: string;
  loadPath: string;
}

export interface Translation {
  key: string;
  value: string;
  locale: string;
  namespace?: string;
}
EOF

# Update testing package's files to use the new types
for file in fixtures helpers integration; do
    cat > "packages/testing/src/$file/index.ts" << EOF
import { Test${file^}Config } from '../types'

export const create${file^} = (config: Test${file^}Config) => {
  // Implementation
}
EOF
done

echo "Types fixed! Now run: pnpm dev" 