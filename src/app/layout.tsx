'use client';
import { useLayoutEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import './globals.css';
import localFont from 'next/font/local';
import Footer from '@/components/footer/Footer';
import styled from '@emotion/styled';

const pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '100 900',
  variable: '--font-pretendard',
});

const FooterBox = styled.div`
  position: absolute;
  bottom: 0;
  background-color: #e8edf2;
  max-height: 100vh;
`;

const ContentWrapper = styled.div<{ footerHeight: number }>`
  padding-bottom: ${({ footerHeight }) => footerHeight}px;
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [footerHeight, setFooterHeight] = useState(75);

  useLayoutEffect(() => {
    const footerElement = document.getElementById('footer-box');
    if (footerElement) {
      setFooterHeight(footerElement.clientHeight);
    }
  }, []);

  const pathname = usePathname();
  return (
    <html className={pretendard.className} lang="en">
      <body>
        <ContentWrapper footerHeight={footerHeight}> {children}</ContentWrapper>
        {pathname !== '/add' && (
          <FooterBox id="footer-box">
            <Footer />
          </FooterBox>
        )}
      </body>
    </html>
  );
}
