import styled from '@emotion/styled';

type Props = {
  contents: string[];
  selected?: string;
  setSelected: (selected: string) => void;
};

const CategoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 12px;
`;

const CategoryBox = styled.div<{ isSelected: boolean }>`
  display: flex;
  flex: 1 1 40%;
  border: 1px solid #bdbdbd;
  border-radius: 4px;
  padding: 16px 0px;
  justify-content: center;
  background-color: ${({ isSelected }) => (isSelected ? '#81C784' : 'white')};
  color: ${({ isSelected }) => (isSelected ? 'white' : '#0D141C')};
  transition: background-color 0.2s ease;
  &:hover {
    background-color: #81c784;
    color: white;
    cursor: pointer;
  }
`;

export const Category = ({ contents, selected, setSelected }: Props) => {
  return (
    <CategoryContainer>
      {contents.map((content, index) => (
        <CategoryBox
          isSelected={selected === content}
          key={index}
          onClick={() => setSelected(content)}
        >
          {content}
        </CategoryBox>
      ))}
    </CategoryContainer>
  );
};
