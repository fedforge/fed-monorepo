#!/bin/bash

# First, fix the missing types files
for pkg in config docs sdk analytics tools i18n testing monitoring security; do
    # Create types directory
    mkdir -p "packages/$pkg/src/types"
    
    # Create types/index.ts
    cat > "packages/$pkg/src/types/index.ts" << 'EOF'
export interface BaseConfig {
  enabled: boolean;
}

export interface ExtendedConfig extends BaseConfig {
  debug?: boolean;
  version?: string;
}
EOF

    # Update the package's index.ts to properly export types
    cat > "packages/$pkg/src/index.ts" << 'EOF'
export * from './types'
EOF
done

# Fix UI package's React Native types
cat > "packages/ui/src/config/rn-variants.ts" << 'EOF'
import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from 'react-native';

type VariantStyles = {
  [key: string]: ViewStyle | TextStyle | ImageStyle;
};

interface ButtonStyles {
  base: ViewStyle;
  text: TextStyle;
  sizes: VariantStyles;
  variants: VariantStyles;
  tones: VariantStyles;
  intents: VariantStyles;
  shapes: VariantStyles;
  elevations: VariantStyles;
}

export const styles = StyleSheet.create<ButtonStyles>({
  base: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000',
    fontWeight: '600',
  },
  sizes: {
    sm: {
      paddingVertical: 8,
      paddingHorizontal: 16,
    } as ViewStyle,
    md: {
      paddingVertical: 12,
      paddingHorizontal: 20,
    } as ViewStyle,
    lg: {
      paddingVertical: 16,
      paddingHorizontal: 24,
    } as ViewStyle,
  },
  variants: {
    primary: {
      backgroundColor: '#007AFF',
    } as ViewStyle,
    secondary: {
      backgroundColor: '#5856D6',
    } as ViewStyle,
    tertiary: {
      backgroundColor: '#FF2D55',
    } as ViewStyle,
  },
  tones: {
    subtle: {
      opacity: 0.8,
    } as ViewStyle,
  },
  intents: {
    info: {
      backgroundColor: '#007AFF',
    } as ViewStyle,
    success: {
      backgroundColor: '#34C759',
    } as ViewStyle,
    warning: {
      backgroundColor: '#FF9500',
    } as ViewStyle,
  },
  shapes: {
    square: {
      borderRadius: 0,
    } as ViewStyle,
    rounded: {
      borderRadius: 8,
    } as ViewStyle,
    pill: {
      borderRadius: 9999,
    } as ViewStyle,
  },
  elevations: {
    none: {} as ViewStyle,
    low: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.18,
      shadowRadius: 1.0,
      elevation: 1,
    } as ViewStyle,
    medium: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    } as ViewStyle,
  },
});
EOF

# Update UI package dependencies
cat > "packages/ui/package.json" << 'EOF'
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

echo "Types fixed! Now run: pnpm dev" 