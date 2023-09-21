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

//  style={{ borderBottom: '1px solid', position: 'fixed', top: '10px' }}
export const Title = styled.div<{ isMode: boolean }>`
  position: fixed;
  top: 10px;
  border-bottom: 1px solid;
  color: ${({ isMode }) => (isMode ? 'white' : 'black')};
`;

export const MessageContainer = styled.div<{ isUserMessage: boolean }>`
  display: flex;
  align-items: flex-end;
  justify-content: ${({ isUserMessage }) =>
    isUserMessage ? 'flex-end' : 'flex-start'};
`;

export const Test = styled.div<{ isUserMessage: boolean }>`
  ${({ isUserMessage }) =>
    isUserMessage
      ? css`
          ::before {
            position: absolute;
            left: 643px;
            top: 101px;
            transform: rotate(90deg);
            content: '';
            border-bottom: 15px solid #8c9ec4;
            border-right: 15px solid transparent;
          }
        `
      : css`
      ::before {
        content: '';
        border-top: 15px solid #cfd0d7;
        border-left: 15px solid transparent;
    `}
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
