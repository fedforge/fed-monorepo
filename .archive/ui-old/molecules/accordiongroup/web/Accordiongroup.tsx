import React, { useState } from 'react'
import type { AccordionProps } from '../../organisms/atoms/accordion/props'
import { Accordion } from '../../organisms/atoms/accordion/web'

interface GroupProps {
  items: AccordionProps[]
  singleOpen?: boolean
}

export function AccordionGroup({ items, singleOpen = true }: GroupProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="space-y-2">
      {items.map((item, i) => (
        <Accordion key={i} title={item.title}>
          {openIndex === i || !singleOpen ? item.children : null}
        </Accordion>
      ))}
    </div>
  )
}
