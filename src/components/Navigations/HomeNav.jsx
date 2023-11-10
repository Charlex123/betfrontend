import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Pagination } from 'swiper/modules';
import '../../assets/styles/HomeNav.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFutbol,
  faTv,
  faTable,
  faDice,
  faFish,
  faGamepad,
} from '@fortawesome/free-solid-svg-icons';

export default function HomeNav(props) {
  const iconSize = { fontSize: '30px' };
  const [activeButton, setActiveButton] = useState('Sports');
  const [indicatorPosition, setIndicatorPosition] = useState(0);

  const handleButtonClick = (buttonValue, index) => {
    setActiveButton(buttonValue);
    setIndicatorPosition(index);
    props.active(buttonValue);
  };

  const handleSlideChange = (swiper) => {
    setActiveButton(swiper.slides[swiper.activeIndex].key);
    setIndicatorPosition(swiper.activeIndex);
  };

  return (
    <>
      <div className="relative container mx-auto h-[110px] flex items-center justify-around bg-gray-900 border-t border-black pb-4" >
        <Swiper
          slidesPerView={5.5}
          slidesPerGroup={5}
          centeredSlides={false}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mySwiper"
          onSlideChange={handleSlideChange}
          onSwiper={(swiper) => {
            handleSlideChange(swiper);
            swiper.update();
          }}
        >
          <div
            className="indicator"
            style={{ left: `${indicatorPosition * 80 + 12}px`, transition: 'left .5s, width .3s' }}
          ></div>

          <SwiperSlide key="Sports">
            <button
              className={`flex flex-col items-center justify-center gap-2 text-gray-400 group hover:text-primary ${
                activeButton === 'Sports' ? 'text-primary' : ''
              }`}
              onClick={() => handleButtonClick('Sports', 0)}
            >
              <p className="text-base">Sports</p>
              <FontAwesomeIcon icon={faFutbol} style={iconSize} />
            </button>
          </SwiperSlide>
          <SwiperSlide key="Live">
            <button
              className={`flex flex-col items-center justify-between gap-2 text-gray-400 group hover:text-primary ${
                activeButton === 'Live' ? 'text-primary' : ''
              }`}
              onClick={() => handleButtonClick('Live', 1)}
            >
              <p className="text-base">Live</p>
              <FontAwesomeIcon icon={faTv} style={iconSize} />
            </button>
          </SwiperSlide>
          <SwiperSlide key="Table">
            <button
              className={`flex flex-col items-center justify-between gap-2 text-gray-400 group hover:text-primary ${
                activeButton === 'Table' ? 'text-primary' : ''
              }`}
              onClick={() => handleButtonClick('Table', 2)}
            >
              <p className="text-base">Table</p>
              <FontAwesomeIcon icon={faTable} style={iconSize} />
            </button>
          </SwiperSlide>
          <SwiperSlide key="Slot">
            <button
              className={`flex flex-col items-center justify-between gap-2 text-gray-400 group hover:text-primary ${
                activeButton === 'Slot' ? 'text-primary' : ''
              }`}
              onClick={() => handleButtonClick('Slot', 3)}
            >
              <p className="text-base">Slot</p>
              <FontAwesomeIcon icon={faDice} style={iconSize} />
            </button>
          </SwiperSlide>
          <SwiperSlide key="Fishing">
            <button
              className={`flex flex-col items-center justify-between gap-2 text-gray-400 hover:text-primary ${
                activeButton === 'Fishing' ? 'text-primary' : ''
              }`}
              onClick={() => handleButtonClick('Fishing', 4)}
            >
              <p className="text-base">Fishing</p>
              <FontAwesomeIcon icon={faFish} style={iconSize} />
            </button>
          </SwiperSlide>
          <SwiperSlide key="Egame">
            <button
              className={`flex flex-col items-center justify-between gap-2 text-gray-400 group hover:text-primary ${
                activeButton === 'Egame' ? 'text-primary' : ''
              }`}
              onClick={() => handleButtonClick('Egame', 5)}
            >
              <p className="text-base">Egame</p>
              <FontAwesomeIcon icon={faGamepad} style={iconSize} />
            </button>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
