import { Platform } from 'react-native';

export const Slider =
  Platform.OS === 'web'
    ? require('./web').Slider
    : require('./native').Slider;
