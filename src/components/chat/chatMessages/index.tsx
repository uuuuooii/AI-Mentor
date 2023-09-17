'use client'

import { MessagesContext } from '@/components/context/messages'
import React, { HTMLAttributes, useContext } from 'react'
import * as S from './style'

interface ChatMessagesProps extends HTMLAttributes<HTMLDivElement> { }

const ChatMessages = ({ ...props }) => {
  const { messages } = useContext(MessagesContext)
  const inverseMessages = [...messages].reverse()

  return (
    <div {...props}>
      {inverseMessages.map((message) => (
        <S.MessageContainer isUserMessage={message.isUserMessage} key={message.id}>
          <S.MessageList isUserMessage={message.isUserMessage}>
            <S.MessageItem isUserMessage={message.isUserMessage}>{message.text}</S.MessageItem>
          </S.MessageList>
        </S.MessageContainer>
      ))}
    </div>
  )
}

export default ChatMessages