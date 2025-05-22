// apps/web/app/page.tsx
// page.tsx

import FloatingJoinButton from '@web/components/ui/molecules/FloatingJoinButton'
import Badge from '@web/components/ui/sections/Badge'
import Changelog from '@web/components/ui/sections/Changelog'
import CTA from '@web/components/ui/sections/CTA'
import Feature from '@web/components/ui/sections/Feature'
import FooterSection from '@web/components/ui/sections/Footer'
import Hero from '@web/components/ui/sections/Hero'
import Pricing from '@web/components/ui/sections/Pricing'
import Showcase from '@web/components/ui/sections/Showcase'

export default function Page() {
  return (
    <main className="bg-gradient-to-r from-gray-900 to-purple-800 text-white font-sans min-h-screen pt-36 px-6">
      {/* Hero Section */}
      <Hero />

      {/* Floating CTA */}
      <FloatingJoinButton />

      {/* Watch the Build / Changelog */}
      <Changelog />

      {/* Call to Action */}
      <CTA />

      {/* Beta Pricing Section */}
      <Badge />

      {/* Features Section */}
      <Feature />

      {/* Pricing Section */}
      <Pricing />

      {/* Showcase Section */}
      <Showcase />

      {/* Footer Section */}
      <FooterSection />
    </main>
  )
}
