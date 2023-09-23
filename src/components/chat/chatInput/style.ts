import styled from '@emotion/styled';

export const Wrapper = styled.div<{ isMode: boolean }>`
  display: flex;
  align-items: center;
  gap: 25px;
  position: fixed;
  bottom: 13px;
  textarea {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 597px;
    padding: 10px 46px 10px 17px;
    max-height: 57px;
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
  right: 155px;
  top: 9px;
`;

export const Icon = styled.kbd`
  color: gray;
`;

export const Spinner = styled.div`
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  width: 20px;
  height: 20px;
  border: 2px solid #ccc;
  border-top: 2px solid gray;
  border-radius: 50%;
  animation: spin 2s linear infinite; /* 애니메이션 클래스 적용 */
`;
