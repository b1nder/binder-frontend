'use client';
import React, { useState } from 'react';

//import swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from '@emotion/styled';

import 'swiper/css';
import 'swiper/css/navigation';

const SliderContainer = styled.div`
  width: 100%;
  max-width: 390px;
  margin: 0 auto;
  display: flex;

  /* Target Swiper slide styles */
  .swiper-slide {
    width: auto !important;
  }

  .swiper-slide-active {
    width: fit-content !important;
    transform: scale(1.1); /* Optional for visual focus */
    transition: transform 0.3s ease;
  }
`;

const SlideImage = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
`;

const ImageInputBox = styled.label`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 120px;
  background-color: #e8edf2;
  border-radius: 12px;
  &:hover {
    cursor: pointer;
  }
`;

const PlusIcon = styled.img`
  position: absolute;
  width: 24px;
  height: 24px;
`;

const ImageSlider: React.FC = () => {
  const [selectedImgFiles, setSelectedImgFiles] = useState<File[]>([]);
  const [imgfilePreviewUrls, setImgfilePreviewUrls] = useState<string[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    const fileArray = Array.from(files);
    const urls = fileArray.map((file) => URL.createObjectURL(file));

    setSelectedImgFiles((prevImgs) => [...prevImgs, ...fileArray]);
    setImgfilePreviewUrls((prevUrls) => [...prevUrls, ...urls]);
  };
  return (
    <SliderContainer>
      <Swiper
        style={{
          flex: 1, // Carousel takes up the remaining space
          overflow: 'hidden',
          borderRadius: '12px',
        }}
        grabCursor={true}
        spaceBetween={10}
        slidesPerView="auto"
      >
        <SwiperSlide>
          <ImageInputBox htmlFor="input-picture">
            <PlusIcon
              style={{ width: 20, height: 20 }}
              src="/plusIcon.svg"
              alt={'사진 추가하기 아이콘'}
            />
            <input
              style={{ visibility: 'hidden' }}
              id="input-picture"
              type="file"
              multiple
              accept="image/*"
              onChange={handleFileChange}
            />
          </ImageInputBox>
        </SwiperSlide>
        {imgfilePreviewUrls.map((image, index) => (
          <SwiperSlide style={{ width: 'fit-content' }} key={index}>
            <SlideImage key={index} src={image} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderContainer>
  );
};
export default ImageSlider;
