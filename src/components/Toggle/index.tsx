'use client';
import styled from '@emotion/styled';
import { useState } from 'react';

type Category = '문화생활' | '일정';

const Toggle = styled.div`
  background-color: #e8edf2;
  border-radius: 40px;
  display: flex;
  width: 100%;
  height: 56px;
  justify-content: space-around;
`;

const ToggleLabel = styled.span<{ isSelected: Boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  padding: 12px 56px;
  border-radius: 40px;
  width: 171px;
  background-color: ${(props) => (props.isSelected ? '#81c784' : '#e8edf2')};
  color: ${(props) => (props.isSelected ? 'white' : 'black')};

  &:hover {
    cursor: pointer;
    background: #81c784;
    color: white;
  }
`;

export default function ToggleComponent() {
  const [selectedCategory, setSelectedCategory] =
    useState<Category>('문화생활');

  return (
    <Toggle className="toggle">
      <ToggleLabel
        className="toggle__content"
        onClick={() => setSelectedCategory('문화생활')}
        isSelected={selectedCategory === '문화생활'}
      >
        문화생활
      </ToggleLabel>
      <ToggleLabel
        className="toggle__content"
        onClick={() => setSelectedCategory('일정')}
        isSelected={selectedCategory === '일정'}
      >
        일정
      </ToggleLabel>
    </Toggle>
  );
}
