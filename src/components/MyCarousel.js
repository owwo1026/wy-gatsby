import React from 'react';
import { HiOutlineX } from 'react-icons/hi';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const MyCarouselNew = ({ data, activeIndex, onClose }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      initialSlide={activeIndex}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className="w-full h-screen"
    >
      {data.map((node, idx) => (
        <SwiperSlide key={`carousel-item-${idx}`} id={`carousel-item-${idx}`} className="relative">
          <div className="relative inline-block">
            <button id="modal-close" type="button" className="absolute z-50 top-0 right-0 m-2" onClick={() => onClose()}>
              <HiOutlineX className="h-8 w-8" />
            </button>
            <img
              id={`carousel-item-img-${idx}`}
              key={node.id}
              className="block"
              src={node.publicURL}
              alt={node.name}
              style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MyCarouselNew;
