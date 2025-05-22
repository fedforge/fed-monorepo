import { Platform } from 'react-native';
export const ListItem =
  Platform.OS === 'web'
    ? require('./web').ListItem
    : require('./native').ListItem;
