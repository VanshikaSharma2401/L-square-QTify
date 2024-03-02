import React from "react";
import AlbumCard from "./AlbumCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const Carousel = ({ data }) => {
  return (
    <Swiper
      breakpoints={{
        768: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 6,
        },
      }}
      spaceBetween={30}
      cssMode={true}
      mousewheel={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {data.map((item, index) => (
        <SwiperSlide key={index}>
          <div>
            <AlbumCard album={item} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
