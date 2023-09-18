import { nanoid } from 'nanoid'
import React from 'react'
import { ChatInputProps } from '../chatInput/type'
import { UseMutateFunction } from '@tanstack/react-query'

interface InterviewButtonProps {
  sendMessage: UseMutateFunction<ReadableStream<Uint8Array> | null, unknown, ChatInputProps, void>
}

const InterviewButton = ({ sendMessage }: InterviewButtonProps) => {
  return (

    <button onClick={() => sendMessage({
      id: nanoid(),
      isUserMessage: true,
      text: '기술 면접 시작'
    })}>기술 면접 시작</button>
  )
}

export default InterviewButton