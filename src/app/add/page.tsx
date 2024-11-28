'use client';
import { useState } from 'react';

import styled from '@emotion/styled';

//import component
import { Category } from '@/app/add/Category';
import ToggleComponent from '@/components/Toggle';
import Button from '@/components/Button';
import Calendar from '@/components/Calendar';
import ImageSlider from '@/components/ImageSlider';

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
  background-color: #e8edf2;
  color: #9e9e9e;
  width: 358px;
  height: 140px;
  border-radius: 12px;
  &:hover {
    cursor: pointer;
  }
`;
const ImagePreview = styled.img`
  width: 358px;
  height: 140px;
  border-radius: 12px;
  object-fit: cover;
  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;
const ImagePreviewWrapper = styled.div`
  position: relative;
  width: 358px;
  height: 140px;
  border-radius: 12px;
  &:hover > div {
    opacity: 1;
  }
`;
const DeleteIcon = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 24px;
  height: 24px;
  background-color: whitesmoke;
  color: rgba(0, 0, 0, 0.5);
  //color: white;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  z-index: 10;
  opacity: 0;
  transition: opacity 0.3s ease;
  &:hover {
    color: red;
  }
`;

type Category = '문화생활' | '일정';
type Value = Date[] | Date | null;

export default function Add() {
  // 티켓 사진 상태 변수들
  const [selectedTicketImgFiles, setSelectedTicketImgFiles] = useState<File[]>(
    []
  );
  const [ticketPreviewUrls, setTicketPreviewUrls] = useState<string[]>([]);

  const [selected, setSelected] = useState('공연');
  const [selectedCategory, setSelectedCategory] =
    useState<Category>('문화생활');
  const [value, setValue] = useState<Date | Date[] | null>(new Date());

  let contents = ['공연', '스포츠', '연극', '영화', '체험', '카페', '기타'];

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    const fileArray = Array.from(files);
    const urls = fileArray.map((file) => URL.createObjectURL(file));

    setSelectedTicketImgFiles(fileArray);
    setTicketPreviewUrls(urls);
  };

  const dateChangeHandler = (date: Value | Date[] | null) => {
    setValue(date);
  };

  const handleDeleteImage = (id: number) => {
    setTicketPreviewUrls((prevUrls) => prevUrls.filter((_, i) => i !== id));
    setSelectedTicketImgFiles((prevFiles) =>
      prevFiles.filter((_, i) => i !== id)
    );
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
              {ticketPreviewUrls.length > 0 ? (
                ticketPreviewUrls.map((url, index) => (
                  <ImagePreviewWrapper key={index}>
                    <DeleteIcon onClick={() => handleDeleteImage(index)}>
                      ✕
                    </DeleteIcon>
                    <ImagePreview key={index} src={url} alt={`미리보기`} />
                  </ImagePreviewWrapper>
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
            <div
              style={{
                display: 'flex',
                width: '100%',
                gap: 10,
                overflow: 'hidden',
              }}
            >
              <ImageSlider />
            </div>

            <p>장소 등록</p>
            <Input type={'text'} placeholder={'주소 또는 장소명으로 검색'} />
          </InputContainer>
        )}
      </Content>
      <FixedBottomButton>
        <Button content="추가" onClickHandler={clickHandler} width={'358px'} />
      </FixedBottomButton>
    </PageContainer>
  );
}
