import React from 'react';
import jewelry from "../Img/jewelry.jpeg"
import { FormControl,Input, InputGroup, InputRightAddon} from "@chakra-ui/react"
import "./Header.css"
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div id="header">
      <div className='header'>Introducing Sparkle Jewelry PoP! Plan your purchase  
here</div>
       <div className='header1'>
      <div className='logo'>
    <Link to="/"><img src={jewelry} alt="name" /></Link> 
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
     <Link to="/Signin" className='signin'> <img src="https://img.shop.com/Image/resources/images/icon-account-circle-24px.svg" alt=''  width={50}/>
     <div className='drop6' style={{width:"250px",border:"1px solid purple",backgroundColor:"white"}}>
      <h2>Your Account</h2>
      <h4>Access Account and manage your orders</h4>
      <button style={{border:"1px solid",backgroundColor:" rgb(226, 43, 186)",borderRadius:"5px",color:"wheat"}}>Sign Up</button>
      <button style={{border:"1px solid",borderColor:"rgb(226, 43, 186)",borderRadius:"5px"}}>Log In</button>
     </div>
     </Link>
      </div>
      <div className='fav'>
    <Link to="/Favorites"> <img src="https://assets.ajio.com/static/img/wishlistIcon.svg" alt='' width={50}/></Link> 
      </div>
      <div className='cart'>
      <Link to="/Cart"> <img src="https://th.bing.com/th/id/OIP._LYIwX4GF77rLIs9e2GOkwHaHa?w=163&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" width={50}/></Link> 
      </div>
    </div>
    <div className='navbar'>
    <Link to="NewArrivals" className='newArrivals'>NewArrivals
    <div className='drop'>
      <div style={{display:"flex",border:"1px solid purple",backgroundColor:"white",width:"300px",justifyContent:"space-evenly"}}>
      <div>
        <h4><img src="https://banner.caratlane.com/live-images/ef83bc921a13405e8920ad83e0432795.jpg" alt="" /> Fashion </h4>
        <h4><img src="https://banner.caratlane.com/live-images/05e292e9cf424ec58e05a67bb805355b.jpg" alt="" /> Engagement</h4>
        <h4><img src="https://banner.caratlane.com/live-images/c82f3668b7524234a033ca0f1e9198bf.jpg" alt="" /> Adjustable</h4>
        <h4><img src="https://banner.caratlane.com/live-images/7d7c48a01cc041828a4aaaf724c93342.jpg" alt="" /> Casual</h4>
        <h4><img src="https://banner.caratlane.com/live-images/c4b1660f99f34e688274b930a5a70d8f.jpg" alt="" /> Home wear</h4>
      </div>
      <div>
        <h4><img src="https://banner.caratlane.com/live-images/09f33b890d1844debb86f3146b75c2d9.jpg" alt="" /> Platinum</h4>
        <h4><img src="https://banner.caratlane.com/live-images/ad95f529f18c48cea0644493c3f2bacc.jpg" alt="" /> Diamond</h4>
        <h4><img src="https://banner.caratlane.com/live-images/fb2bbc016b7746aabe4edca3e2ebee37.png" alt="" /> Gold</h4>
        <h4><img src="https://banner.caratlane.com/live-images/bb3907642a3f4ca79e1a42e2026598a3.jpg" alt="" /> Silver</h4>
        <h4><img src="https://banner.caratlane.com/live-images/45bd4c30c40e41308ea829c2f415ae97.png" alt="" /> Solitaire</h4>
      </div>
      </div>

       </div>
    </Link>
    <Link to="/Rings" className='rings'>Ring
    <div className='drop1'>
      <div style={{display:"flex",border:"1px solid purple",backgroundColor:"white",width:"300px",justifyContent:"space-evenly"}}>
      <div>
        <h4><img src="https://banner.caratlane.com/live-images/3e52030aaf3c4b59b34f7825aaefd475.jpg" alt="" /> Fashion </h4>
        <h4><img src="https://banner.caratlane.com/live-images/c3bccfdddaf04356adc275f77f691891.jpg" alt="" /> Engagement</h4>
        <h4><img src="https://banner.caratlane.com/live-images/bdf62790e1fa4a49bc2cfb3c8b686b49.jpg" alt="" /> Adjustable</h4>
        <h4><img src="https://banner.caratlane.com/live-images/3aa8d1ca304e40d2bc21b6eccac7318e.jpg" alt="" /> Casual</h4>
        <h4><img src="https://banner.caratlane.com/live-images/4331fd3b9e364c6e998d58fcf5659746.jpg" alt="" /> Home wear</h4>
      </div>
      <div>
        <h4><img src="https://banner.caratlane.com/live-images/f1cecd6ba83142afa27229492f59391d.jpg" alt="" /> Platinum Rings</h4>
        <h4><img src="https://banner.caratlane.com/live-images/45bd4c30c40e41308ea829c2f415ae97.png" alt="" /> Diamond Rings</h4>
        <h4><img src="https://banner.caratlane.com/live-images/34b193daa7d9475d88d42851b6ba3c2e.jpg" alt="" /> Gold Rings</h4>
        <h4><img src="https://banner.caratlane.com/live-images/b934e1f5eebe412ebe5e730fa8ff134a.jpg" alt="" /> Silver Rings</h4>
        <h4><img src="https://banner.caratlane.com/live-images/94329809fcdf408eb7487e69abd78d21.jpg" alt="" /> Solitaire Rings</h4>
      </div>
      </div>
       </div>
    </Link>
    <Link to="/Earings" className='earings'>Earings
    <div className='drop2'>
      <div style={{display:"flex",border:"1px solid purple",backgroundColor:"white",width:"300px",justifyContent:"space-evenly"}}>
      <div>
        <h4><img src="https://banner.caratlane.com/live-images/c4b1660f99f34e688274b930a5a70d8f.jpg" alt="" />Studs</h4>
        <h4><img src="https://banner.caratlane.com/live-images/05cb5d46b065499ca6e50f30724f7e90.jpg" alt="" />Jumkis</h4>
        <h4><img src="https://banner.caratlane.com/live-images/4868fb10515f42c184cb4e1a58cd03e2.jpg" alt="" />Ear Cuffs</h4>
        <h4><img src="https://banner.caratlane.com/live-images/bc990516499d4f35b9a320887d91452c.jpg" alt="" />Pearl Earrings</h4>
        <h4><img src="https://banner.caratlane.com/live-images/4331fd3b9e364c6e998d58fcf5659746.jpg" alt="" />Chandballi Earrings</h4>
      </div>
      <div>
        <h4><img src="https://banner.caratlane.com/live-images/f437f34cb83e461db8c268d7f575307e.jpg" alt="" />Hopes & Huggies</h4>
        <h4><img src="https://banner.caratlane.com/live-images/059a2243502b4b8caee4f2a032e7f0d5.jpg" alt="" />Suidaga</h4>
        <h4><img src="https://banner.caratlane.com/live-images/44e34a1c90b74b799eb01913ec74d05f.png" alt="" />Gold Earrings</h4>
        <h4><img src="https://banner.caratlane.com/live-images/8ca7787a194b429fad687bd71752fe8c.jpg" alt="" />Silver Earrings</h4>
        <h4><img src="https://banner.caratlane.com/live-images/c82f3668b7524234a033ca0f1e9198bf.jpg" alt="" />Drops</h4>
      </div>
      </div>
       </div>
    </Link>
    <Link to="/Bangles" className='bangles'>Banglesbraclets
    <div className='drop3'>
      <div style={{display:"flex",border:"1px solid purple",backgroundColor:"white",width:"300px",justifyContent:"space-evenly"}}>
      <div>
        <h4><img src="https://banner.caratlane.com/live-images/05e292e9cf424ec58e05a67bb805355b.jpg" alt="" />Chain Braclets</h4>
        <h4><img src="https://banner.caratlane.com/live-images/f9ad94f888c14b8fb194829426a12a49.png" alt="" />Flexible Braclets</h4>
        <h4><img src="https://banner.caratlane.com/live-images/7d7c48a01cc041828a4aaaf724c93342.jpg" alt="" />light Braclets</h4>
        <h4><img src="https://banner.caratlane.com/live-images/1acd93734c6c4fe7b45415563c439d5d.jpg" alt="" />Gold Bangles</h4>
        <h4><img src="https://banner.caratlane.com/live-images/d794dd63a1ec46e8b28cfa85ab70550f.jpg" alt="" />Kids Bangles</h4>
      </div>
      <div>
        <h4><img src="https://banner.caratlane.com/live-images/ef83bc921a13405e8920ad83e0432795.jpg" alt="" />Oval Braclets</h4>
        <h4><img src="https://banner.caratlane.com/live-images/b1037b1ad67e4199a3f45f49f60241e2.jpg" alt="" />Diamond Braclets</h4>
        <h4><img src="https://banner.caratlane.com/live-images/bb3907642a3f4ca79e1a42e2026598a3.jpg" alt="" />MangalSutra Braclets</h4>
        <h4><img src="https://banner.caratlane.com/live-images/fb2bbc016b7746aabe4edca3e2ebee37.png" alt="" />22kt Braclets</h4>
        <h4><img src="https://banner.caratlane.com/live-images/0bd0077b43034bdd9ef6363db057123e.jpg" alt="" />Silver Braclets</h4>
      </div>
      </div>
       </div>
    </Link>

    <Link to="/Necklace" className='necklace'>Necklace
    <div className='drop4'>
      <div style={{display:"flex",border:"1px solid purple",backgroundColor:"white",width:"300px",justifyContent:"space-evenly"}}>
      <div>
        <h4><img src="https://banner.caratlane.com/live-images/3d7f53c12a774a9c9e9461feaff23c6d.jpg" alt="" /> Fashion</h4>
        <h4><img src="https://banner.caratlane.com/live-images/a2809a04e6274900af2a280280266831.png" alt="" />Flexible </h4>
        <h4><img src="https://banner.caratlane.com/live-images/6da9461dcc60446bbe74760804305c1a.jpg" alt="" />Pendents </h4>
        <h4><img src="https://banner.caratlane.com/live-images/05e292e9cf424ec58e05a67bb805355b.jpg" alt="" />Oval</h4>
        <h4><img src="https://banner.caratlane.com/live-images/059a2243502b4b8caee4f2a032e7f0d5.jpg" alt="" />Home Wear</h4>
      </div>
      <div>
        <h4><img src="https://banner.caratlane.com/live-images/ef83bc921a13405e8920ad83e0432795.jpg" alt="" />Platinum Necklace</h4>
        <h4><img src="https://banner.caratlane.com/live-images/b1037b1ad67e4199a3f45f49f60241e2.jpg" alt="" />Diamond Necklace</h4>
        <h4><img src="https://banner.caratlane.com/live-images/bb3907642a3f4ca79e1a42e2026598a3.jpg" alt="" />Solitaire Necklace</h4>
        <h4><img src="https://banner.caratlane.com/live-images/fb2bbc016b7746aabe4edca3e2ebee37.png" alt="" />Gold Necklace</h4>
        <h4><img src="https://banner.caratlane.com/live-images/0bd0077b43034bdd9ef6363db057123e.jpg" alt="" />Silver Necklace</h4>
      </div>
      </div>
       </div>
    </Link>
    <Link to="/Kids" className='kids'>Kids
    <div className='drop5'>
      <div style={{display:"flex",border:"1px solid purple",backgroundColor:"white",width:"300px",justifyContent:"space-evenly"}}>
      <div>
        <h4>Chians</h4>
        <h4>Nose Pins</h4>
        <h4>Nose Rings</h4>
        <h4>Necklace</h4>
        <h4>Light Wear</h4>
      </div>
      <div>
        <h4>Fashion</h4>
        <h4>EveryDay wear</h4>
        <h4>Casual</h4>
        <h4>Earings</h4>
        <h4>Personilised</h4>
      </div>
      </div>
       </div>
    </Link>
    <Link to="/Gifts">Gifts </Link>
    </div>
    </div>
   
  )
}

export default Header;