import React from 'react';
import type { DialogFlowProps } from './props';

export function DialogFlow({ steps, currentStep }: DialogFlowProps) {
  return (
    <div className="p-4 bg-gray-100 text-black rounded">
      <p className="font-medium text-base">{steps[currentStep]}</p>
    </div>
  );
}
