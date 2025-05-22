import React from 'react';
import type { AvatarProps } from './props';

export function Avatar({ uri, size = 48, fallback }: AvatarProps) {
  return uri ? (
    <img
      src={uri}
      alt="avatar"
      className="rounded-full object-cover"
      style={{ width: size, height: size }}
    />
  ) : (
    <div
      className="rounded-full bg-gray-500 text-white flex items-center justify-center font-bold"
      style={{ width: size, height: size }}
    >
      {fallback}
    </div>
  );
}
