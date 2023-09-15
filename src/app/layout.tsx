import type { Metadata } from 'next'
import Global from './lib/provider/emotion'
import globals from './lib/styles/global'


export const metadata: Metadata = {
  title: 'AI Mentor',
  description: '1:1 mentor and mock interview using open AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Global styles={globals} />
        {children}</body>
    </html>
  )
}
