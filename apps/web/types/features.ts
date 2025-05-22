// apps/web/components/types/features.ts
// features.ts

import { iconMap } from '@web/components/utils/iconMap'

export type Feature = {
  title: string
  description: string
  tagline?: string
  status: 'live' | 'beta' | 'coming-soon'
  icon: keyof typeof iconMap
}

export type Features = Feature[]
