// packages/ui/button/index.ts

import { Platform } from 'react-native'

export const Button =
  Platform.OS === 'web' ? require('./web').Button : require('./native').Button
