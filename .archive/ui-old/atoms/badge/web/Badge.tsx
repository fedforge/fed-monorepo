import React from 'react';
import type { ToggleProps } from './props';

export function Badge({ label, value, onChange }: ToggleProps) {
  return (
    <label className="inline-flex items-center space-x-2">
      {label && <span>{label}</span>}
      <input
        type="checkbox"
        checked={value}
        onChange={(e) => onChange(e.target.checked)}
        className="accent-blue-600 w-4 h-4"
      />
    </label>
  );
}
