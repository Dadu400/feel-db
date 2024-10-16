"use client";

import "swiper/css/navigation";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation } from "swiper/modules";
import SwiperCore from "swiper";

import { useState } from "react";

import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import MediaCard from "./MediaCard";

interface MediaSwiperProps {
  mediaItems: any[];
  swiperId: string; 
}

function MediaSwiper({ mediaItems, swiperId }: MediaSwiperProps) {
  const [swiperInstance, setSwiperInstance] = useState<SwiperCore | null>(null);

  return (
    <div className="relative">
      <Swiper
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        modules={[Navigation, A11y]}
        spaceBetween={10}
        slidesPerView={4}
        navigation={{
          prevEl: `.swiper-button-custom-prev-${swiperId}`,
          nextEl: `.swiper-button-custom-next-${swiperId}`,
        }}
        className="!p-0 !m-0"
      >
        {mediaItems.map((item, index) => (
          <SwiperSlide key={index}>
            <MediaCard
              title={item.title}
              year={item.year}
              runtime={item.runtime}
              genres={item.genres}
              imageUrl={item.poster}
              feelsTotalCount={item.feels_total_count}
              ratings={item.top_three_emotions}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-end mt-4">
        <div
          className={`swiper-button-custom-prev-${swiperId} flex items-center justify-center w-5 h-5 p-4 text-white cursor-pointer transition duration-300`}
        >
          <KeyboardArrowLeftIcon fontSize="medium" />
        </div>
        <div
          className={`swiper-button-custom-next-${swiperId} flex items-center justify-center w-5 h-5 p-4 text-white cursor-pointer transition duration-300`}
        >
          <KeyboardArrowRightIcon fontSize="medium" />
        </div>
      </div>
    </div>
  );
}

export default MediaSwiper;
