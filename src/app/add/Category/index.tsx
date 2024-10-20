import styled from '@emotion/styled';

type Props = {
  contents: string[];
};

const CategoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 12px;
`;

const CategoryBox = styled.div`
  display: flex;
  flex: 1 1 40%;
  border: 1px solid #bdbdbd;
  border-radius: 4px;
  justify-content: center;
  padding: 16px 70px;
`;

export const Category = ({ contents }: Props) => {
  return (
    <CategoryContainer>
      {contents.map((content, index) => (
        <CategoryBox key={index}>{content}</CategoryBox>
      ))}
    </CategoryContainer>
  );
};
