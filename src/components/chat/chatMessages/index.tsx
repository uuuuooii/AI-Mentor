'use client'

import { MessagesContext } from '@/components/context/messages'
import React, { HTMLAttributes, useContext } from 'react'

interface ChatMessagesProps extends HTMLAttributes<HTMLDivElement> { }

const ChatMessages = ({ ...props }) => {
  const { messages } = useContext(MessagesContext)
  const inverseMessages = [...messages].reverse()

  return (
    <div {...props}>
      {inverseMessages.map((message) => (
        <div key={message.id}>
          <div>
            <p>{message.text}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ChatMessages