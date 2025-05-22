import { Platform } from 'react-native';

export const Badge =
  Platform.OS === 'web'
    ? require('./web').Badge
    : require('./native').Badge;
