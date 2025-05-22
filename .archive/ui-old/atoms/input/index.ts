import { Platform } from 'react-native';

export const Input =
  Platform.OS === 'web'
    ? require('./web').Input
    : require('./native').Input;
