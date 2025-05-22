import React from 'react';
import type { ListItemProps } from './props';

export function ListItem({ title, subtitle }: ListItemProps) {
  return (
    <div className="border-b border-gray-300 py-3">
      <div className="text-sm font-semibold">{title}</div>
      {subtitle && <div className="text-xs text-gray-500">{subtitle}</div>}
    </div>
  );
}
