// apps/web/components/ui/organisms/PricingPlan.tsx
// PricingPlan.tsx

'use client'

import { bossPlan, plans } from '@web/components/config/plan.config'
import BossPlanCard from '@web/components/ui/molecules/BossPlanCard'
import PlanCard from '@web/components/ui/molecules/PlanCard'
import { useState } from 'react'

export default function PricingSection() {
  const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly')

  return (
    <section
      id="pricing"
      className="relative py-24 bg-gradient-to-br from-black via-gray-900 to-gray-800 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:18px_18px]" />

      <div className="relative z-10 text-center mb-16">
        <h2 className="text-4xl font-bold text-white">
          Plans that fit your scale
        </h2>
        <p className="mt-4 text-gray-400">
          Simple, transparent pricing that grows with you.
        </p>

        <div className="mt-6 inline-flex border border-gray-700 rounded-full p-1 bg-black/20 backdrop-blur">
          <button
            onClick={() => setBilling('monthly')}
            className={`px-6 py-2 font-medium rounded-full shadow-md transition ${
              billing === 'monthly'
                ? 'bg-purple-600 text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Monthly billing
          </button>
          <button
            onClick={() => setBilling('annual')}
            className={`px-6 py-2 font-medium rounded-full transition ${
              billing === 'annual'
                ? 'bg-purple-600 text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Annual billing{' '}
            <span className="ml-1 text-xs text-green-400">(Save 20%)</span>
          </button>
        </div>
      </div>

      {/* Standard Plans */}
      <div className="relative z-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 px-6 max-w-6xl mx-auto">
        {plans.map((plan) => (
          <PlanCard key={plan.name} {...plan} billing={billing} />
        ))}
      </div>

      <hr className="my-20 border-purple-800 opacity-30 max-w-xs mx-auto" />

      {/* Boss Plan */}
      <div className="relative z-10 px-6 max-w-6xl mx-auto">
        <BossPlanCard {...bossPlan} billing={billing} />
        <p className="text-center text-sm text-gray-500 mt-8">
          All plans include access to core dashboard features, updates, and
          customer support.
        </p>
      </div>
    </section>
  )
}
