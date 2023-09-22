import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Container = styled.div<{ isMode: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100vh;
  transition: all 0.3s ease; /* 부드러운 변화를 위한 transition 속성 추가 */

  ::before {
    content: '';
    position: absolute;
    width: 400px;
    height: 400px;
    background: linear-gradient(#f3f5f5, #9c27b0);
    border-radius: 50%;
    transform: translate(-250px, -120px);
  }
  ::after {
    content: '';
    position: absolute;
    width: 350px;
    height: 350px;
    background: linear-gradient(#ff2371, rgba(225, 40, 118, 0.2));
    border-radius: 50%;
    transform: translate(250px, 150px);
  }

  ${({ isMode }) =>
    isMode &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      height: 100vh;
      background: #161623;
      overflow: hidden;
      color: #fff;
      transition: all 0.3s ease; /* 부드러운 변화를 위한 transition 속성 추가 */

      ::before {
        content: '';
        position: absolute;
        width: 400px;
        height: 400px;
        background: linear-gradient(#ffc107, #e91e63);
        border-radius: 50%;
        transform: translate(-250px, -120px);
      }
      ::after {
        content: '';
        position: absolute;
        width: 350px;
        height: 350px;
        background: linear-gradient(#2196f3, #31ff38);
        border-radius: 50%;
        transform: translate(250px, 150px);
      }
    `}
`;

export const ChatWrapper = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 800px;
  height: 800px;
  background: rgba(225, 225, 225, 0.1);
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(225, 225, 255, 0.5);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(225, 255, 255, 0.2);
  backdrop-filter: blur(25px);
  border-radius: 10px;
  z-index: 10;
`;

export const Messages = styled.div`
  position: absolute;
  top: 23px;
  width: 797px;
  height: 700px;
  padding: 0 43px;
  overflow-y: scroll;
`;
