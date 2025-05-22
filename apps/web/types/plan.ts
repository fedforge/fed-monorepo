// apps/web/components/types/plan.ts
// plan.ts

export type BillingCycle = 'monthly' | 'annual'

export interface PlanCardProps {
  name: string
  price: {
    monthly: number
    annual: number
  }
  description: string
  features: string[]
  cta: string
  billing: BillingCycle
}
