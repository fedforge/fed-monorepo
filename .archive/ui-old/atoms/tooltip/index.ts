import { Platform } from 'react-native';
export const Tooltip =
  Platform.OS === 'web'
    ? require('./web').Tooltip
    : require('./native').Tooltip;
