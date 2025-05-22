import { Platform } from 'react-native';

export const NotificationBar =
  Platform.OS === 'web'
    ? require('./web').NotificationBar
    : require('./native').NotificationBar;
