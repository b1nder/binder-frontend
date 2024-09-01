'use client';

import { useState, useEffect } from 'react';

import plusIcon from './svg/plusIcon.svg';
import binderIcon from './svg/binder.svg';
import personIcon from './svg/person.svg';

import Image from 'next/image';
import styled from '@emotion/styled';

const TestFooter = styled.footer`
  display: grid;
  flex-direction: column;
  justify-items: center;
  cursor: pointer;
  color: #000000;

  &:hover {
    color: #81c784;
  }
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #f7fafc;
`;

function Footer() {
  return (
    <FooterContainer>
      <TestFooter>
        <Image src={binderIcon} alt="binder" style={{ color: '#81c784' }} />
        <p>바인더</p>
      </TestFooter>
      <TestFooter>
        <Image src={plusIcon} alt="plusIcon" />
        <p>바인더 추가</p>
      </TestFooter>
      <TestFooter>
        <Image src={personIcon} alt="personIcon" />
        <p>마이페이지</p>
      </TestFooter>
    </FooterContainer>
  );
}

export default Footer;
