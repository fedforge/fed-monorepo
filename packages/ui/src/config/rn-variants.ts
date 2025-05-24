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
