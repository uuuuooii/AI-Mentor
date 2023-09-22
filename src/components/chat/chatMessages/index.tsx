'use client'

import { MessagesContext } from '@/components/context/messages'
import React, { useContext } from 'react'
import { isDarkMode } from '@/lib/recoil/atom'
import { useRecoilValue } from 'recoil'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import * as S from './style'

const ChatMessages = ({ ...props }) => {
  const { messages } = useContext(MessagesContext)
  const inverseMessages = [...messages]
  const isMode = useRecoilValue(isDarkMode)

  return (
    <>
      <S.Title isMode={isMode}>Next Level</S.Title><S.Wrapper {...props}>
        {inverseMessages.map((message) => (
          <S.MessageContainer isUserMessage={message.isUserMessage} key={message.id}>
            <S.LeftTail isUserMessage={message.isUserMessage}></S.LeftTail>
            <S.RightTail isUserMessage={message.isUserMessage}></S.RightTail>
            <S.MessageList isMode={isMode} isUserMessage={message.isUserMessage}>
              <S.MessageItem isMode={isMode} isUserMessage={message.isUserMessage}>
                <SyntaxHighlighter language="javascript" style={docco}>
                  {message.text}
                </SyntaxHighlighter>
              </S.MessageItem>
            </S.MessageList>
          </S.MessageContainer>
        ))}
      </S.Wrapper></>
  )
}

export default ChatMessages