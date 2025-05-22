import { Platform } from 'react-native';
export const AccordionGroup =
  Platform.OS === 'web'
    ? require('./web').AccordionGroup
    : require('./native').AccordionGroup;
