// apps/web/components/sessions/HeroSession.tsx
// HeroSession.tsx

'use client'

import HeroTitle from 'web/ui/atoms/title/web/HeroTitle'
import HeroCTAButtons from 'web/ui/molecules/cta/HeroCTAButtons'
import HeroSubtextList from 'web/ui/molecules/subtext/HeroSubtextList'
import HeroTabSwitcher from 'web/ui/molecules/tab/HeroTabSwitcher'
import HeroPreviewBox from 'web/ui/organisms/builds/HeroPreviewBox'

export function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center items-center text-center px-6 bg-gradient-to-r from-gray-900 to-purple-800">
      <div className="w-full min-h-screen max-w-6xl mx-auto">
        <HeroTitle />
        <HeroSubtextList />
        <HeroCTAButtons />
        <HeroTabSwitcher />
        <HeroPreviewBox />
      </div>
    </section>
  )
}
