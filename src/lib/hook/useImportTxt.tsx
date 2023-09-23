import React from 'react';
import { saveAs } from 'file-saver';
import { ChatInputProps } from '../../components/chat/chatInput/type';

interface ImportTxtProps {
  inverseMessages: ChatInputProps[]
}

const useImportTxt = ({ inverseMessages }: ImportTxtProps) => {

  const saveConversationToFile = () => {
    // 대화 내용을 하나의 문자열로 합칩니다.
    const conversationText = inverseMessages
      .map((message) => message.text)
      .join('\n'); // 각 메시지 사이에 줄 바꿈 추가

    // 대화 내용을 Blob으로 변환합니다.
    const blob = new Blob([conversationText], { type: 'text/plain;charset=utf-8' });

    // Blob을 파일로 저장합니다.
    saveAs(blob, 'conversation.txt');
  };


  return saveConversationToFile;
};

export default useImportTxt;
