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
    max-height: 40px !important;
    padding: 9px 18px 32px 15px;
    font-size: 18px;
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
  top: 11px;
`;

export const Icon = styled.kbd`
  color: gray;
`;
