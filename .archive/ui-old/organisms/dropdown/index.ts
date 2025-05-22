import { Platform } from 'react-native';

export const Dropdown =
  Platform.OS === 'web'
    ? require('./web').Dropdown
    : require('./native').Dropdown;
