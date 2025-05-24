'use client'

import { NavigationProvider } from './navigation'
import { SafeArea } from './safe-area'
import { ThemeProvider } from './theme'
import { Toaster } from './toaster'

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <SafeArea>
      <NavigationProvider>
        <ThemeProvider>
          {children}
          <Toaster />
        </ThemeProvider>
      </NavigationProvider>
    </SafeArea>
  )
}
