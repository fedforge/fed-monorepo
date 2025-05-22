import { Platform } from 'react-native';

export const Tabs =
  Platform.OS === 'web'
    ? require('./web').Tabs
    : require('./native').Tabs;
