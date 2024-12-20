import styled from '@emotion/styled';

interface Props {
  title: string;
}
export default function TapComponent({ title }: Props) {
  const TapComponent = styled.div`
    position: relative;
    border: 1px solid #bdbdbd;
    border-bottom: none;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    transition: all 0.5s ease-out;
    display: flex;
    justify-content: center;
    height: 40px;
    max-width: 390px;
    flex-wrap: wrap;
    justify-content: center;
    &:hover {
      cursor: pointer;
      transform: translateY(-15px);
      justify-items: center;
      align-items: center;
      color: white;
      background-color: #81c784;
    }
  `;
  const Title = styled.div`
    padding: 8px 24px;
  `;
  return (
    <TapComponent className="tap">
      <Title className="tap__title">{title}</Title>
    </TapComponent>
  );
}
