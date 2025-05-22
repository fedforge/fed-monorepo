// FeatureCard.tsx
'use client';

import { motion } from 'framer-motion';
import { iconMap } from '@web/components/utils/iconMap';
import { Feature } from '@web/components/types/features';

const FeatureCard = ({ title, description, tagline, icon }: Feature) => {
  const Icon = iconMap ?? iconMap['FileText'];

  return (
    <motion.div
      className="relative bg-gradient-to-br from-purple-800 via-purple-900 to-black p-8 rounded-2xl shadow-[0_4px_20px_rgba(255,255,255,0.05)] border border-white/10 hover:shadow-purple-600/40 hover:border-purple-400 transition-all transform hover:scale-105 hover:-translate-y-1"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
      {/* Dot Pattern Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] bg-size-16 opacity-10 z-0" />

      {/* Card Content */}
      <div className="relative z-10">
        <div className="w-6 h-6 text-purple-400 mb-3">
          <Icon className="w-6 h-6 text-purple-400" />
        </div>
        <h3 className="font-semibold text-white text-md tracking-tight mb-4">{title}</h3>
        <p className="text-gray-300 text-sm">{description}</p>
        {tagline && <div className="text-sm text-gray-400 mt-2">{tagline}</div>}
      </div>
    </motion.div>
  );
};

export default FeatureCard;

