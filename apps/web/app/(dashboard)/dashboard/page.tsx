"use client"

import React from "react"
import { Card } from "@ui/card"
import { Grid } from "@ui/grid"
import { DriverStatus } from "@ui/driverstatus"
import { LoadCard } from "@ui/load-card"
import { Badge } from "@ui/badge"
import { Clock } from "lucide-react"

export default function DispatcherDashboardPage() {
  return (
    <div className="space-y-6">
      <Heading level={1}>Welcome to FED</Heading>

      <Grid columns={3} gap={4}>
        {/* Active Loads */}
        <Card>
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Active Loads</h2>
            <Badge variant="outline">3 In Progress</Badge>
          </div>
          <div className="mt-4 space-y-2">
            <LoadCard
              origin="Dallas, TX"
              destination="Atlanta, GA"
              broker="Echo Logistics"
              status="En Route"
              eta="4h 22m"
            />
            <LoadCard
              origin="Columbus, OH"
              destination="Charlotte, NC"
              broker="Coyote"
              status="At Pickup"
              eta="7h 10m"
            />
          </div>
        </Card>

        {/* Driver Status */}
        <Card>
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Driver Status</h2>
            <Clock className="w-5 h-5 text-muted-foreground" />
          </div>
          <DriverStatus />
        </Card>

        {/* Quick Stats */}
        <Card>
          <h2 className="text-lg font-semibold">Today’s Stats</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li><strong>Calls Made:</strong> 12</li>
            <li><strong>Packets Submitted:</strong> 8</li>
            <li><strong>Loads Dispatched:</strong> 5</li>
          </ul>
        </Card>
      </Grid>
    </div>
  )
}
