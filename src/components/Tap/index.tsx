import styled from '@emotion/styled';
const TapComponent = styled.div`
  border: 1px solid #bdbdbd;
  border-bottom: none;
  border-top-left-radius: 10px; /* 왼쪽 상단에 둥근 테두리 적용 */
  border-top-right-radius: 10px; /* 오른쪽 상단에 둥근 테두리 적용 */
  padding: 8px 29px;
`;
export default function index() {
  return (
    <>
      <TapComponent>전체</TapComponent>
    </>
  );
}
