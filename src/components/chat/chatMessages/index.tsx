'use client'

import { MessagesContext } from '@/components/context/messages'
import React, { useContext, useEffect, useRef } from 'react'
import { isDarkMode } from '@/lib/recoil/atom'
import { useRecoilValue } from 'recoil'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import * as S from './style'

const ChatMessages = ({ ...props }) => {
  const { messages } = useContext(MessagesContext)
  const inverseMessages = [...messages]
  const isMode = useRecoilValue(isDarkMode)
  const messageRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (messageRef.current) {
      messageRef.current.scrollIntoView({ behavior: 'instant' });
    }
  }, [messages]);


  return (
    <div>
      <S.Title isMode={isMode}>Next Level</S.Title>
      <S.Wrapper {...props}>

        {inverseMessages.map((message) => (
          <S.MessageContainer isUserMessage={message.isUserMessage} key={message.id}>

            <S.LeftTail isUserMessage={message.isUserMessage} />
            <S.MessageList isMode={isMode} isUserMessage={message.isUserMessage}>
              <S.MessageItem isMode={isMode} isUserMessage={message.isUserMessage}>
                <SyntaxHighlighter language="javascript" style={docco}>
                  {message.text}
                </SyntaxHighlighter>
              </S.MessageItem>
            </S.MessageList>

            <S.RightTail isUserMessage={message.isUserMessage} />

          </S.MessageContainer>
        ))}
        <div ref={messageRef} />
      </S.Wrapper>
    </div>
  )
}

export default ChatMessages