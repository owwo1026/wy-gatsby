import React, { useState, useEffect  } from 'react'
import { Carousel as CarouselJS } from 'flowbite';
import { HiOutlineX } from "react-icons/hi";

const MyCarousel = ({data, activeIndex, onClose}) => {
  const [carouselRef, setCarouselRef] = useState(null);
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const carouselElement = document.getElementById('my-carousel');
      const items = data.map((node, idx) => (
        {
          position: idx,
          el: document.getElementById(`carousel-item-${idx}`),
        }
      ));
      const indicators = data.map((node, idx) => (
        {
          position: idx,
          el: document.getElementById(`carousel-indicator-${idx}`),
        }
      ));
      const options = {
        defaultPosition: activeIndex,
        interval: 100,
        indicators: {
          activeClasses: 'bg-white dark:bg-gray-800',
          inactiveClasses: 'bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800',
          items: indicators,
        },
        onNext: () => {
        },
        onPrev: () => {
        },
        onChange: (v) => {
          // handleChange(v._activeItem);
        },
      };
      const instanceOptions = {
        id: 'my-carousel',
        override: true
      };
      setCarouselRef(new CarouselJS(carouselElement, items, options, instanceOptions));
    }
  }, [])

  const sm = " -translate-y-0 "
  const md = " md:-translate-y-1/2 "
  const lg = " lg:-translate-y-1/2 "
  const xl = " xl:-translate-y-1/2 "
  const xxl = " 2xl:-translate-y-1/2 "

  return (
    <div id="my-carousel" className={`absolute top-1/2 left-1/2 transform -translate-x-1/2  overflow-hidden h-[90vh] w-full` + sm + md + lg + xl + xxl}>
      <button
        id='modal-close'
        type="button"
        className="absolute z-50 top-[5%] right-[5%]"
        onClick={()=>{
          onClose()
        }}
      >
        <HiOutlineX className="h-8 w-8"/>
      </button>
      {data.map((node, idx) => (
        <div key={`carousel-item-${idx}`} id={`carousel-item-${idx}`} className="hidden duration-700 ease-in-out">
          <img
            id={`carousel-item-img-${idx}`}
            key={node.id}
            className="absolute left-1/2 top-1/2 block -translate-x-1/2 -translate-y-1/2"
            src={node.publicURL}
            alt={node.name}
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
        </div>
      ))}
      {/* 小圓點 */}
      <div
        className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse"
      >
        {data.map((_node, idx) => (
          <button
            id={`carousel-indicator-${idx}`}
            type="button"
            className="h-3 w-3 rounded-full"
            aria-current="true"
            aria-label={`Slide ${idx}`}
          />
        ))}
      </div>
      {/* 上一張BUTTON */}
      <button
        id="data-carousel-prev"
        type="button"
        className="group absolute left-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
        onClick={(v) => {
          carouselRef.prev();
        }}
      >
        <span
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70"
        >
          <svg
            className="h-4 w-4 text-white dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="hidden">Previous</span>
        </span>
      </button>
      {/* 下一張BUTTON */}
      <button
        id="data-carousel-next"
        type="button"
        className="group absolute right-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
        onClick={(v) => {
          carouselRef.next();
        }}
      >
        <span
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70"
        >
          <svg
            className="h-4 w-4 text-white dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="hidden">Next</span>
        </span>
      </button>
    </div>
  );
};

export default MyCarousel;
