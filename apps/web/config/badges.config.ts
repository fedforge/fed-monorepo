// apps/web/components/config/badges.config.ts
// badges.config.ts

import { BadgeConfig } from '@web/components/types/badge'

export const badgeConfigs: BadgeConfig[] = [
  // 🚀 Identity Badges
  {
    name: 'Founding Member',
    price: 25,
    discount: '10% off for 12 months',
    perks: ['Listed on Founders Wall', 'Early access to every tool'],
    color: 'border-amber-500',
  },
  {
    name: 'OG Trucker',
    price: 20,
    discount: '10% off for 6 months',
    perks: ['Verified early user', 'Profile badge'],
    color: 'border-orange-700',
  },
  {
    name: 'Solo Hustler',
    price: 10,
    discount: '5% off for 3 months',
    perks: ['You ride alone — and get recognized for it'],
    color: 'border-gray-700',
  },
  {
    name: 'Verified Human',
    price: 5,
    discount: 'N/A',
    perks: ['Human badge (not a bot)', 'Funny status tag'],
    color: 'border-green-600',
  },
  {
    name: 'Early Dropper',
    price: 15,
    discount: '7% off for 6 months',
    perks: ['Special highlight on dashboard', 'Legacy user priority'],
    color: 'border-indigo-600',
  },

  // ⚙️ Utility Badges
  {
    name: 'PacketPilot+',
    price: 15,
    discount: 'N/A',
    perks: ['Advanced fill modes', 'ShadowFill previews'],
    color: 'border-blue-600',
  },
  {
    name: 'GhostForm',
    price: 10,
    discount: 'N/A',
    perks: ['Unlocks PDF-to-AI parser', 'Auto field detection'],
    color: 'border-zinc-600',
  },
  {
    name: 'CallLogger',
    price: 20,
    discount: '5% off forever',
    perks: ['Call summaries & auto-sorting', 'Audio log analysis'],
    color: 'border-sky-600',
  },
  {
    name: 'ShadowFill',
    price: 12,
    discount: 'N/A',
    perks: ['Test fills without submitting', 'AI simulation view'],
    color: 'border-gray-400',
  },
  {
    name: 'CargoNinja',
    price: 18,
    discount: 'N/A',
    perks: ['Unlocks stealth API scraping', 'Silent mode dashboard'],
    color: 'border-black',
  },

  // 🎯 Progression Badges
  {
    name: 'Rook',
    price: 5,
    discount: 'N/A',
    perks: ['Entry-level badge', 'Basic dashboard access'],
    color: 'border-gray-500',
  },
  {
    name: 'Dispatcher II',
    price: 15,
    discount: '5% off for 3 months',
    perks: ['Unlocked after using 5 tools'],
    color: 'border-gray-700',
  },
  {
    name: 'Elite Broker',
    price: 25,
    discount: '10% off for 1 year',
    perks: ['Must close 3 loads', 'Profile badge unlock'],
    color: 'border-lime-500',
  },
  {
    name: 'Fleet Wizard',
    price: 35,
    discount: '15% off for 1 year',
    perks: ['Team dashboard tools', 'Priority AI access'],
    color: 'border-emerald-600',
  },
  {
    name: 'AI-Sage',
    price: 40,
    discount: 'Lifetime 5% discount',
    perks: ['Completed full ELDA onboarding', 'Custom AI tweaks'],
    color: 'border-yellow-500',
  },

  // 🎨 Cosmetic Badges
  {
    name: 'Midnight Chrome',
    price: 8,
    discount: 'N/A',
    perks: ['Dark UI theme unlock'],
    color: 'border-neutral-800',
  },
  {
    name: 'Neon Pulse',
    price: 8,
    discount: 'N/A',
    perks: ['Glowing badge effect', 'Custom profile halo'],
    color: 'border-pink-500',
  },
  {
    name: 'Pixel Pioneer',
    price: 6,
    discount: 'N/A',
    perks: ['Retro theme unlock', 'Old-school badge'],
    color: 'border-cyan-400',
  },
  {
    name: 'Graffiti Drop',
    price: 9,
    discount: 'N/A',
    perks: ['Spray-style flair', 'Urban theme UI'],
    color: 'border-fuchsia-600',
  },
  {
    name: 'BadgeStacker',
    price: 10,
    discount: 'N/A',
    perks: ['Show badge count on profile', 'Ego boost'],
    color: 'border-orange-400',
  },

  // 🧭 Lore Badges
  {
    name: 'Soulkeeper',
    price: 30,
    discount: 'Lifetime 10% discount',
    perks: ['Protects the spirit of the road', 'Lore recognition'],
    color: 'border-violet-800',
  },
  {
    name: 'Beacon Dropper',
    price: 12,
    discount: 'N/A',
    perks: ['Invited 3 users', 'Mentor badge'],
    color: 'border-cyan-600',
  },
  {
    name: 'Wall Builder',
    price: 20,
    discount: '10% off next badge',
    perks: ['Helped shape platform structure'],
    color: 'border-stone-500',
  },
  {
    name: 'Lost & Found',
    price: 10,
    discount: 'N/A',
    perks: ['Returned from burnout', 'Welcome-back perks'],
    color: 'border-rose-500',
  },
  {
    name: 'Track Layer',
    price: 15,
    discount: 'Lifetime 5% off',
    perks: ['Guided others in tool usage'],
    color: 'border-slate-600',
  },

  // 🏆 Investor Badges
  {
    name: 'Veteran',
    price: 50,
    discount: '20% off for 3 years',
    perks: ['All Rookie perks', 'Beta tool priority'],
    color: 'border-yellow-600',
  },
  {
    name: 'Boss',
    price: 100,
    discount: '20% off for life',
    perks: ['All Veteran perks', 'VIP feedback loop'],
    color: 'border-purple-600',
  },
  {
    name: 'Legend',
    price: 200,
    discount: '30% off for life',
    perks: ['All Boss perks', 'Name in software credits'],
    color: 'border-purple-800',
  },
  {
    name: 'Angel Builder',
    price: 500,
    discount: '40% off for life',
    perks: ['Helped fund foundation', 'Private AI feedback room'],
    color: 'border-gold-500',
  },
  {
    name: 'Ghost Sponsor',
    price: 300,
    discount: '25% off for life',
    perks: ['Anonymous contributor', 'No credit listed unless toggled'],
    color: 'border-zinc-800',
  },

  // 🧪 Experimental / Wildcards (Optional / Seasonal)
  {
    name: 'Prototype Access',
    price: 20,
    discount: 'N/A',
    perks: ['See unreleased tools early'],
    color: 'border-lime-300',
  },
  {
    name: 'Elite Drop',
    price: 99,
    discount: 'N/A',
    perks: ['Includes 3 other badges at random'],
    color: 'border-fuchsia-500',
  },
  {
    name: 'Beta Overlord',
    price: 77,
    discount: 'Lifetime beta access',
    perks: ['Auto-added to every future test'],
    color: 'border-indigo-700',
  },
  {
    name: 'The Hauler',
    price: 13,
    discount: 'N/A',
    perks: ['Trucking-themed cosmetic loadout'],
    color: 'border-orange-300',
  },
  {
    name: '8Wheeler Certified',
    price: 11,
    discount: 'N/A',
    perks: ['Rep the platform', 'Special 8teenwheelers badge'],
    color: 'border-teal-600',
  },
  {
    name: 'Payload Maxer',
    price: 17,
    discount: '5% off forever',
    perks: ['Optimized load planner perks'],
    color: 'border-red-500',
  },
  {
    name: 'Route Runner',
    price: 9,
    discount: 'N/A',
    perks: ['Dispatch UI theme bonus', 'Animated dashboard icon'],
    color: 'border-blue-400',
  },
  {
    name: 'Cosmic Dispatcher',
    price: 66,
    discount: 'N/A',
    perks: ['Wildcard perk pool', 'Chance to get secret tools'],
    color: 'border-pink-700',
  },
]
