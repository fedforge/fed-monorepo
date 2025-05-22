import React, { useState } from 'react';
import { Switch, View, Text } from 'react-native';
import type { ToggleProps } from './props';

export function Toggle({ label, value, onChange }: ToggleProps) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      {label && <Text style={{ marginRight: 8 }}>{label}</Text>}
      <Switch value={value} onValueChange={onChange} />
    </View>
  );
}
