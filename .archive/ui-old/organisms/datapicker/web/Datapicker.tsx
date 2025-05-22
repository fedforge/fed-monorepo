import React from 'react';
import type { DatePickerProps } from './props';

export function DatePicker({ date, onChange }: DatePickerProps) {
  return (
    <input
      type="date"
      value={date.slice(0, 10)}
      onChange={(e) => onChange(new Date(e.target.value).toISOString())}
      className="border px-3 py-2 rounded text-black"
    />
  );
}
