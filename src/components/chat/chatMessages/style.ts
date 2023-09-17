import styled from '@emotion/styled';

export const MessageContainer = styled.div<{ isUserMessage: boolean }>`
  display: flex;
  align-items: flex-end;
  justify-content: ${({ isUserMessage }) =>
    isUserMessage ? 'flex-end' : 'flex-start'};
`;

export const MessageList = styled.ul<{ isUserMessage: boolean }>`
  background: ${({ isUserMessage }) => (isUserMessage ? '#1F63F4' : '#E6E7EB')};
`;

export const MessageItem = styled.li<{ isUserMessage: boolean }>`
  color: ${({ isUserMessage }) => (isUserMessage ? 'white' : 'black')};
`;
