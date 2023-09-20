import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: grid;
  gap: 27px;
  div {
    max-width: 600px;
    ul {
      max-width: 600px;
      li {
        pre {
          code {
            white-space: pre-line !important;
          }
        }
      }
    }
  }
`;

export const MessageContainer = styled.div<{ isUserMessage: boolean }>`
  display: flex;
  align-items: flex-end;
  justify-content: ${({ isUserMessage }) =>
    isUserMessage ? 'flex-end' : 'flex-start'};
`;

export const MessageList = styled.ul<{
  isUserMessage: boolean;
  isMode: boolean;
}>`
  border-radius: 10px;
  padding: 10px;
  background: ${({ isUserMessage }) => (isUserMessage ? '#8c9ec4' : '#cfd0d7')};

  ${({ isMode, isUserMessage }) =>
    isMode &&
    css`
      background: ${isUserMessage ? '#97abd8' : '#cfd0d7'};
    `}
`;

export const MessageItem = styled.li<{
  isUserMessage: boolean;
  isMode: boolean;
}>`
  color: ${({ isUserMessage }) => (isUserMessage ? 'black' : 'white')};

  ${({ isMode, isUserMessage }) =>
    isMode &&
    css`
      background: ${isUserMessage ? '#1F63F4' : '#cfd0d7'};
    `}

  div {
    max-width: 600px;
    div {
      max-width: 600px;
    }
  }
`;
