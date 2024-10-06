import styled from '@emotion/styled';
import TapComponent from '@/components/Tap/TapComponent';

export default function index() {
  const titleList = [
    '전체',
    '연극',
    '스포츠',
    '전시회',
    '영화',
    '체험',
    '카페',
    '공연',
    '기타',
  ];
  const TapContainer = styled.div`
    display: flex;
    max-width: 390px;
    //height: 80px;
    flex-wrap: wrap;
    justify-content: center;
  `;
  const TapBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-color: transparent;
    transition: all 0.1s ease-out;
    &:hover {
      cursor: pointer;
      background-color: #81c784;
    }
  `;
  return (
    <TapContainer>
      {titleList.map((title, index) => (
        <TapBox key={index}>
          <TapComponent title={title} key={index} />
        </TapBox>
      ))}
    </TapContainer>
  );
}
