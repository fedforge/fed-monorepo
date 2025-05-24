// apps/web/app/layout.tsx
// layout.tsx - FED root layout styled like GrapesJS

import FloatingNavbar from '@web/components/nav/FloatingNavbar'
import '@web/styles/globals.css'
import { Provider } from '@app/provider'
import React from 'react'

export const metadata = {
  title: 'FED - Fast & Easy Dispatching',
  description: 'Dispatching automation built for speed, power, and AI.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>
      <body className="bg-black text-white">
        <Provider>
          <FloatingNavbar />
          {children}
        </Provider>
      </body>
    </html>
  )
}
