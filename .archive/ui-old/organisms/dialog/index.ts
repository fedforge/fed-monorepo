import { Platform } from 'react-native';
export const Dialog =
  Platform.OS === 'web'
    ? require('./web').Dialog
    : require('./native').Dialog;
