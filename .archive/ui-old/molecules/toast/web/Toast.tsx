import React, { useEffect, useState } from 'react';
import type { ToastProps } from './props';

export function Toast({ message }: ToastProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(false), 2500);
    return () => clearTimeout(timeout);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-black text-white px-4 py-2 rounded shadow-lg z-50 text-sm">
      {message}
    </div>
  );
}
