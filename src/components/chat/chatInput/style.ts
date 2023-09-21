import styled from '@emotion/styled';

export const Wrapper = styled.div<{ isMode: boolean }>`
  display: flex;
  align-items: center;
  gap: 29px;
  position: fixed;
  bottom: 20px;
  textarea {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 510px;
    padding: 10px 26px 10px 17px;
    font-size: 16px;
    border-radius: 8px;
    background: #e4e7eb;
    :focus {
      outline: none;
      border-bottom: 2px solid
        ${({ isMode }) => (isMode ? '#21c55d' : '#5046e4')};
    }
  }
`;

export const IconWrap = styled.div`
  position: absolute;
  right: 123px;
  top: 9px;
`;

export const Icon = styled.kbd`
  color: gray;
`;
