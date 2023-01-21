

import React from 'react'
import {Routes,Route} from "react-router-dom"
import Banglesbraclets from '../Pages/Bangles&braclets'
import Cart from '../Pages/Cart'
import Earings from '../Pages/Earings'
import Favorites from '../Pages/Favorites'
import Gifts from '../Pages/Gifts'
import Home from '../Pages/Home'
import Kids from '../Pages/Kids'
import Login from '../Pages/Login'
import Necklace from '../Pages/Necklace'
import NewArrivals from '../Pages/NewArrivals'
import Rings from '../Pages/Rings'
import Signin from '../Pages/Signin'
import Singleproduct from '../Pages/Singleproduct'
import Header from './Header'

const Allroutes = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/NewArrivals' element={<NewArrivals/>}></Route>
        <Route path='/Rings' element={<Rings/>}></Route>
        <Route path='/Earings' element={<Earings/>}></Route>
        <Route path='/Bangles' element={<Banglesbraclets/>}></Route>
        <Route path='/Necklace' element={<Necklace/>}></Route>
        <Route path='/Kids' element={<Kids/>}></Route>
        <Route path='/Gifts' element={<Gifts/>}></Route>
        <Route path='/Single/:id' element={<Singleproduct/>}></Route>
        <Route path='/Signin' element={<Signin/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Favorites' element={<Favorites/>}></Route>
        <Route path='/Cart' element={<Cart/>}></Route>
      </Routes>
    </div>
  )
}

export default Allroutes