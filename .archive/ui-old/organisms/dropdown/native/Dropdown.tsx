import React from 'react';
import { Picker } from '@react-native-picker/picker';
import type { DropdownProps } from './props';

export function Dropdown({ options, selected, onChange }: DropdownProps) {
  return (
    <Picker selectedValue={selected} onValueChange={onChange}>
      {options.map((option, i) => (
        <Picker.Item key={i} label={option.label} value={option.value} />
      ))}
    </Picker>
  );
}
