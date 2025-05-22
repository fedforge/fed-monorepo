import { showcaseAgents } from '@web/components/config/showcase-agents.config';

export default function ShowcaseAgents() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {showcaseAgents.map(({ title, description, icon: Icon }) => (
        <div key={title} className="bg-gray-900 p-6 rounded-xl shadow-lg hover:ring-1 hover:ring-purple-500 transition-all duration-200">
          <div className="flex items-center gap-4 mb-4">
            <Icon className="text-purple-500 text-2xl" />
            <h2 className="text-xl font-bold text-white">{title}</h2>
          </div>
          <p className="text-gray-400 text-sm">{description}</p>
        </div>
      ))}
    </div>
  );
}