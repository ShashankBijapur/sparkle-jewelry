import React from 'react'

import "./Body.css"
import { Link } from 'react-router-dom';
import SimpleSlider from './SimpleSlider';
import Comments from './Comments';
import Products from './Products';
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
      <div style={{display:"flex"}}>
      <div><img src="https://cdn.caratlane.com/media/static/images/V4/2022/CL/10-OCT/Others/insta/image1.jpg" alt="" width={600}/></div>
      <div>
      <div style={{display:"flex"}}>
        <img src="https://cdn.caratlane.com/media/static/images/V4/2022/CL/10-OCT/Others/insta/image2.jpg" alt="" width={300}/>
        <img src="https://cdn.caratlane.com/media/static/images/V4/2022/CL/10-OCT/Others/insta/Image4.jpg" alt="" width={300}/>
        <img src="https://cdn.caratlane.com/media/static/images/V4/2022/CL/10-OCT/Others/insta/Image5.jpg" alt="" width={300}/>
      </div>
      <div style={{display:"flex"}}>
        <img src="https://cdn.caratlane.com/media/static/images/V4/2022/CL/10-OCT/Others/insta/image3.jpg" alt="" width={300}/>
        <img src="https://cdn.caratlane.com/media/static/images/V4/2022/CL/10-OCT/Others/insta/Image6.jpg" alt="" width={300}/>
        <img src="https://cdn.caratlane.com/media/static/images/V4/2022/CL/10-OCT/Others/insta/image7.jpg" alt="" width={300}/>
      </div>
      </div>
      </div>
      <div style={{marginTop:"40px",height:"400px"}}>
      <h5 style={{color:"purple"}}>Know More about Sparkle Jewelry</h5>
      <div style={{display:"flex",marginTop:"40px",textAlign:"left",padding:"0px 20px",gap:"50px"}}>
      <div>
        <h4>Online Jewellery Store</h4>
        <p style={{fontSize:"12px",marginTop:"40px"}}>CaratLane.com began in 2008 with the simple motto of democratising jewellery. And today, after 13 glorious years, it has come to be recognised as one of the top 20 e-commerce portals in India. Steadily growing from strength to strength since inception, CaratLane has also established 165 stores across the length and breadth of India.

Since July 2016, we joined forces with India’s most desired and largest jewellery brand, Tanishq, through a strategic investment made by Titan Company in CaratLane. This takes us another step closer to achieving our shared mission - to make beautiful jewellery accessible to everyone.</p>
      </div>
      <div>
      <h4>Sparkle Jewelry's Vision</h4>
      <p style={{fontSize:"12px",marginTop:"40px"}}>CaratLane works with the vision of offering tastefully designed jewellery at revolutionary prices. This is achieved by eliminating all inefficiencies which result in drastically reduced costs. With CaratLane, users stand to save as much as 30% when compared to prices in the market.

Our app is designed to bridge the vast gap between the virtual and the physical world. This has been attained with the help of the Virtual Try-on feature that permits the users to virtually put on 1000s of earrings to see just how they look when placed on the ears.

With over 100 thousand downloads, the CaratLane app has emerged to be one of the most liked applications in the jewellery circuit.</p>
      </div>
      <div>
      <h4>Shopping at Sparkle Jewelry</h4>
      <p style={{fontSize:"12px",marginTop:"40px"}}>Placing security first, CaratLane ensures that every transaction made on the site is safe and smooth for the customers. To attain this, the company follows stern policies of transparency through the whole customer buying journey.

For further convenience, all CaratLane products come backed with certification from international laboratories, and a blanket 15-day-return policy, no questions asked.

CaratLane provides the exquisite craftsmanship of beautiful jewellery designs such as rings, earrings, pendants, necklace, chains, bangles, bracelets, mangalsutra, nose pins. Apart from jewellery, CaratLane offers 22k (916) and 24k (995) gold coins with certification and the guarantee of a BIS Hallmarked stamp.</p>
      </div>
      </div>
     </div>
    </div>
  )
}

export default Body

