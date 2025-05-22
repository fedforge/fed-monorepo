import { Platform } from 'react-native';
export const SidebarNav =
  Platform.OS === 'web'
    ? require('./web').SidebarNav
    : require('./native').SidebarNav;
