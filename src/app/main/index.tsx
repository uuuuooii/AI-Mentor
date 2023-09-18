'use client'

import ChatInput from '@/components/chat/chatInput'
import ChatMessages from '@/components/chat/chatMessages'
import React from 'react'
import { useRecoilValue } from 'recoil'
import { isDarkMode } from '@/lib/recoil/atom'
import * as S from './style'



const Main = () => {
  const isMode = useRecoilValue(isDarkMode)
  return (
    <S.Container isMode={isMode}>
      <S.ChatWrapper>
        <S.Messages>
          <ChatMessages />
          <ChatInput />
        </S.Messages>
      </S.ChatWrapper>
    </S.Container>
  )
}

export default Main