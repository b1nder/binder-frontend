'use client';
import PlusIcon from './svg/plusIcon.svg';
import BinderIcon from './svg/binder.svg';
import PersonIcon from './svg/person.svg';

import styled from '@emotion/styled';

const FooterContainer = styled.div`
  display: flex;
  background-color: #f7fafc;
  //width: 100%;
`;

const FooterContent = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  gap: 4rem;
  width: 390px;
  //@media (max-width: 600px) {
  //  width: 90%; /* 휴대폰 크기일 때 width를 90%로 설정 */
  //  gap: 2rem; /* 간격도 조정 가능 */
  //}
`;

const FooterIconContainer = styled.footer`
  display: grid;
  flex-direction: column;
  flex: 1;
  justify-items: center;
  cursor: pointer;
  color: #bdbdbd;
  gap: 8px;
  margin: 12px;
  &:hover {
    color: #81c784;
    &:hover svg {
      fill: #81c784;
    }
  }
`;

const textBox = styled.div`
  margin: 0;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterIconContainer>
          <BinderIcon />
          <p>바인더</p>
        </FooterIconContainer>
        <FooterIconContainer>
          <PlusIcon />
          <p>바인더 추가</p>
        </FooterIconContainer>
        <FooterIconContainer>
          <PersonIcon />
          <p>마이페이지</p>
        </FooterIconContainer>
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer;
