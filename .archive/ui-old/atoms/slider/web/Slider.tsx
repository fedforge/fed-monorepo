import React from 'react';
import type { SliderProps } from './props';

export function Slider({ value, onChange, min = 0, max = 100, step = 1 }: SliderProps) {
  return (
    <input
      type="range"
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      min={min}
      max={max}
      step={step}
      className="w-full accent-blue-600"
    />
  );
}
