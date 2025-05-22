// apps/web/components/ui/organisms/ShowcaseLinks.tsx
// ShowcaseLinks.tsx

import { showcaseLinks } from '@web/components/config/showcase-links.config'
import LinkCard from '@web/components/ui/molecules/LinkCard'

export default function ShowcaseLinks() {
  return (
    <section className="px-6 py-10 from-gray-900 to-gray-950 text-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {showcaseLinks.map((link) => (
          <LinkCard key={link.title} {...link} />
        ))}
      </div>
    </section>
  )
}
