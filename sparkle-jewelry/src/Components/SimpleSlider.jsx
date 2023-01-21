import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import React from 'react'

const SimpleSlider = () => {
  return (
    <div className='Slider-banner'>
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={50}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    onSwiper={(swiper) => (swiper)}
    onSlideChange={() => ('slide change')}
  >
    <SwiperSlide> <img src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/01-JAN/AppBanner/Blaze/01/Desktop_1920-x560_toplisting.jpg" alt="" /></SwiperSlide>
    <SwiperSlide><img src="https://banner.caratlane.com/live-images/ed19e9fc6ddd4de592b67776543499c1.jpg" alt="" /></SwiperSlide>
    <SwiperSlide><img src="https://cdn.caratlane.com/media/static/images/V4/2022/Shaya/12_Dec/19)12_2022/CL_x_Shaya_Banners/Desktop_Toplisting_1920x560.jpg" alt="" /></SwiperSlide>
    <SwiperSlide><img src="https://cdn.caratlane.com/media/static/images/V4/2022/CL/12-DEC/AppBanner/RTS/02/Desktop_1920-x560_toplisting.jpg" alt="" /></SwiperSlide>
    ...
  </Swiper>
    </div>
  )
}

export default SimpleSlider