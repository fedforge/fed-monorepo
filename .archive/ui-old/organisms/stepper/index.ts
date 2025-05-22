import { Platform } from 'react-native';
export const Stepper =
  Platform.OS === 'web'
    ? require('./web').Stepper
    : require('./native').Stepper;
