import type { TextInputProps as NativeInputProps } from 'react-native';

export interface InputProps extends Partial<NativeInputProps> {
  placeholder?: string;
  value?: string;
  onChange?: (e: any) => void;
}
