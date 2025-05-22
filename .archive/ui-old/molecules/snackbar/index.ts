import { Platform } from 'react-native';
export const Snackbar =
  Platform.OS === 'web'
    ? require('./web').Snackbar
    : require('./native').Snackbar;
