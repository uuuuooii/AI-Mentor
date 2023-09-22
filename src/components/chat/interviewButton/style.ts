import styled from '@emotion/styled';

export const Point = styled.span`
  position: absolute;
  right: 94px;
  width: 7px;
  height: 7px;
  background: #21c55d;
  border-radius: 50%;
  top: 17px;
`;

export const Button = styled.button<{ isMode: boolean }>`
  color: ${({ isMode }) => (isMode ? 'white' : 'black')};
  font-size: 15px;
  font-weight: 500;
`;
