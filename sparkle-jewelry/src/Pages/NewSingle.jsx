import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";


const getData=async (id)=>{
  const res = await fetch(`https://63c6b45e4ebaa802854bc9c2.mockapi.io/jewelry/${id}`);
  return await res.json();
}
const NewSingle = () => {
  const [data, setData] = useState([]);
  const [array,setArray]=useState([])
  let params=useParams();
  function fetchData() {
    getData(params.id)
        .then((data) => setData(data))
        .catch((err) => console.log(err) )
}

useEffect(()=>{
fetchData();
})
function cart(item){
  setArray([...array,item])
}
useEffect(()=>{
  localStorage.setItem("cart", JSON.stringify(array));
},[array])

  return (
    <div>
      <div><Header/></div>
      <div style={{display:"flex"}}>
       <div >
       <img src={data.avatar} alt="" width={800}/>
       <h1 style={{fontSize:"30px",paddingBottom:"40px",paddingRight:"290px"}}>Produts Details</h1>
       <h4 style={{fontSize:"20px",paddingRight:"240px"}}>Length - 43.18cm (17 inches)</h4>
       <h4 style={{fontSize:"20px",paddingRight:"330px"}}>Height - 12.25 mm</h4>
       <h4 style={{fontSize:"20px",paddingRight:"380px"}}>Purity - 18 KT</h4>
       <h4 style={{fontSize:"20px",paddingRight:"300px"}}>Gross Weight - 4.638 g</h4>
       </div>
       <div style={{marginTop:"200px"}}>
        <h4 style={{fontSize:"40px",paddingBottom:"40px"}}>Name:              {data.name}</h4>
        <h4 style={{fontSize:"30px",paddingBottom:"40px",paddingRight:"290px"}}>Price:        ₹{data.price}</h4>
        <h4 style={{fontSize:"30px",paddingBottom:"40px",paddingRight:"260px"}}>Material:           {data.material}</h4>
        <h4 style={{fontSize:"30px",paddingBottom:"40px",paddingRight:"270px"}}>Type:         {data.type}</h4>
        <div style={{display:"flex"}}>
        <button style={{marginTop:"30px",paddingRight:"70px"}}><img src="https://cdn-icons-png.flaticon.com/128/4249/4249819.png" alt="" width={60}/></button>
        <button onClick={()=>cart(data)} style={{marginTop:"30px",backgroundColor:"rgb(226, 43, 186)",color:"white",height:"40px",width:"150px",borderRadius:"50px"}} >ADD TO CART</button>
       </div>
        </div>
       
      </div>
      <div><Footer/></div>
    </div>
  )
}

export default NewSingle