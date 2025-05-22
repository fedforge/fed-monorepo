import Link from 'next/link'

export function HeroCTAButtons() {
  return (
    <div className="mt-8 flex justify-center gap-4">
      <Link
        href="/sign-up"
        className="bg-pink-500 hover:bg-pink-600 text-white text-sm sm:text-base font-medium px-6 py-3 rounded-full shadow transition"
      >
        Try for Free
      </Link>
      <Link
        href="#learn-more"
        className="border border-white hover:border-pink-400 hover:text-pink-400 text-sm sm:text-base font-medium text-white px-6 py-3 rounded-full shadow transition"
      >
        Learn More
      </Link>
    </div>
  )
}
