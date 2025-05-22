'use client'

import { useState } from 'react'
import {
  Sheet,
  SheetTrigger,
  SheetContent,
} from '@web/components/ui/molecules/Sheet'
import { Button } from '@/ui/button/web'
import { badgeConfigs } from '@web/components/config/badges.config'

export function BadgeShopDrawer() {
  const [open, setOpen] = useState(false)

  const handleBuy = (badgeName: string) => {
    // TODO: Replace with Stripe, API call, or badge unlock logic
    alert(`You bought the ${badgeName} badge! 🎉`)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            size="icon"
            className="rounded-full shadow-lg bg-purple-600 text-white hover:bg-purple-700"
            aria-label="Open Badge Shop"
          >
            👑
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-full max-w-md overflow-y-auto">
          <h2 className="text-2xl font-bold mb-4">🏷️ Badge Shop</h2>
          <p className="text-sm text-muted-foreground mb-6">
            One-time purchases. Stack perks. Unlock tools. Flex your rank.
          </p>

          <div className="space-y-4">
            {badgeConfigs.map((badge) => (
              <div
                key={badge.name}
                className={`rounded-xl border-2 p-4 ${badge.color} bg-background shadow-sm`}
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold">{badge.name}</h3>
                  <span className="text-sm font-bold">${badge.price}</span>
                </div>

                <ul className="text-sm text-muted-foreground list-disc pl-5 mb-3">
                  {badge.perks.map((perk, i) => (
                    <li key={i}>{perk}</li>
                  ))}
                </ul>

                {badge.discount && (
                  <div className="text-xs mb-2 text-amber-500">
                    🎁 {badge.discount}
                  </div>
                )}

                <Button size="sm" onClick={() => handleBuy(badge.name)}>
                  Buy
                </Button>
              </div>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
