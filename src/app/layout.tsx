import type { Metadata } from 'next'
import Global from '../lib/provider/emotion'
import globals from '../lib/styles/global'
import ReactQueryProvider from '../lib/provider/reactQuery'
import ContextProvider from '@/lib/provider/context'
import EmotionProvider from '../lib/provider/emotion'
import RecoilProvider from '@/lib/provider/recoil'


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
          <RecoilProvider>
            <ContextProvider>
              <EmotionProvider />
              {children}
            </ContextProvider>
          </RecoilProvider>
        </ReactQueryProvider>
      </body>
    </html>
  )
}
