// apps/web/app/config/showcase-links.config.ts
// showcase-links.config.ts

import { FaBrain, FaPlug, FaRobot } from 'react-icons/fa'

export const showcaseLinks = [
  {
    title: 'Learn to Dispatch',
    description:
      'Follow the same methods used by FED to negotiate loads and close deals.',
    href: '/docs/learn',
    cta: 'Explore',
    icon: FaBrain,
  },
  {
    title: 'How MARK Works',
    description:
      'Understand the Markdown Agent Routing Kernel that powers your AI tools.',
    href: '/docs/mark',
    cta: 'Read More',
    icon: FaRobot,
  },
  {
    title: 'Contribute to FED',
    description: 'Want to help? Follow the open journal and tool roadmap.',
    href: '/journal/contribute',
    cta: 'Read More',
    icon: FaPlug,
  },
  {
    title: 'Dispatch Simulator',
    description:
      'Try our simulated dispatch training mode with real-world scenarios.',
    href: '/docs/simulator',
    cta: 'Explore',
  },
  {
    title: 'Broker Call Scripts',
    description:
      'Learn how to talk to brokers, close deals, and set your rates.',
    href: '/docs/scripts',
    cta: 'Explore',
  },
  {
    title: 'MC# Survival Guide',
    description:
      'Everything a dispatcher needs to know about MC# lookup and power moves.',
    href: '/docs/mc-survival',
    cta: 'Explore',
  },
  {
    title: 'AI Tools for Dispatchers',
    description:
      'Use PacketPilot, CargoConnect, and more — under your control.',
    href: '/docs/tools',
    cta: 'See All Tools',
  },
  {
    title: 'Dispatcher Documentation',
    description:
      'Customize your AI tools, learn the flows, and learn how to use advanced features.',
    href: '/docs',
    cta: 'Open Docs',
  },
  {
    title: 'Build Journal',
    description:
      'FED is built for drivers. Follow the open journal and tool roadmap.',
    href: '/journal',
    cta: 'Read the Journal',
  },
]
