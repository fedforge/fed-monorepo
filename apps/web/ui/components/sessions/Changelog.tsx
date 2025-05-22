// apps/web/components/ui/sections/Changelog.tsx
// Changelog.tsx

'use client'

import { changelog } from '@web/components/config/changelog.config'

export default function ChangelogSection() {
  return (
    <section
      id="build"
      className="py-20 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="max-w-4xl mx-auto px-4 text-white">
        <h2 className="text-3xl font-bold mb-6">🛠️ Watch the Build</h2>
        <ul className="space-y-4">
          {changelog.map((log, i) => (
            <li key={i} className="border-l-4 border-purple-600 pl-4">
              <p className="text-sm text-purple-300">{log.date}</p>
              <p className="text-white font-semibold">{log.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
