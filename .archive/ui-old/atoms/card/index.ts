import { Platform } from 'react-native';

export const Card =
  Platform.OS === 'web'
    ? require('./web').Card
    : require('./native').Card;
