import React, { useState } from 'react'
import { View } from 'react-native'
import { Accordion } from '../../organisms/atoms/accordion/native'
import { AccordionProps } from '../../organisms/atoms/accordion/props'

interface GroupProps {
  items: AccordionProps[]
  singleOpen?: boolean
}

export function AccordionGroup({ items, singleOpen = true }: GroupProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <View>
      {items.map((item, i) => (
        <Accordion key={i} title={item.title}>
          {openIndex === i || !singleOpen ? item.children : null}
        </Accordion>
      ))}
    </View>
  )
}
