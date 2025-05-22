// packages/ui/config/rn-variants.ts

import { StyleSheet } from 'react-native';

export const buttonStyles = StyleSheet.create({
  base: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#ffffff',
    fontWeight: '600',
  },
  sizes: {
    sm: {
      paddingVertical: 6,
      paddingHorizontal: 12,
    },
    md: {
      paddingVertical: 10,
      paddingHorizontal: 16,
    },
    lg: {
      paddingVertical: 14,
      paddingHorizontal: 20,
    },
  },
  variants: {
    primary: {
      backgroundColor: '#1e40af',
    },
    secondary: {
      backgroundColor: '#f3f4f6',
    },
    ghost: {
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: '#1e40af',
    },
    outline: {
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: '#9ca3af',
    },
  },
  tones: {
    subtle: {
      opacity: 0.7,
    },
    neutral: {},
    strong: {
      fontWeight: 'bold',
    },
  },
  intents: {
    info: {
      color: '#2563eb',
    },
    danger: {
      color: '#dc2626',
    },
    success: {
      color: '#16a34a',
    },
    warning: {
      color: '#ca8a04',
    },
  },
  shapes: {
    square: {
      borderRadius: 0,
    },
    pill: {
      borderRadius: 9999,
    },
    round: {
      borderRadius: 8,
    },
  },
  elevations: {
    none: {},
    sm: {
      elevation: 1,
    },
    md: {
      elevation: 3,
    },
    lg: {
      elevation: 6,
    },
  },
});
