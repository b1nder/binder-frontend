'use client';
import styled from '@emotion/styled';
import Tap from '@/components/Tap/index';
import Button from '@/components/Button/index';
import { useRouter } from 'next/navigation';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% - 75px);
  align-items: center;
  justify-items: center;
  padding-left: 4px;
`;

const Title = styled.div`
  padding-top: 60px;
  font-weight: bold;
  font-size: 28px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  width: 100%;
  gap: 6px;
  height: fit-content;
`;

const Message = styled.span`
  width: 100%;
  justify-content: center;
  display: flex;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  gap: '16px';
`;

export default function Home() {
  const router = useRouter();
  const onClickHandler = () => {
    router.push('/add');
  };
  return (
    <HomeContainer>
      <TitleContainer>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <Title>바인더</Title>
          <Tap />
        </div>
      </TitleContainer>
      <ContentContainer>
        <Message>바인더를 추가해주세요</Message>
        <Button
          content={'바인더 추가하기'}
          onClickHandler={onClickHandler}
          width={'179px'}
        />
      </ContentContainer>
    </HomeContainer>
  );
}
