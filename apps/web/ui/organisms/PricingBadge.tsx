// apps/web/components/ui/organisms/PricingBadge.tsx
// PricingBadge.tsx

'use client'

import { badgeConfigs } from '@web/components/config/badges.config'
import BadgeCard from '@web/components/ui/molecules/BadgeCard'

export default function PricingSection() {
  const billing = 'monthly' // setBilling removed

  return (
    <section id="badges" className="py-24 bg-black text-white text-center">
      <h2 className="text-4xl font-bold mb-4">Become a Founding Member</h2>
      <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
        Get early access to FED tools, lifetime discounts on all future plans,
        and a limited-edition badge for your profile.
      </p>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 px-6 max-w-6xl mx-auto">
        {badgeConfigs.map((badge) => (
          <BadgeCard key={badge.name} badge={badge} />
        ))}
      </div>

      <p className="text-sm text-gray-500 mt-10 max-w-xl mx-auto">
        These badges are limited. Once they’re gone, they’re gone. Discounts
        apply automatically when tools and plans go live.
      </p>
    </section>
  )
}
