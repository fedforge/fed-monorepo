import React from 'react';
import type { NotificationBarProps } from './props';

export function NotificationBar({ message }: NotificationBarProps) {
  return (
    <div className="bg-blue-700 text-white text-sm py-2 px-4 text-center">
      {message}
    </div>
  );
}
