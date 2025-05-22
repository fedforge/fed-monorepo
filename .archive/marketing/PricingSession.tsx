'use client';

import { useState } from 'react';
import Link from 'next/link';

const plans = [
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
      'Dashboard access'
    ],
    cta: 'Try Now'
  },
  {
    name: 'Starter',
    price: { monthly: 49, annual: 39 }, // 20% off
    description: 'Best for solo dispatchers',
    features: [
      'Unlimited call connects + FED Protection',
      '300/mins of FED call screening + $.75/min after',
      '50 packets/month + $1/packet after',
      '30 forms/month + $10/form after',
      '30 CargoConnect connections',
      'API & Dashboard Add-ons',
    ],
    cta: 'Get This Plan'
  },
  {
    name: 'Pro',
    price: { monthly: 149, annual: 119 }, // 20% off
    description: 'Best for growing fleets & VAs',
    features: [
      'Unlimited call connects + FED Protection',
      '1000/mins of FED call screening + $.50/min after',
      '200 packets/month + $1/packet after',
      '100 free forms + $5/form after',
      '100 CargoConnect connections',
      'API & Dashboard Add-ons',

    ],
    cta: 'Get This Plan'
  }
];

export default function PricingSection() {
  const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly');

  return (
    <section id="pricing" className="relative py-24 bg-gradient-to-br from-black via-gray-900 to-gray-800 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:18px_18px]"></div>

      <div className="relative z-10 text-center mb-16">
        <h2 className="text-4xl font-bold text-white">Plans that fit your scale</h2>
        <p className="mt-4 text-gray-400">Simple, transparent pricing that grows with you.</p>

        <div className="mt-6 inline-flex border border-gray-700 rounded-full p-1 bg-black/20 backdrop-blur">
          <button
            onClick={() => setBilling('monthly')}
            className={`px-6 py-2 font-medium rounded-full shadow-md transition ${billing === 'monthly' ? 'bg-purple-600 text-white' : 'text-gray-400 hover:text-white'}`}
          >
            Monthly billing
          </button>
          <button
            onClick={() => setBilling('annual')}
            className={`px-6 py-2 font-medium rounded-full transition ${billing === 'annual' ? 'bg-purple-600 text-white' : 'text-gray-400 hover:text-white'}`}
          >
            Annual billing <span className="ml-1 text-xs text-green-400">(Save 20%)</span>
          </button>
        </div>
      </div>

      <div className="relative z-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 px-6 max-w-6xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="bg-black/60 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-gray-700 hover:scale-[1.02] transition-transform"
          >
            <div className="text-purple-400 font-semibold mb-2">{plan.name}</div>
            <h3 className="text-3xl font-bold text-white mb-4">${billing === 'monthly' ? plan.price.monthly : plan.price.annual}</h3>
            <p className="text-gray-400 mb-6">{plan.description}</p>
            <ul className="text-sm text-white space-y-2 mb-6">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-green-400 font-bold">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-full font-semibold transition">
              {plan.cta}
            </button>
          </div>
        ))}
      </div>

      <hr className="my-20 border-purple-800 opacity-30 max-w-xs mx-auto" />

      <div className="relative z-10 px-6 max-w-6xl mx-auto">
        <div className="bg-black/80 backdrop-blur-md border border-purple-700 rounded-3xl p-10 shadow-2xl text-white relative overflow-hidden hover:ring-2 hover:ring-purple-500/40 hover:scale-[1.01] transition">
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-purple-600/60 via-purple-500/20 to-transparent rounded-b-3xl"></div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative z-10">
            <div>
              <div className="text-purple-400 font-semibold mb-1">Boss Plan</div>
              <h3 className="text-4xl font-bold mb-2">$999+ <span className="text-gray-400 text-sm">(Custom)</span></h3>
              <p className="text-gray-400 mb-4">For high-volume ops and enterprise dispatch</p>
              <Link href="/contact" className="inline-block bg-purple-600 hover:bg-purple-500 text-white font-semibold px-6 py-2 rounded-full shadow-lg transition">
                Contact sales
              </Link>
            </div>

            <div className="text-sm text-white">
              <p className="text-purple-300 uppercase font-bold mb-2">Features</p>
              <ul className="space-y-1">
                {[
                  'Unlimited call connects + FED Protection',
                  'Unlimited packets',
                  'Unlimited CargoConnect connections',
                  '3000/mins of FED call screening + $.25/min after',
                  '1000 free forms + $1/form after',
                  'Online Form Automation & Validation',
                  'API & Dashboard Add-ons',
                  'Custom integrations',
                  'Priority support'
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-green-400 font-bold">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-gray-500 mt-8">
          All plans include access to core dashboard features, updates, and customer support.
        </p>
      </div>
    </section>
  );
}
