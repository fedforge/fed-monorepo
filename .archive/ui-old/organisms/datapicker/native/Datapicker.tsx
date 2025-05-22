import React, { useState } from 'react';
import { View, Text, Button, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import type { DatePickerProps } from './props';

export function DatePicker({ date, onChange }: DatePickerProps) {
  const [show, setShow] = useState(false);

  return (
    <View>
      <Button title="Pick a date" onPress={() => setShow(true)} />
      {show && (
        <DateTimePicker
          value={new Date(date)}
          mode="date"
          display={Platform.OS === 'ios' ? 'inline' : 'default'}
          onChange={(_, selectedDate) => {
            setShow(false);
            if (selectedDate) onChange(selectedDate.toISOString());
          }}
        />
      )}
    </View>
  );
}
