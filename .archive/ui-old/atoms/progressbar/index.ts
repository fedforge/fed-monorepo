import { Platform } from 'react-native';
export const ProgressBar =
  Platform.OS === 'web'
    ? require('./web').ProgressBar
    : require('./native').ProgressBar;
