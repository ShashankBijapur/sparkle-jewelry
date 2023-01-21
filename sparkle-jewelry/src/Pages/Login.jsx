import React from 'react'

import Footer from '../Components/Footer'
import Header from '../Components/Header'
import { Button,Box,FormControl,Input,Text } from '@chakra-ui/react'
import { useState } from 'react'
import "./Signin.css"
import { useContext } from 'react'
import { AuthContext } from '../AuthContext/Auth'

const user={
  email:"",
  password:""
}
const Login = () => {
  const [userID, setUserID] = useState(user);
  const [data,setData]=useState([]);
  const {setAuthState} = useContext(AuthContext);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserID({
      ...userID,
      [name]: value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
   data.forEach((el)=>{
    if(userID.email===el.email && userID.password===el.password){
   alert("Login Successfull")
   setAuthState(true)
   window.location.href = "/";
    }
  })
  }
 
  const getData=async ()=>{
    const res = await fetch("https://63c6b45e4ebaa802854bc9c2.mockapi.io/users");
    return await res.json();
  }
  function fetchData() {
    getData()
        .then((data) => {
          return setData(data)
        })
        .catch((err) => console.log(err) )
}
fetchData();

  return (
    <div>
      <div>
       <Header/>
      </div>
      <div>
      <Box  style={{width:"400px",paddingTop:"150px",marginLeft:"600px"}}>
      <Text style={{fontSize:"30px"}}>Log in with Sparkle Jewelry</Text>
      <br />
      <div style={{display:"flex",justifyContent:"space-evenly"}} className="sign">
        <img src="https://cdn-icons-png.flaticon.com/128/3670/3670032.png" alt=""/>
        <img src="https://cdn-icons-png.flaticon.com/128/2875/2875404.png" alt="" />
      </div>
      </Box>
       <Box className="login-page" style={{width:"400px",marginLeft:"600px",padding:"20px 0px"}}>
      <form onSubmit={handleSubmit} className="form">
      <br />
       <FormControl >
            <Input name="email" value={userID.email} onChange={handleChange} 
          type="email" placeholder="Email" />
   </FormControl>
   <br/>
  <FormControl >
            <Input name="password" value={userID.password} onChange={handleChange}
              type="password"
              placeholder="Password"
           />
           </FormControl>
           <br/>
           <FormControl >
      <Button type="submit" onClick={handleSubmit}>SUBMIT</Button>
      </FormControl>
      </form>
  
    </Box>
      </div>
      <div>
         <Footer/>
      </div>
    </div>



export default Login