import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import { Radio, RadioGroup, Stack,Text } from '@chakra-ui/react'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'

const Banglesbraclets = () => {
  const getData=async ()=>{
    const res = await fetch("https://63c6b45e4ebaa802854bc9c2.mockapi.io/jewelry?page=3&limit=20");
    return await res.json();
  }
    const [data,setData]=useState([]);
    const [array,setArray]=useState([]);
    function fetchData() {
      getData()
          .then((data) => setData(data))
          .catch((err) => console.log(err) )
  }
  
  useEffect(()=>{
  fetchData();
  })
  useEffect(()=>{
    localStorage.setItem("fav", JSON.stringify(array));
  },[array])

  function fav(item){
    setArray([...array,item])
  }
  return (
<div>
      <div>
        <Header/>
      </div>
       <div>
     <img src="https://banner.caratlane.com/live-images/dab8c9bccb50479fbad968e7ea6ea450.webp" alt="" />
    </div>
    <div style={{display:"flex"}}>
      <div style={{marginLeft:"80px",marginTop:"50px",boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",width:"400px",height:"1100px"}}>
        <h3 style={{fontFamily:"cursive",fontSize:"25px"}}>Filter By</h3>
        <RadioGroup>
          <Text style={{fontFamily:"cursive",fontSize:"25px",paddingTop:"30px"}}>Price</Text>
          <Stack style={{paddingLeft:"30px",paddingTop:"20px",paddingBottom:"40px"}}>
          <Radio value="5000">₹1000 - ₹5000 </Radio>
          <Radio value="10000">₹5000 - ₹10000 </Radio>
          <Radio value="20000">₹10000 - ₹20000</Radio>
          <Radio value="30000">₹20000 - ₹30000 </Radio>
          <Radio value="40000">₹30000 - ₹40000 </Radio>
          <Radio value="40000">₹40000 & above</Radio>
        </Stack>
        <Text style={{fontFamily:"cursive",fontSize:"25px"}}>Product Type</Text>
        <Stack style={{paddingLeft:"30px",paddingTop:"20px",paddingBottom:"40px"}}>
          <Radio >Earings</Radio>
          <Radio >Rings </Radio>
          <Radio >Bangles & Braclets</Radio>
          <Radio >Gifts </Radio>
          <Radio >Kids</Radio>
          <Radio >Necklace</Radio>
        </Stack>
        <Text style={{fontFamily:"cursive",fontSize:"25px"}}>Material</Text>
        <Stack style={{paddingLeft:"30px",paddingTop:"20px",paddingBottom:"40px"}}>
          <Radio >Platinum </Radio>
          <Radio >Gold</Radio>
          <Radio >Silver</Radio>
          <Radio >Diamond</Radio>
        </Stack>
       </RadioGroup>
      </div>
      <div>
       <div style={{padding:"60px 40px"}}><img src="https://cdn.caratlane.com/media/static/images/V4/2022/CL/12-DEC/AppBanner/RTS/02/Desktop.jpg" alt="" width={1100}/> </div>
       <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"30px",padding:"0px 40px"}}>
      {
        data.map((item)=>(
          <div key={item.id} className="card">
          <Link to={`/Bangles/${item.id}`}> <img src={item.avatar} alt="" width={500}/></Link>
          <h1>₹ {item.price}</h1>
          <h3>{item.name}</h3>
          <button onClick={()=>fav(item)}> <img src="https://cdn-icons-png.flaticon.com/128/4249/4249819.png" alt="" width={30}/></button>
          </div>
        ))
      }
       </div>
      </div>
    </div>
    <div>
    <Footer/>
    </div>
    </div>
  )
}

export default Banglesbraclets;