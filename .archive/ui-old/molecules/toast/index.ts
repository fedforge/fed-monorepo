import { Platform } from 'react-native';

export const Toast =
  Platform.OS === 'web'
    ? require('./web').Toast
    : require('./native').Toast;
