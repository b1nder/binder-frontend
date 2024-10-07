import styled from '@emotion/styled';
import React from 'react';
type Props = {
  content: string;
  onClickHandler: (e: React.MouseEvent) => void;
};

const ButtonComponent = styled.button`
  background-color: #81c784;
  font-size: 16px;
  color: white;
  border-radius: 12px;
  border: 0;
  white-space: nowrap;
  padding: 16px 36px;
  &:hover {
    cursor: pointer;
  }
`;
export default function Button({ content, onClickHandler }: Props) {
  return (
    <div>
      <ButtonComponent onClick={onClickHandler}>{content}</ButtonComponent>
    </div>
  );
}
