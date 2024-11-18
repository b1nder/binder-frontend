'use client';
import { useState } from 'react';
import styled from '@emotion/styled';
import ToggleComponent from '@/components/Toggle';
import Button from '@/components/Button';
import { Category } from '@/app/add/Category';
export default function Add() {
  const [selected, setSelected] = useState('공연');
  const [selectedCategory, setSelectedCategory] =
    useState<Category>('문화생활');

  const Title = styled.span`
    font-weight: bold;
    font-size: 18px;
  `;
  const clickHandler = () => {
    console.log('clicked');
  };
  const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 390px;
    align-items: center;
  `;
  const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
  `;
  const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px;
    gap: 16px;
    width: 358px;
  `;
  const Input = styled.input`
    background-color: #e8edf2;
    border: 0;
    width: 358px;
    height: 56px;
    border-radius: 12px;
    padding: 16px;
    &:focus {
      outline: none;
    }
    ::placeholder {
      color: #4f7396;
    }
  `;
  const Select = styled.select`
    padding: 16px;
    border-radius: 12px;
    background-color: #e8edf2;
    border: 0;
    color: #4f7396;
    height: 56px;
    &:focus {
      outline: none;
    }
  `;
  let contents = ['공연', '스포츠', '연극', '영화', '체험', '카페', '기타'];

  return (
    <PageContainer>
      <Title style={{ padding: '16px' }}>바인더 추가</Title>
      <ToggleComponent
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <Content className={'content'}>
        <InputContainer>
          <Title>제목</Title>
          <Input type={'text'} placeholder={'일정 이름'} />
        </InputContainer>
        <InputContainer>
          <Title>기간</Title>
          <p>시작 일자</p>
          <p>종료 일자</p>
        </InputContainer>
        <InputContainer>
          <Title>타입</Title>
          <Select id={'type'}>
            <option value={'WE'}>WE</option>
            <option value={'ME'}>ME</option>
          </Select>
        </InputContainer>
        {selectedCategory === '문화생활' && (
          <InputContainer>
            <Title>문화생활</Title>
            <p>카테고리</p>
            <Category
              contents={contents}
              selected={selected}
              setSelected={setSelected}
            />
            <p>티켓 첨부하기</p>
            <input type="file" multiple accept="image/*" />
            <p>사진 첨부하기</p>
            <p>장소 등록</p>
          </InputContainer>
        )}
      </Content>
      <Button content="추가" onClickHandler={clickHandler} width={'358px'} />
    </PageContainer>
  );
}
