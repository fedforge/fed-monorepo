// apps/web/components/config/features.config.ts
// features.config.ts

import type { Features } from '@web/components/types/features'

export const features: Features = [
  {
    title: 'Instant Packet Creation',
    description:
      'Fill broker packets in seconds w/ PacketPilot. AI-powered autofill from MC#, email, and ratecon PDFs.',
    tagline: 'PDF → Form → Submit. Done.',
    icon: 'FileText',
    status: 'live',
  },
  {
    title: 'Real-Time Load Sync',
    description:
      'Pull loads from your connected boards and dispatch instantly. DAT, internal APIs, and more.',
    tagline: 'Board-sync built in',
    icon: 'FolderSync',
    status: 'beta',
  },
  {
    title: 'AI Broker Conversations',
    description:
      'Let FED email or call brokers for you, live, using your voice style and tone.',
    tagline: 'AI negotiator, human voice',
    icon: 'PhoneCall',
    status: 'coming-soon',
  },
  {
    title: 'Auto Pricing Engine',
    description:
      'Compare market rates, client goals, and load type to find the best profit window.',
    tagline: 'Profit margin targeting',
    icon: 'BarChart3',
    status: 'coming-soon',
  },
  {
    title: 'Load Timeline & Status',
    description:
      'Get live updates from driver locations, broker emails, and AI-flagged delays.',
    tagline: 'Driver status and ETA',
    icon: 'Clock3',
    status: 'beta',
  },
  {
    title: 'Multimodal Dispatch View',
    description: 'Web + Mobile + Terminal. Use it how *you* want.',
    tagline: 'One stack, every device',
    icon: 'MonitorSmartphone',
    status: 'live',
  },
  {
    title: 'Dispatcher Reputation System',
    description:
      'Rate and be rated. Prove your dispatch skills, not just your MCs.',
    tagline: 'Transparent, skill-based',
    icon: 'Star',
    status: 'coming-soon',
  },
  {
    title: 'Customizable Tools per Fleet',
    description:
      'Show only the tools you want. Hide or brand them by dispatcher or fleet.',
    tagline: 'Fleet config ready',
    icon: 'Settings2',
    status: 'coming-soon',
  },
  {
    title: 'Offline Mode',
    description:
      "Works offline with encrypted local storage. Syncs when you're back online.",
    tagline: 'Local-first engine',
    icon: 'Wifi',
    status: 'beta',
  },
  {
    title: 'Document Intelligence',
    description:
      'Ratecons, packets, BOLs — parsed, tagged, and structured with vision AI.',
    tagline: 'OCR + GPT vision',
    icon: 'Eye',
    status: 'coming-soon',
  },
  {
    title: 'TMS Dashboard Integration',
    description: 'Sync with your TMS or use OpenHWY to replace it.',
    tagline: 'OpenHWY-native',
    icon: 'FolderSync',
    status: 'beta',
  },
  {
    title: 'Driver Chat with ELDA',
    description:
      'Let your drivers ask AI anything. Training, safety, compliance, and real dispatch help.',
    tagline: 'Talk to your fleet',
    icon: 'MessageCircle',
    status: 'live',
  },
]
