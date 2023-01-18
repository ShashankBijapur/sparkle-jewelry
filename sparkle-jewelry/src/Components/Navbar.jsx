import React from 'react'
import { Link } from 'react-router-dom'
import Banglesbraclets from '../Pages/Bangles&braclets'
import Earings from '../Pages/Earings'
import Gifts from '../Pages/Gifts'
import Kids from '../Pages/Kids'
import Necklace from '../Pages/Necklace'
import NewArrivals from '../Pages/NewArrivals'
import Rings from '../Pages/Rings'

const Navbar = () => {
  return (
    <div>
      <Link to="NewArrivals">{<NewArrivals/>}</Link>
    <Link to="/Rings">{<Rings/>}</Link>
    <Link to="/Earings">{<Earings/>}</Link>
    <Link to="/Bangles">{<Banglesbraclets/>}</Link>
    <Link to="/Necklace">{<Necklace/>}</Link>
    <Link to="/Kids">{<Kids/>}</Link>
    <Link to="Gifts">{<Gifts/>}</Link>
    </div>
  )
}

export default Navbar