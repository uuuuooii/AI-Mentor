'use client'

import React, { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import TextaeaAutosize from 'react-textarea-autosize'
import { nanoid } from 'nanoid'
import { ChatInputProps } from './type'

const ChatInput = () => {
  const [input, setInput] = useState<string>('')

  const { mutate: sendMessage, isLoading } = useMutation({
    mutationFn: async (message: ChatInputProps) => {
      const response = await fetch('/api/message', {
        method: 'POST',
        headers: {
          'Contetn-Type': 'application/json'
        },
        body: JSON.stringify({ messages: 'hello' })
      })

      return response.body
    },
    onSuccess: () => {
      console.log('success')
    }
  })

  return (
    <div>
      <TextaeaAutosize
        rows={2}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault()

            const message: ChatInputProps = {
              id: nanoid(),
              isUserMessage: true,
              text: input
            }

            sendMessage(message)
          }
        }}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        autoFocus
        placeholder='send a message'
      />
    </div>
  )
}

export default ChatInput