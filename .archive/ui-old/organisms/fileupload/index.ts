import { Platform } from 'react-native';
export const FileUpload =
  Platform.OS === 'web'
    ? require('./web').FileUpload
    : require('./native').FileUpload;
