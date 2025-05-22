import { Platform } from 'react-native';

export const Avatar =
  Platform.OS === 'web'
    ? require('./web').Avatar
    : require('./native').Avatar;
