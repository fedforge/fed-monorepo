import { Platform } from 'react-native';
export const DatePicker =
  Platform.OS === 'web'
    ? require('./web').DatePicker
    : require('./native').DatePicker;
