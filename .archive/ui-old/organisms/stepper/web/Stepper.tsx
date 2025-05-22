import React from 'react';
import type { StepperProps } from './props';

export function Stepper({ steps, currentStep }: StepperProps) {
  return (
    <div className="flex justify-between w-full mb-4">
      {steps.map((label, i) => (
        <div key={i} className="flex flex-col items-center">
          <div
            className={`w-6 h-6 rounded-full text-xs flex items-center justify-center ${
              i === currentStep ? 'bg-blue-600 text-white' : 'bg-gray-400 text-white'
            }`}
          >
            {i + 1}
          </div>
          <span className="text-[10px] mt-1 text-center">{label}</span>
        </div>
      ))}
    </div>
  );
}
