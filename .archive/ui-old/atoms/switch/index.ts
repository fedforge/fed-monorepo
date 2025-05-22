import { Platform } from 'react-native';

export const Switch =
  Platform.OS === 'web'
    ? require('./web').Switch
    : require('./native').Switch;
