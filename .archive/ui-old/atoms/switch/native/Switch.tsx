import React from 'react';
import { Switch as RNSwitch } from 'react-native';
import type { SwitchProps } from './props';

export function Switch({ value, onChange }: SwitchProps) {
  return <RNSwitch value={value} onValueChange={onChange} />;
}
