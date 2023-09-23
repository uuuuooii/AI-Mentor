import { nanoid } from 'nanoid'
import React, { useState } from 'react'
import { ChatInputProps } from '../chatInput/type'
import useDarkmode from '@/lib/hook/useDarkmode'
import { useRecoilValue } from 'recoil'
import { isDarkMode } from '@/lib/recoil/atom'
import * as S from './style'

interface InterviewButtonProps {
  sendMessage: (message: ChatInputProps) => void
}

const InterviewButton = ({ sendMessage }: InterviewButtonProps) => {
  const { onClickModeChange } = useDarkmode()
  const isMode = useRecoilValue(isDarkMode)
  const [isChecked, setIsChecked] = useState(false);
  console.log(isChecked)
  const handleInputChange = () => {
    setIsChecked(!isChecked);
  };

  const startInterveiwButton = () => {
    sendMessage({
      id: nanoid(),
      isUserMessage: true,
      text: '기술 면접 시작'
    })
  }

  return (
    <S.Wrap>
      {/* <S.Point /> */}
      <S.Button
        isChecked={isChecked}
        isMode={isMode}

        onClick={() => {
          startInterveiwButton()
          onClickModeChange()
          handleInputChange()
        }}
      >
        <S.Label>
          <S.CheckBox type='checkbox' name='check' />
        </S.Label>
        기술 면접 시작
      </S.Button>
    </S.Wrap>
  )
}

export default InterviewButton