import React from 'react';
import type { TabsProps } from './props';

export function Tabs({ tabs, activeTab, onChange }: TabsProps) {
  return (
    <div className="flex border-b border-gray-300 mb-4">
      {tabs.map((tab, index) => (
        <button
          key={index}
          onClick={() => onChange(index)}
          className={`px-4 py-2 font-medium text-sm border-b-2 ${
            activeTab === index
              ? 'border-blue-600 text-blue-600'
              : 'border-transparent text-gray-600 hover:text-blue-500'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
