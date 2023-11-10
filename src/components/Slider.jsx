import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';
import image1 from "../assets/images/kv-evo.png";
import image2 from "../assets/images/kv-casino.png";

export default function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={image1} alt='evo' /></SwiperSlide>
        <SwiperSlide><img src={image2} alt='casino' /></SwiperSlide>
      </Swiper>
    </>
  );
}