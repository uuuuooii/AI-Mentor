import type { Metadata } from 'next'
import Global from '../lib/provider/emotion'
import globals from '../lib/styles/global'
import ReactQueryProvider from '../lib/provider/reactQuery'


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
        <ReactQueryProvider>
          <Global styles={globals} />
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  )
}
