import React from 'react';
import type { DialogProps } from './props';

export function Dialog({ title, message, onConfirm }: DialogProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <div className="bg-white p-6 rounded max-w-sm text-black">
        <h2 className="font-bold text-lg">{title}</h2>
        <p className="mt-2 text-sm">{message}</p>
        <button
          onClick={onConfirm}
          className="mt-4 text-blue-600 hover:underline"
        >
          OK
        </button>
      </div>
    </div>
  );
}
