// apps/web/components/config/changelog.config.ts

export const changelog = [
  { date: 'May 18, 2025', title: '🚀 PacketPilot PDF Autopreview launched' },
  { date: 'May 15, 2025', title: '💳 Beta pricing badge logic added' },
  { date: 'May 12, 2025', title: '🪪 Badge system officially went live' },
  { date: 'May 8, 2025', title: '📦 CargoConnect API connected to dashboard' },
  { date: 'May 5, 2025', title: '📈 Feature tiers added with live/beta flags' },
  {
    date: 'May 3, 2025',
    title: '📁 New atomic layout for landing page sections',
  },
  { date: 'May 1, 2025', title: '🧠 MARK CLI routing integrated into FED' },
] as const

export type ChangelogEntry = (typeof changelog)[number] // Inferred item type
