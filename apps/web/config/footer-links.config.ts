// apps/web/components/config/footer-links.config.ts
// footer-links.config.ts

export const footerLinks = [
  {
    title: 'Product',
    items: [
      { label: 'Overview', href: '#overview' },
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
    ],
  },
  {
    title: 'Company',
    items: [
      { label: 'About', href: '#about' },
      { label: 'Contact', href: '#contact' },
      { label: 'Careers', href: '#careers' },
    ],
  },
  {
    title: 'Resources',
    items: [
      { label: 'Journal', href: '#blog' },
      { label: 'Docs', href: '#docs' },
      { label: 'Free Tools', href: '#tools' },
    ],
  },
]

export const footerBrand = {
  title: 'FED',
  lines: ['Fast and Easy Dispatching LLC', 'Powered by OpenHWY & ELDA.'],
}

export const socialLinks = [
  { href: 'https://x.com', label: 'X', iconClass: 'ri-twitter-x-line' },
  {
    href: 'https://linkedin.com',
    label: 'LinkedIn',
    iconClass: 'ri-linkedin-box-line',
  },
  {
    href: 'https://discord.com',
    label: 'Discord',
    iconClass: 'ri-discord-line',
  },
  { href: 'https://github.com', label: 'GitHub', iconClass: 'ri-github-line' },
]
