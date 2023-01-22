import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import { Button } from '@chakra-ui/react'
import { useState,useEffect } from 'react'

const Favorites = () => {
  let data=JSON.parse(localStorage.getItem("fav"));
  const [item,setItem]=useState(data)
  const [array,setArray]=useState([])

  function remove(itemId){
    let data = JSON.parse(localStorage.getItem("fav")) || [];

    data = data.filter((item) => item.id !== itemId);
    localStorage.setItem("fav", JSON.stringify(data));
    setItem(data);
  }
  function cart(item){
    setArray([...array,item])
  }
  useEffect(()=>{
    localStorage.setItem("cart", JSON.stringify(array));
  },[array])
  return (
    <div>
      <div>
        <Header/>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"30px",padding:"0px 40px"}}>
        {item?.map((el)=>(
           <div style={{marginTop:"150px",boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px"}} key={el.id} >
           <img src={el.avatar} alt="" width={500}/>
           <h1>₹ {el.price}</h1>
           <h3>{el.name}</h3>
           <Button style={{marginRight:"20px"}} onClick={()=>remove(el.id)}>Remove</Button>
            <Button style={{backgroundColor:"rgb(226, 43, 186)",color:"white",marginleft:"20px"}} onClick={()=>cart(el)}>Move To Cart</Button>
          </div>
        ))}
      </div>

    <div>
    <Footer/>
    </div>
    </div>
  )
}

export default Favorites