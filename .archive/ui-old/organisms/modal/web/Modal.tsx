import React from 'react';
import type { ModalProps } from './props';

export function Modal({ visible, onClose, children }: ModalProps) {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white text-black p-6 rounded-lg max-w-md w-full">
        {children}
        <button
          onClick={onClose}
          className="mt-4 text-blue-600 font-semibold hover:underline"
        >
          Close
        </button>
      </div>
    </div>
  );
}
