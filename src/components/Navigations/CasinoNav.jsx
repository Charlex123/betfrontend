import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Pagination } from 'swiper/modules';
import '../../assets/styles/HomeNav.scss';
import popular from "../../assets/icons/popular.svg"
import popularHover from "../../assets/icons/hover-popular.svg"
import live from "../../assets/icons/live.svg"
import liveHover from "../../assets/icons/hover-live.svg"
import table from "../../assets/icons/table.svg"
import tableHover from "../../assets/icons/hover-table.svg"
import slot from "../../assets/icons/slot.svg"
import slotHover from "../../assets/icons/hover-slot.svg"
import fishing from "../../assets/icons/fishing.svg"
import fishingHover from "../../assets/icons/hover-fishing.svg"
import egame from "../../assets/icons/egame.svg"
import egameHover from "../../assets/icons/hover-egame.svg"

export default function CasinoNav(props) {
  const [activeButton, setActiveButton] = useState('Popular');

  useEffect(() => {
    props.active(activeButton);
  }, [activeButton, props]);

  const handleButtonClick = (buttonValue) => {
    setActiveButton(buttonValue);
  };

  return (
    <>
      <div className="relative container mx-auto h-[130px] flex items-center justify-around casino-bg border-t border-black pb-4">
        <Swiper
          slidesPerView={5.5}
          slidesPerGroup={5}
          centeredSlides={false}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mySwiper gold"
          onSwiper={(swiper) => {
            swiper.update();
          }}
        >
          <SwiperSlide key="Popular">
            <button
              className={`flex flex-col items-center justify-center gap-2  group  ${
                activeButton === 'Popular' ? 'scale-105 text-[#FFDFA7]' : 'text-[#946F3B]'
              }`}
              onClick={() => handleButtonClick('Popular')}
            >
              <p className="text-base">Popular</p>
              <img src={activeButton === 'Popular' ? popularHover : popular} alt='' />
            </button>
          </SwiperSlide>
          <SwiperSlide key="Live">
            <button
              className={`flex flex-col items-center justify-between gap-2 group  ${
                activeButton === 'Live' ? 'scale-105 text-[#FFDFA7]' : 'text-[#946F3B]'
              }`}
              onClick={() => handleButtonClick('Live')}
            >
              <p className="text-base">Live</p>
              <img src={activeButton === 'Live' ? liveHover : live} alt='' />
            </button>
          </SwiperSlide>
          <SwiperSlide key="Table">
            <button
              className={`flex flex-col items-center justify-between gap-2 group  ${
                activeButton === 'Table' ? 'scale-105 text-[#FFDFA7]' : 'text-[#946F3B]'
              }`}
              onClick={() => handleButtonClick('Table')}
            >
              <p className="text-base">Table</p>
              <img src={activeButton === 'Table' ? tableHover : table} alt='' />
            </button>
          </SwiperSlide>
          <SwiperSlide key="Slot">
            <button
              className={`flex flex-col items-center justify-between gap-2 group  ${
                activeButton === 'Slot' ? 'scale-105 text-[#FFDFA7]' : 'text-[#946F3B]'
              }`}
              onClick={() => handleButtonClick('Slot')}
            >
              <p className="text-base">Slot</p>
              <img src={activeButton === 'Slot' ? slotHover : slot} alt='' />
            </button>
          </SwiperSlide>
          <SwiperSlide key="Fishing">
            <button
              className={`flex flex-col items-center justify-between gap-2   ${
                activeButton === 'Fishing' ? 'scale-105 text-[#FFDFA7]' : 'text-[#946F3B]'
              }`}
              onClick={() => handleButtonClick('Fishing')}
            >
              <p className="text-base">Fishing</p>
              <img src={activeButton === 'Fishing' ? fishingHover : fishing} alt='' />
            </button>
          </SwiperSlide>
          <SwiperSlide key="Egame">
            <button
              className={`flex flex-col items-center justify-between gap-2 group  ${
                activeButton === 'Egame' ? 'scale-105 text-[#FFDFA7]' : 'text-[#946F3B]'
              }`}
              onClick={() => handleButtonClick('Egame')}
            >
              <p className="text-base">Egame</p>
              <img src={activeButton === 'Egame' ? egameHover : egame} alt='' />
            </button>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
