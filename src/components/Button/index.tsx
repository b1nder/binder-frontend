import styled from '@emotion/styled';
import React from 'react';
type Props = {
  content: string;
  onClickHandler: (e: React.MouseEvent) => void;
  width?: string;
};

const ButtonComponent = styled.button<{ width?: string }>`
  background-color: #81c784;
  font-size: 16px;
  color: white;
  border-radius: 12px;
  border: 0;
  white-space: nowrap;
  padding: 16px 36px;
  width: ${(props) => props.width || 'auto'};
  &:hover {
    cursor: pointer;
  }
`;
export default function Button({ content, onClickHandler, width }: Props) {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <ButtonComponent onClick={onClickHandler} width={width}>
        {content}
      </ButtonComponent>
    </div>
  );
}
