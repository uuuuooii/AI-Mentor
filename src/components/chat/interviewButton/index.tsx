import { nanoid } from 'nanoid'
import React from 'react'
import { ChatInputProps } from '../chatInput/type'
import { UseMutateFunction } from '@tanstack/react-query'
import useDarkmode from '@/lib/hook/useDarkmode'
import { useRecoilValue } from 'recoil'
import { isDarkMode } from '@/lib/recoil/atom'
import * as S from './style'

interface InterviewButtonProps {
  sendMessage: UseMutateFunction<ReadableStream<Uint8Array> | null, unknown, ChatInputProps, void>
}

const InterviewButton = ({ sendMessage }: InterviewButtonProps) => {
  const { onClickModeChange } = useDarkmode()
  const isMode = useRecoilValue(isDarkMode)


  const startInterveiwButton = () => {
    sendMessage({
      id: nanoid(),
      isUserMessage: true,
      text: '기술 면접 시작'
    })
  }

  return (
    <div>
      <S.Point />
      <S.Button
        isMode={isMode}
        onClick={() => {
          startInterveiwButton()
          onClickModeChange()
        }}
      >
        기술 면접 시작
      </S.Button>
    </div>
  )
}

export default InterviewButton