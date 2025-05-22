import { ToastAndroid } from 'react-native';
import type { ToastProps } from './props';

export function Toast({ message }: ToastProps) {
  ToastAndroid.show(message, ToastAndroid.SHORT);
  return null;
}
