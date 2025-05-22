import { Platform } from 'react-native';

export const Modal =
  Platform.OS === 'web'
    ? require('./web').Modal
    : require('./native').Modal;
