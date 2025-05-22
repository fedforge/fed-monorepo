// apps/web/components/ui/organisms/FloatingJoinButton.tsx
// FloatingJoinButton.tsx

'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function FloatingJoinButton() {
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isNearBadge, setIsNearBadge] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      setVisible(currentY < lastScrollY || currentY < 200)
      setLastScrollY(currentY)

      const badgeSection = document.getElementById('badges')
      if (badgeSection) {
        const rect = badgeSection.getBoundingClientRect()
        setIsNearBadge(rect.top < window.innerHeight && rect.bottom > 0)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <div
      className={`fixed bottom-4 right-4 z-50 transition-opacity duration-300 ${
        visible && !isNearBadge
          ? 'opacity-100'
          : 'opacity-0 pointer-events-none'
      }`}
    >
      <Link href="#badges">
        <button className="bg-purple-600 hover:bg-purple-500 text-white font-semibold px-4 py-2 rounded-full shadow-lg animate-pulse hover:animate-none transition-all duration-300">
          🚀 Become a Founding Member
        </button>
      </Link>
    </div>
  )
}
