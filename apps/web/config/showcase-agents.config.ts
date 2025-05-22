// apps/web/app/config/showcase-agents.config.ts
// showcase-agents.config.ts

import {
  FaBoxOpen,
  FaBrain,
  FaPhoneSlash,
  FaPlug,
  FaRobot,
  FaTools,
} from 'react-icons/fa'

export const showcaseAgents = [
  {
    title: 'FED',
    description:
      'Runs locally to help dispatchers screen broker calls and eliminate bad leads before they waste time.',
    icon: FaPhoneSlash,
  },
  {
    title: 'ELDA',
    description:
      'A free AI assistant for drivers—helping them connect with dispatchers and navigate daily operations.',
    icon: FaRobot,
  },
  {
    title: 'OpenHWY',
    description:
      'The brain of the system. Uses the OpenHWY License Model to define identity, permissions, and trust.',
    icon: FaBrain,
  },
  {
    title: 'PacketPilot',
    description:
      'Automates carrier packet completion to help dispatchers and drivers avoid repetitive paperwork.',
    icon: FaTools,
  },
  {
    title: 'CargoConnect',
    description:
      'Connects your load boards via API or CSV import—centralizing all freight opportunities.',
    icon: FaPlug,
  },
  {
    title: 'Marketeer',
    description:
      'Build and deploy custom MARK agents using the MARK API for advanced automation.',
    icon: FaBoxOpen,
  },
]
