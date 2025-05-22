import { Platform } from 'react-native';
export const FormGroup =
  Platform.OS === 'web'
    ? require('./web').FormGroup
    : require('./native').FormGroup;
