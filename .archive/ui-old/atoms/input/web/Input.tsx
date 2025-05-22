import React from 'react';
import type { InputProps } from './props';

export function Input(props: InputProps) {
  return (
    <input
      {...props}
      className="bg-white text-black border border-gray-300 px-4 py-2 rounded w-full"
    />
  );
}
