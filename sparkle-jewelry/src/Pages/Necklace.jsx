import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import { Radio, RadioGroup, Stack,Text } from '@chakra-ui/react'
import { useState,useEffect } from 'react'
const Necklace = () => {
  const getData=async ()=>{
    const res = await fetch("https://63c6b45e4ebaa802854bc9c2.mockapi.io/jewelry?page=4&limit=20");
    return await res.json();
  }
    const [data,setData]=useState([]);
  
    function fetchData() {
      getData()
          .then((data) => setData(data))
          .catch((err) => console.log(err) )
  }
  
  useEffect(()=>{
  fetchData();
  })
  return (
    <div>
      <div>
        <Header/>
      </div>
      
    <div>
     <img src="https://banner.caratlane.com/live-images/57df889715444466ae111a10de4e8e4b.webp" alt="" />
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
       <div style={{padding:"60px 40px"}}><img src="https://banner.caratlane.com/live-images/bcaa3ded25f041ef9807412943d6a4ad.webp" alt="" width={1100}/> </div>
       <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"30px",padding:"0px 40px"}}>
      {
        data.map((item)=>(
          <div key={item.id} className="card">
          <img src={item.avatar} alt="" width={500}/>
          <h3>{item.name}</h3>
          <button><img src="https://cdn-icons-png.flaticon.com/128/4249/4249819.png" alt="" width={30}/></button>
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

export default Necklace