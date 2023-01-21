import React from 'react'


import "./Body.css"
import { Link } from 'react-router-dom';
import SimpleSlider from './SimpleSlider';
import Products from './Products';
import Comments from './Comments';



const Body = () => {

  return (
    <div>
     
      <div className='banner' style={{gap:"40px"}}>
        <div>
         <a href="https://www.caratlane.com/fashion-jewellery/?filters=silver&utm_source=CaratLane&utm_medium=HPBanner&utm_campaign=SilverDesigns"><img src="https://cdn.caratlane.com/media/static/images/V4/2022/Shaya/10_OCT/11_10_2022/Revised/Responsive-Banner.jpg" alt="" width={750} /></a> 
        </div>
        <div>
          <img src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/01-JAN/HP-Banner/JustArrived/1X.jpg" alt="" width={1000}/>
          <img src="https://banner.caratlane.com/live-images/24c66cc1b50b44719b0e9e696dcdd67a.webp" alt="" width={1000}/>
        </div>
      </div>
      <div>
        <SimpleSlider/>
      </div>
      <div className='banner2' style={{gap:"30px"}}>
      <Link to="/Earings"><img src="https://cdn.caratlane.com/media/static/images/V4/2022/CL/12-DEC/HP-Banner/6tile/01/Desktop_5.jpg" alt="" /></Link>  
      <Link to="/Necklace"><img src="https://cdn.caratlane.com/media/static/images/V4/2022/CL/12-DEC/HP-Banner/6tile/01/Desktop_1.jpg" alt="" /></Link>  
      <Link to="/Kids"><img src="https://cdn.caratlane.com/media/static/images/V4/2022/CL/12-DEC/HP-Banner/6tile/01/Desktop_2.jpg" alt="" /></Link> 
      <Link to="/Rings"><img src="https://cdn.caratlane.com/media/static/images/V4/2022/CL/12-DEC/HP-Banner/6tile/01/Desktop_3.jpg" alt="" /></Link>  
       <Link to="/Bangles"><img src="https://cdn.caratlane.com/media/static/images/V4/2022/CL/12-DEC/HP-Banner/6tile/01/Desktop_7.jpg" alt="" /></Link> 
       <Link to="NewArrivals"><img src="https://cdn.caratlane.com/media/static/images/V4/2022/CL/12-DEC/HP-Banner/6tile/01/Desktop_6.jpg" alt="" /></Link> 
      </div>
      <div className='image'>
       <div className='zoom'><img src="https://cdn.caratlane.com/media/static/images/V4/2022/CL/12-DEC/HP-Banner/Collection/02/Collection_Borla.jpg" alt=""/>
       </div>
       <div className='zoom'> <img src="https://cdn.caratlane.com/media/static/images/V4/2022/CL/12-DEC/HP-Banner/Collection/02/Collection_Mogra.jpg" alt="" /> </div>
       <div className='zoom'><img src="https://cdn.caratlane.com/media/static/images/V4/2022/CL/12-DEC/HP-Banner/Collection/02/Collection_Harmony.jpg" alt="" /></div>
      </div>
      <div className='products'>
       <Products/>
      </div>
      <div className='comments'>
        <Comments/>
      </div>
    </div>
  )
}

export default Body