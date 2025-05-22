import React from 'react';
import type { DropdownProps } from './props';

export function Dropdown({ options, selected, onChange }: DropdownProps) {
  return (
    <select
      value={selected}
      onChange={(e) => onChange(e.target.value)}
      className="border px-3 py-2 rounded bg-white text-black"
    >
      {options.map((option, i) => (
        <option key={i} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
