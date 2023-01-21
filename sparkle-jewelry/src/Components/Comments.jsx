import { Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import React from 'react'
import "./Comments.css"
const Comments = () => {
  return (
    <div className='Slider-banner'>
    <Swiper
    modules={[Pagination, Scrollbar, A11y]}
    spaceBetween={50}
    slidesPerView={1}
    pagination={{ clickable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
  >
    <SwiperSlide className='comments'><img src="https://cdn-icons-png.flaticon.com/128/1384/1384063.png" alt="" width={50}/>
        <h1>My 12th Purchase from Caratlane !! Thanks a lot, Ajay Chauhan at Ambience mall outlet for commendable experience and support. Highly recommended!</h1>
     <h2>-Shivali Puri via Instagram</h2></SwiperSlide>

    <SwiperSlide className='comments'>
      <img src="https://cdn-icons-png.flaticon.com/128/1384/1384063.png" alt="" width={50}/>
        <h1>Amazing experience @Caratlane...Its a very useful service for people like us who cant travel more because of our busy office life. Mr. Shriyansh visited my place and showed me the products. He was very courteous, knowledgeable and passionate towards his Job. A great Ancient idea of showing jewelry @ home. Thank you so much "Sparkle Jewelry" for such a wonderful experience. Cheers</h1>
     <h2>-Tanya Gupta via Instagram</h2>
     </SwiperSlide>
    <SwiperSlide className='comments'>
      <img src="https://cdn-icons-png.flaticon.com/128/1384/1384063.png" alt="" width={50}/>
        <h1>This is a letter of thanks and appreciation for the way the staff and particularly Mr Rahul went out of his way to resize the engagement ring for my to be fiancée who had her heart set on just that beautiful design. We are getting engaged on the 8th and persons at your Noida outlet treated as their own function, giving us uber treatment and making the to be day really special. I really appreciate this.</h1>
     <h2>-Pooja Rajput via Instagram</h2>
     </SwiperSlide>
    ...
  </Swiper>
    </div>
  )
}

export default Comments;