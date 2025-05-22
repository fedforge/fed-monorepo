import React from 'react';

export function SidebarNav({ items }: { items: string[] }) {
  return (
    <aside className="w-64 p-4 border-r min-h-screen bg-white">
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i}>
            <button className="text-left w-full px-3 py-2 rounded hover:bg-blue-50 text-sm font-medium text-gray-700">
              {item}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
