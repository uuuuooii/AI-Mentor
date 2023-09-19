import styled from '@emotion/styled';

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
