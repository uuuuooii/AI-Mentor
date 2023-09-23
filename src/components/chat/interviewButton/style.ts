import styled from '@emotion/styled';

export const Wrap = styled.div``;

export const Point = styled.span`
  position: absolute;
  right: 94px;
  width: 7px;
  height: 7px;
  background: #21c55d;
  border-radius: 50%;
  top: 17px;
`;

export const Button = styled.button<{ isMode: boolean; isChecked: boolean }>`
  position: relative;
  width: 115px;
  height: 41px;
  background: ${({ isChecked }) =>
    isChecked
      ? ` linear-gradient(#fff, #ebf5fc, #ebf5fc);`
      : ` linear-gradient(#847ee0, #8a84e0, #8a84e2);`};

  border-radius: 6px;
  box-shadow: ${({ isChecked }) =>
    isChecked
      ? `inset 0 5px 1px 0 rgba(0, 0, 0, 0.1), 0 5px 15px rgba(0, 0, 0, 0.1), 0 -5px 15px rgba(0, 0, 0, 0.15)`
      : `inset 0 -5px 0 0 rgba(0, 0, 0, 0.2), 0 2px 10px rgba(0, 0, 0, 0.3)`};

  color: ${({ isChecked }) => (isChecked ? '#17171a' : '#f3f5ff')};
  filter: ${({ isChecked }) =>
    isChecked ? `drop-shadow(0 0 3px #00ffe2)` : ``};

  font-size: 15px;
  font-weight: 500;
`;

export const Label = styled.label`
  box-shadow: inset 0 5px 1px 0 rgba(0, 0, 0, 0.1),
    0 5px 15px rgba(0, 0, 0, 0.1), 0 -5px 15px rgba(0, 0, 0, 0.15);
`;

export const CheckBox = styled.input`
  appearance: none;
`;
