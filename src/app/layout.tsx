'use client';
import './globals.css';
import localFont from 'next/font/local';
import Footer from '@/components/footer/Footer';
import styled from '@emotion/styled';

const pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

const FooterBox = styled.div`
  position: absolute;
  bottom: 0;
  background-color: #e8edf2;
  max-height: 100vh;
`;

const ContentWrapper = styled.div`
  padding-bottom: 75px;
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={pretendard.className} lang="en">
      <body>
        <ContentWrapper> {children}</ContentWrapper>
        <FooterBox>
          <Footer />
        </FooterBox>
      </body>
    </html>
  );
}
