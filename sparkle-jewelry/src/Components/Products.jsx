import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./Products.css"
const getData=async ()=>{
  const res = await fetch("https://63c6b45e4ebaa802854bc9c2.mockapi.io/jewelry?page=1&limit=10");
  return await res.json();
}
const Products = () => {
  const [data,setData]=useState([]);
  const [array,setArray]=useState([]);
  function fetchData() {
    getData()
        .then((data) => setData(data))
        .catch((err) => console.log(err) )
}

useEffect(()=>{
fetchData();
},[])

useEffect(()=>{
  localStorage.setItem("fav", JSON.stringify(array));
},[array])

function fav(item){
  setArray([...array,item])
}
  return (
   
    <div className='products'>
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={50}
    slidesPerView={4}
    navigation
    pagination={{ clickable: true }}
    onSwiper={(swiper) => (swiper)}
    onSlideChange={() => ('slide change')}
  >

{data.map((item)=>(
    <SwiperSlide> 
        <div key={item.id} className="card">
        <img src={item.avatar} alt="" width={500}/>
        <h3>{item.name}</h3>
        <button onClick={()=>fav(item)}><img src="https://cdn-icons-png.flaticon.com/128/4249/4249819.png" alt="" width={30}/></button>
      </div>
       
      </SwiperSlide>
       ))}
  </Swiper>
    </div>
  )
}

export default Products