'use client';
import { useEffect, useState } from 'react';
import styled from '@emotion/styled';

//import component
import { Category } from '@/app/add/Category';
import ToggleComponent from '@/components/Toggle';
import Button from '@/components/Button';
import Calendar from '@/components/Calendar';

const Title = styled.span`
  font-weight: bold;
  font-size: 20px;
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
  margin: 16px;
  gap: 16px;
  width: 358px;
`;

const Input = styled.input`
  background-color: #fff;
  border: 0;
  font-size: 18px;
  font-family: pretendard;
  width: 358px;
  height: 56px;
  border-bottom: 2px solid #dfdfdf;
  padding: 12px;
  &:focus {
    outline: none;
    border-bottom: 2px solid #8cd98f;
  }
  ::placeholder {
    color: #9e9e9e;
    font-size: 20px;
  }
`;
const Select = styled.select`
  padding: 16px;
  border-radius: 12px;
  background-color: #fff;
  border: 0;
  color: #4f7396;
  height: 56px;
  border: 2px solid #dfdfdf;
  &:focus {
    outline: none;
  }
  &:hover {
    cursor: pointer;
  }
`;
const FixedBottomButton = styled.div`
  bottom: 20px;
`;

const InputBox = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #dfdfdf;
  background-color: #dfdfdf;
  color: #9e9e9e;
  width: 358px;
  height: 140px;
  border-radius: 12px;
  &:hover {
    cursor: pointer;
  }
`;
const ImagePreview = styled.img`
  width: 100%;
  heigh: 100%;
`;
export default function Add() {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);

  const [selected, setSelected] = useState('공연');
  const [selectedCategory, setSelectedCategory] =
    useState<Category>('문화생활');
  const [value, setValue] = useState<Date | Date[] | null>(new Date());

  type Category = '문화생활' | '일정';
  let contents = ['공연', '스포츠', '연극', '영화', '체험', '카페', '기타'];
  type Value = Date[] | Date | null;

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    const fileArray = Array.from(files);
    setSelectedFiles(fileArray);

    const urls = fileArray.map((file) => URL.createObjectURL(file));
    console.log(urls);
    setPreviewUrls(urls);
  };

  const dateChangeHandler = (date: Value | Date[] | null) => {
    setValue(date);
  };

  const dateConverter = () => {
    const firstDate = value;
    console.log(firstDate?.toString);
  };

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
          <Calendar value={value} onChange={dateChangeHandler} />
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
            <div style={{ position: 'relative' }}>
              {previewUrls.length > 0 ? (
                previewUrls.map((url, index) => (
                  <ImagePreview key={index} src={url} alt={`미리보기`} />
                ))
              ) : (
                <InputBox htmlFor="input-file">업로드</InputBox>
              )}
              <input
                style={{ visibility: 'hidden' }}
                id="input-file"
                type="file"
                multiple
                accept="image/*"
                onChange={handleFileChange}
              />
            </div>

            <p>사진 첨부하기</p>
            <p>장소 등록</p>
          </InputContainer>
        )}
      </Content>
      <FixedBottomButton>
        <Button content="추가" onClickHandler={clickHandler} width={'358px'} />
      </FixedBottomButton>
    </PageContainer>
  );
}
