import {Input,FormControl,InputLeftAddon, Box, InputGroup, Stack, Checkbox, Text,Button} from "@chakra-ui/react";
import { useState } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

import "./Signin.css"

let user = {
  mobile:"",
  email: "",
  firstName:"",
  lastName:"",
  password: "",
}

function Signin() {

  const [userID, setUserID] = useState(user);
  const [boolean,setBoolean]=useState(true)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserID({
      ...userID,
      [name]: value
    })
    setBoolean(false)
  }
 
  const handleSubmit = async(e) => {
    
    e.preventDefault();
   
    try {
      let res = await fetch("https://63c6b45e4ebaa802854bc9c2.mockapi.io/users", {
        method: "POST",
        headers: {
          "Content-Type": "Application/json"
        },
        body: JSON.stringify(userID)
      })
  
      let data = await res.json()
       console.log(data);
  
    } catch (err) {
      console.log(err);
    }
    setUserID(user)
    window.location.href = "/Login";
  }
  
  return (
    <div>
      <div>
        <Header/>
      </div>
      <div>
      <Box  style={{width:"400px",paddingTop:"150px",marginLeft:"600px"}}>
      <Text style={{fontSize:"30px"}}>Sign up with Sparkle Jewelry</Text>
      <br />
      <div style={{display:"flex",justifyContent:"space-evenly"}} className="sign">
        <img src="https://cdn-icons-png.flaticon.com/128/3670/3670032.png" alt=""/>
        <img src="https://cdn-icons-png.flaticon.com/128/2875/2875404.png" alt="" />
      </div>
      </Box>
       <Box className="login-page" style={{width:"400px",marginLeft:"600px",padding:"20px 0px"}}>
      <form onSubmit={handleSubmit} className="form">
     
      <br />
      <br />

      <FormControl >
        <InputGroup>
        <InputLeftAddon>+91</InputLeftAddon>
            <Input name="mobile" value={userID.mobile} onChange={handleChange} 
           type="number" placeholder="Mobile Number" />
        </InputGroup>
       </FormControl>
       <br/>
       <FormControl >
            <Input name="email" value={userID.email} onChange={handleChange} 
          type="email" placeholder="Email" />
   </FormControl>
   <br/>
   <FormControl >
            <Input name="firstName" value={userID.firstName} onChange={handleChange} 
            type="text" placeholder="First Name" />
        </FormControl>
        <br/>
        <FormControl >
            <Input name="lastName" value={userID.lastName} onChange={handleChange} 
            data-testid="email-input" type="text" placeholder="Last Name" />
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
           <Stack>
        <Box>
          <Checkbox>Remember Me</Checkbox>
        </Box>
        <Box>
        <Text>Forgot password?</Text>
        </Box>
      </Stack>
      <Button type="submit" isDisabled={boolean} onClick={handleSubmit}>SUBMIT</Button>
      </FormControl>
      </form>
  
    </Box>
      </div>
      <div>
        <Footer/>
      </div>
     
    </div>
   
  );
}
export default Signin;
    