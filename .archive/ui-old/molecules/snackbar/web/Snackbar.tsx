import React, { useEffect, useState } from 'react';
import type { SnackbarProps } from './props';

export function Snackbar({ message, duration = 3000 }: SnackbarProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), duration);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-5 left-5 right-5 bg-blue-700 text-white text-sm px-4 py-3 rounded shadow z-50 text-center">
      {message}
    </div>
  );
}
