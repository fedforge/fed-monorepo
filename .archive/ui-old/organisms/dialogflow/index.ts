import { Platform } from 'react-native';
export const DialogFlow =
  Platform.OS === 'web'
    ? require('./web').DialogFlow
    : require('./native').DialogFlow;
