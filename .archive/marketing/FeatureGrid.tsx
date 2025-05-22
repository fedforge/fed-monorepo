// FeatureGrid.tsx

'use client';

import { features } from '@web/components/config/features.config';
import FeatureCard from './FeatureCard';

const FeatureGrid = () => {
  return (
    <section id="features" className="relative py-24 overflow-hidden bg-gradient-to-br from-gray-900 to-black">
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0d_1px,transparent_1px)] [background-size:20px_20px] opacity-10 pointer-events-none z-0" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-semibold text-center text-white mb-16">Features</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map(({ title, description, tagline, icon }, index) => {
            return (
              <FeatureCard
                key={index}
                title={title}
                description={description}
                tagline={tagline}
                icon={icon}
              />
            );
          })}
        </ul>
      </div>
    </section>

  );
};

export default FeatureGrid;
