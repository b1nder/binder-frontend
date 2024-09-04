'use client';
import PlusIcon from './svg/plusIcon.svg';
import BinderIcon from './svg/binder.svg';
import PersonIcon from './svg/person.svg';

import styled from '@emotion/styled';

const FooterIconContainer = styled.footer`
  display: grid;
  flex-direction: column;
  justify-items: center;
  cursor: pointer;
  color: #bdbdbd;
  gap: 8px;

  &:hover {
    color: #81c784;
    &:hover svg {
      fill: #81c784;
    }
  }
`;

const FooterContainer = styled.div`
  display: flex;
  gap: 4rem;
  justify-content: center;
  background-color: #f7fafc;
`;

function Footer() {
  return (
    <FooterContainer>
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
    </FooterContainer>
  );
}

export default Footer;
