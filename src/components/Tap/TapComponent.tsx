import styled from '@emotion/styled';

interface Props {
  title: string;
}

export default function TapComponent({ title }: Props) {
  const TapComponent = styled.div`
    border: 1px solid #bdbdbd;
    border-bottom: none;
    border-top-left-radius: 10px; /* 왼쪽 상단에 둥근 테두리 적용 */
    border-top-right-radius: 10px; /* 오른쪽 상단에 둥근 테두리 적용 */
    transition: all 0.5s ease-out;
    display: flex;
    justify-content: center;
    &:hover {
      cursor: pointer;
      transform: translateY(-10px);
      height: 56px;
      justify-items: center;
      align-items: center;
      color: white;
      background-color: #81c784;
    }
  `;

  const Title = styled.div`
    padding: 8px 29px;
  `;

  return (
    <TapComponent className="tap">
      <Title className="tap__title">{title}</Title>
    </TapComponent>
  );
}
