import { Platform } from 'react-native';

export const Accordion =
  Platform.OS === 'web'
    ? require('./web').Accordion
    : require('./native').Accordion;
