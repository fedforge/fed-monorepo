// apps/web/components/config/plan.config.ts
// plan.config.ts

export const plans = [
  {
    name: 'Free',
    price: { monthly: 0, annual: 0 },
    description: 'Best for trying PacketPilot',
    features: [
      'Unlimited call connects + FED Protection',
      '20/mins of FED call screening + $1/min after',
      '10 packets/month + $1/packet after',
      '10 forms/month + $15/form after',
      '3 CargoConnect connections',
      'Dashboard access',
    ],
    cta: 'Try Now',
  },
  {
    name: 'Starter',
    price: { monthly: 49, annual: 39 },
    description: 'Best for solo dispatchers',
    features: [
      'Unlimited call connects + FED Protection',
      '300/mins of FED call screening + $.75/min after',
      '50 packets/month + $1/packet after',
      '30 forms/month + $10/form after',
      '30 CargoConnect connections',
      'API & Dashboard Add-ons',
    ],
    cta: 'Get This Plan',
  },
  {
    name: 'Pro',
    price: { monthly: 149, annual: 119 },
    description: 'Best for growing fleets & VAs',
    features: [
      'Unlimited call connects + FED Protection',
      '1000/mins of FED call screening + $.50/min after',
      '200 packets/month + $1/packet after',
      '100 free forms + $5/form after',
      '100 CargoConnect connections',
      'API & Dashboard Add-ons',
    ],
    cta: 'Get This Plan',
  },
]

export const bossPlan = {
  name: 'Boss',
  price: { monthly: 999, annual: 999 },
  description: 'For high-volume ops and enterprise dispatch',
  features: [
    'Unlimited call connects + FED Protection',
    'Unlimited packets',
    'Unlimited CargoConnect connections',
    '3000/mins of FED call screening + $.25/min after',
    '1000 free forms + $1/form after',
    'Online Form Automation & Validation',
    'API & Dashboard Add-ons',
    'Custom integrations',
    'Priority support',
  ],
  cta: 'Contact sales',
}
