import React from 'react';
import jewelry from "../Img/jewelry.jpeg"
import { FormControl,Input, InputGroup, InputRightAddon} from "@chakra-ui/react"
import "./Header.css"
const Header = () => {
  return (
    <div >
      <div className='header'>Introducing Sparkle Jewelry PoP! Plan your purchase  
here</div>
       <div className='header1'>
      <div className='logo'>
     <img src={jewelry} alt="name" />
      </div>
      <div>
        <FormControl paddingRight={250} marginTop={3}>
          <InputGroup>
          <Input placeholder='Search' size="md" color="red" width={500}  borderColor="purple"/>
          <InputRightAddon><img src="https://img.shop.com/Image/resources/images/icon-search-24px.svg" alt=''/></InputRightAddon>
          </InputGroup> 
        </FormControl>
      </div>
      <div className='sign'>
      <img src="https://img.shop.com/Image/resources/images/icon-account-circle-24px.svg" alt=''  width={50}/>
      </div>
      <div className='fav'>
      <img src="https://assets.ajio.com/static/img/wishlistIcon.svg" alt='' width={50}/>
      </div>
      <div className='cart'>
        <img src="https://th.bing.com/th/id/OIP._LYIwX4GF77rLIs9e2GOkwHaHa?w=163&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" width={50}/>
      </div>
    </div>
    </div>
   
  )
}

export default Header;