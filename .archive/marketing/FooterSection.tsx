// apps/web/app/components/marketing/FooterSection.tsx

'use client';

import { footerLinks, footerBrand, socialLinks } from "@web/components/config/footer-links.config";

export default function FooterSection() {
  return (
    <footer className="bg-black border-t border-gray-800 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 sm:grid-cols-2 gap-10 text-white">
        
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold mb-4">{footerBrand.title}</h2>
          {footerBrand.lines.map((line, i) => (
            <p key={i} className="text-sm text-gray-400">{line}</p>
          ))}
        </div>

        {/* Dynamic Link Sections */}
        {footerLinks.map((section) => (
          <div key={section.title}>
            <h3 className="text-sm uppercase text-purple-400 mb-3 font-semibold">{section.title}</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {section.items.map(({ label, href }) => (
                <li key={href}><a href={href} className="hover:text-white">{label}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
        <p className="mb-4 md:mb-0">© 2025 Fast and Easy Dispatching LLC. All rights reserved.</p>
        <div className="flex gap-4">
          {socialLinks.map(({ href, label, iconClass }) => (
            <a key={label} href={href} aria-label={label}>
              <i className={iconClass}></i>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

