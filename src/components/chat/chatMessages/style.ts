import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: grid;
  gap: 27px;
  div {
    max-width: 718px;
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

export const Title = styled.div<{ isMode: boolean }>`
  position: fixed;
  top: -31px;
  left: 5px;
  border-bottom: 1px solid;
  color: ${({ isMode }) => (isMode ? 'white' : 'black')};
`;

export const MessageContainer = styled.div<{ isUserMessage: boolean }>`
  display: flex;
  align-items: flex-end;
  justify-content: ${({ isUserMessage }) =>
    isUserMessage ? 'flex-end' : 'flex-start'};
`;

export const LeftTail = styled.div<{ isUserMessage: boolean }>`
  position: relative;
  ${({ isUserMessage }) =>
    !isUserMessage &&
    css`
      ::before {
        content: '';
        position: absolute;
        border-top: 15px solid #cfd0d7;
        border-left: 15px solid transparent;
        right: -4px;
        top: -35px;
      }
    `}
`;

export const RightTail = styled.div<{ isUserMessage: boolean }>`
  position: relative;
  ${({ isUserMessage }) =>
    isUserMessage &&
    css`
      ::before {
        content: '';
        position: absolute;
        border-top: 15px solid #8c9ec4;
        border-right: 15px solid transparent;
        left: -4px;
        top: -34px;
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
