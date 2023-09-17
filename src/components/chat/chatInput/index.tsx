'use client'

import React, { useContext, useRef, useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import TextareaAutosize from 'react-textarea-autosize'
import { nanoid } from 'nanoid'
import { ChatInputProps } from './type'
import { MessagesContext } from '@/components/context/messages'
import { CornerDownLeft } from 'lucide-react';
import { Spinner } from '@/components/Spinner/style'
import { toast } from 'react-hot-toast'

const ChatInput = () => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)
  const [input, setInput] = useState<string>('')
  const {
    messages,
    addMessage,
    removeMessage,
    updateMessage,
    setIsMessageUpdating
  } = useContext(MessagesContext)


  const { mutate: sendMessage, isLoading } = useMutation({
    mutationFn: async (message: ChatInputProps) => {
      const response = await fetch('/api/message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ messages: [message] })
      })

      if (!response.ok) {
        throw new Error
      }

      return response.body
    },



    // 내가 쓴 내용 보여주기
    onMutate(message) {
      addMessage(message)
    },

    // 서버에서 온 데이터를 읽는 기능
    onSuccess: async (stream) => {
      if (!stream) throw new Error("No stream found")

      const id = nanoid()
      const responseMessage: ChatInputProps = {
        id,
        isUserMessage: false,
        text: ''
      }

      addMessage(responseMessage)

      setIsMessageUpdating(true)

      const reader = stream.getReader()
      //디코딩은 이진수 데이터를 텍스트로 변환하는 과정을 의미함
      const decoder = new TextDecoder()
      let done = false

      while (!done) {
        const { value, done: doneReading } = await reader.read()
        done = doneReading
        const chunkValue = decoder.decode(value)
        updateMessage(id, (prev) => prev + chunkValue)
      }

      // clean up
      setIsMessageUpdating(false)
      setInput('')

      setTimeout(() => {
        textareaRef.current?.focus()
      }, 10)
    },
    onError(_, message) {
      toast.error('문제가 있습니다. 다시 시도해 보세요')
      removeMessage(message.id)
      textareaRef.current?.focus()
    }
  })

  return (
    <div>
      <TextareaAutosize
        ref={textareaRef}

        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault()

            const message: ChatInputProps = {
              id: nanoid(),
              isUserMessage: true,
              text: input
            }
            console.log(message)
            sendMessage(message)
          }
        }}
        rows={2}
        value={input}
        disabled={isLoading}
        onChange={(e) => setInput(e.target.value)}
        autoFocus
        placeholder='send a message'
      />

      <div>
        <kbd>
          {isLoading ?
            <Spinner />
            :
            <CornerDownLeft />
          }
        </kbd>
      </div>
    </div>
  )
}

export default ChatInput