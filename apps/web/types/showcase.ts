// apps/web/components/types/showcase.ts
// showcase.ts

import { IconType } from 'react-icons'

export type ShowcaseAgent = {
  title: string
  description: string
  icon: IconType
}

export type ShowcaseLink = {
  title: string
  description: string
  href: string
  cta: string
}
