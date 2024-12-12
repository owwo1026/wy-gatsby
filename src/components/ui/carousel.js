import React from 'react';
import { HiOutlineX } from 'react-icons/hi';

import { Navigation, Pagination, Zoom } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/zoom';

const Carousel = ({ data, activeIndex, onClose }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Zoom]}
      spaceBetween={50}
      speed={800}
      initialSlide={activeIndex}
      pagination={{ clickable: true }}
      navigation={{ enabled: true }}
      className="w-full h-screen"
    >
      {data.map((node, idx) => (
        <SwiperSlide key={`carousel-item-${idx}`} id={`carousel-item-${idx}`} className="">
          <div className="flex justify-center h-full">
            <div className="relative object-contain">
              <button id="modal-close" type="button" className="absolute z-50 top-0 right-0 m-2" onClick={() => onClose()}>
                <HiOutlineX className="h-8 w-8" />
              </button>
              <img
                id={`carousel-item-img-${idx}`}
                key={node.id}
                className="max-w-full max-h-full object-contain"
                src={node.publicURL}
                alt={node.name}
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
