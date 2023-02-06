import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const ProductModal = ({ title }) => {
  return (
    <ProductModalContainer>
      <ProductImageContainer>
        <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]} loopFillGroupWithBlank={false} speed={500} slidesPerView={1} slidesPerGroup={1} touchRatio={0} pagination={{ clickable: true }} navigation>
          <SwiperSlide>
            <img src="http://localhost:4000/images/america.jpeg" alt={title}></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src="http://localhost:4000/images/america.jpeg" alt={title}></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src="http://localhost:4000/images/america.jpeg" alt={title}></img>
          </SwiperSlide>
        </Swiper>
      </ProductImageContainer>
      <ProductSetting>
        <ProductSettingWrapper></ProductSettingWrapper>
        <ProductDecision></ProductDecision>
      </ProductSetting>
    </ProductModalContainer>
  );
};

export default ProductModal;

const ProductModalContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const ProductImageContainer = styled.div`
  background-color: gold;

  height: 30%;
  width: 100%;

  .swiper {
    width: 100%;
    height: 100%;

    color: white;

    .swiper-pagination-bullet {
      background-color: white;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

const ProductSetting = styled.div`
  width: 100%;
  height: 70%;

  background-color: gray;

  display: flex;
`;

const ProductSettingWrapper = styled.div`
  width: 90%;
  height: 100%;

  background-color: green;
`;

const ProductDecision = styled.div`
  width: 10%;
  height: 100%;

  background-color: yellow;
`;
