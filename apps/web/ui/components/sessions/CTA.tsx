// apps/web/components/ui/sections/CTA.tsx
// CTA.tsx

'use client'

import Link from 'next/link'

export default function CTA() {
  return (
    <section
      id="cta"
      className="py-24 text-center bg-gradient-to-r from-purple-800 to-purple-900"
    >
      <h2 className="text-4xl font-bold text-white mb-4">Get Started Today</h2>
      <p className="text-gray-200 max-w-xl mx-auto text-base">
        Join us in transforming the logistics industry with cutting-edge AI
        technology.
      </p>
      <div className="mt-8">
        <Link
          href="/sign-up"
          className="bg-yellow-500 text-black px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-600 transition"
        >
          Sign Up Now
        </Link>
      </div>
    </section>
  )
}
