import React from 'react'

import Header from '../Components/Header'
import { Button} from '@chakra-ui/react'
import { Link } from 'react-router-dom';
const Cart = () => {
  let data=JSON.parse(localStorage.getItem("cart"));


  let total = data.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div>
    <div>
      <Header/>
    </div>
    <div style={{display:"flex"}} >
      <div style={{width:"700px",boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
      {data?.map((item)=>(
    <div key={item.id}  style={{display:"flex",paddingLeft:"50px"}}>
      <div style={{marginTop:"180px",boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px"}}><img src={item.avatar} alt="" width={200}/></div>
      <div style={{marginTop:"240px",paddingLeft:"50px"}}>
      <h1>₹ {item.price}</h1>
           <h3>{item.name}</h3>
           <h3>Delivery by - 27th to 28th Jan</h3>
           <Button>Remove</Button>
      </div>
    </div>
   ))}
      </div>
      <div style={{marginTop:"300px",marginLeft:"300px"}}>
      <h1  style={{marginBottom:"40px",fontSize:"40px"}}>Order Summary</h1>
        <h1 style={{marginBottom:"40px",fontSize:"30px", color:"rgb(226, 43, 186)"}} >Delivery Charge (Standard)           :Free</h1>
        <h1 style={{marginBottom:"40px",fontSize:"30px",paddingRight:"200px",color:"rgb(226, 43, 186)"}}>You Saved :-4029</h1>
       <h1 style={{marginBottom:"40px",fontSize:"30px",paddingRight:"170px",color:"rgb(226, 43, 186)"}}>TOTAL COST             :{total}</h1> 
     <Link to="/Payment"><Button style={{backgroundColor:"rgb(226, 43, 186)",color:"white",marginleft:"20px",width:"200px"}}>Buy Now</Button></Link>  
      </div>
  </div>
  
  </div>
  )
}

export default Cart