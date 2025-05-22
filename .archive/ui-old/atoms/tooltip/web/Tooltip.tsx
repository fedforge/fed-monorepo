import React from 'react';

export function Tooltip({ text, children }: { text: string; children: React.ReactNode }) {
  return (
    <span className="relative group cursor-pointer">
      {children}
      <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-1 hidden group-hover:block bg-black text-white text-xs px-2 py-1 rounded">
        {text}
      </span>
    </span>
  );
}
