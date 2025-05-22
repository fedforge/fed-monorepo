import Link from 'next/link';
import { showcaseLinks } from '@web/components/config/showcase-links.config';

export default function ShowcaseLinks() {
  return (
    <section className="px-6 py-10 from-gray-900 to-gray-950 text-white">
          <div className="px-6 pt-4 pb-8 text-center text-white">
      <h2 className="text-3xl font-bold mb-2">Knowledge Tools & Learning Center</h2>
      <p className="text-gray-400 max-w-2xl mx-auto text-base">
        Dive deeper into dispatching with guides, simulators, and real-world tools designed to sharpen your skills and streamline your workflow.
      </p>
    </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {showcaseLinks.map(({ title, description, href, cta }) => (
          <div
            key={title}
            className="bg-gray-800 hover:bg-gray-700 transition-all duration-200 p-6 rounded-xl shadow-md"
          >
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-sm text-gray-400 mb-3">{description}</p>
            <Link href={href} className="text-purple-400 text-sm font-medium hover:underline">
              {cta}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
