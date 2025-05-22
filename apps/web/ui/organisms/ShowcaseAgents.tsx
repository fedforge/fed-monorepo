// apps/web/components/ui/organisms/ShowcaseAgents.tsx
// ShowcaseAgents.tsx

'use client'

import { showcaseAgents } from '@web/components/config/showcase-agents.config'
import AgentCard from '@web/components/ui/molecules/AgentCard'

export default function ShowcaseAgents() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {showcaseAgents.map((agent) => (
        <AgentCard key={agent.title} {...agent} />
      ))}
    </div>
  )
}
