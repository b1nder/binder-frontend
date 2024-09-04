'use client';
import PlusIcon from './svg/plusIcon.svg';
import BinderIcon from './svg/binder.svg';
import PersonIcon from './svg/person.svg';

import styled from '@emotion/styled';

const TestFooter = styled.footer`
  display: grid;
  flex-direction: column;
  justify-items: center;
  cursor: pointer;
  color: #bdbdbd;

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
      <TestFooter>
        <BinderIcon />
        <p>바인더</p>
      </TestFooter>
      <TestFooter>
        <PlusIcon />
        <p>바인더 추가</p>
      </TestFooter>
      <TestFooter>
        <PersonIcon />
        <p>마이페이지</p>
      </TestFooter>
    </FooterContainer>
  );
}

export default Footer;
