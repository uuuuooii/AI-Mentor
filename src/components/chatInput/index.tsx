'use client'

import React, { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import TextareaAutosize from 'react-textarea-autosize'
import { nanoid } from 'nanoid'
import { ChatInputProps } from './type'


const ChatInput = () => {
  const [input, setInput] = useState<string>('')

  const { mutate: sendMessage, isLoading } = useMutation({
    mutationFn: async (message: ChatInputProps) => {
      const response = await fetch('/api/message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ messages: [message] })
      })
      console.log(response)
      return response.body
    },
    onSuccess: async (stream) => {
      if (!stream) throw new Error("No stream found")

      const reader = stream.getReader()
      const decoder = new TextDecoder()
      let done = false

      while (!done) {
        const { value, done: doneReading } = await reader.read()
      }
    }
  })

  return (
    <div>
      <TextareaAutosize
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