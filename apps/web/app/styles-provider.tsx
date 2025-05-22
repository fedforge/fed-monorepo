'use client'

import { useServerInsertedHTML } from 'next/navigation'
import React from 'react'

export function StylesProvider({ children }: { children: React.ReactNode }) {
  useServerInsertedHTML(() => {
    return null
  })

  return <>{children}</>
}
