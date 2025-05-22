import React from 'react';
import { Alert } from 'react-native';
import type { DialogProps } from './props';

export function Dialog({ title, message, onConfirm }: DialogProps) {
  Alert.alert(title, message, [{ text: 'OK', onPress: onConfirm }]);
  return null;
}
