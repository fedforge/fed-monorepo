import React, { useState } from 'react';
import type { AccordionProps } from './props';

export function Accordion({ title, children }: AccordionProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border rounded mb-2">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-4 py-2 font-semibold bg-gray-100"
      >
        {title}
      </button>
      {open && <div className="p-4 bg-white">{children}</div>}
    </div>
  );
}

