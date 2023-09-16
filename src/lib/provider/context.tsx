'use client'

import { MessagesProvider } from '@/components/context/messages'
import React, { ReactNode } from 'react'

interface ContextProviderProps {
  children: ReactNode
}

const ContextProvider = ({ children }: ContextProviderProps) => {
  return (
    <MessagesProvider>{children}</MessagesProvider>
  )
}

export default ContextProvider