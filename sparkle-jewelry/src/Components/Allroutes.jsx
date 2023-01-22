

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

import PrivateRoute from './PrivateRoute'
import NewSingle from '../Pages/NewSingle'
import Payment from '../Pages/Payment'
import RingSingle from '../Pages/RingSingle'
import NecklaceSingle from '../Pages/NecklaceSingle'
import KidSingle from '../Pages/KidSingle'
import GiftSingle from '../Pages/GiftSingle'
import EarSingle from '../Pages/EaringSingle'
import BangleSingle from '../Pages/BangleSingle'

const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/NewArrivals' element={<NewArrivals/>}></Route>
        <Route path='/NewArrivals/:id' element={
          <PrivateRoute>
        <NewSingle/>
        </PrivateRoute> 
        }/>
        <Route path='/Rings' element={<Rings/>}></Route>
        <Route path='/Rings/:id' element={
          <PrivateRoute>
        <RingSingle/>
        </PrivateRoute> 
        }/>
        <Route path='/Earings' element={<Earings/>}></Route>
        <Route path='/Earings/:id' element={
          <PrivateRoute>
        <EarSingle/>
        </PrivateRoute> 
        }/>
        <Route path='/Bangles' element={<Banglesbraclets/>}></Route>
        <Route path='/Bangles/:id' element={
          <PrivateRoute>
        <BangleSingle/>
        </PrivateRoute> 
        }/>
        <Route path='/Necklace' element={<Necklace/>}></Route>
        <Route path='/Necklace/:id' element={
          <PrivateRoute>
        <NecklaceSingle/>
        </PrivateRoute> 
        }/>
        <Route path='/Kids' element={<Kids/>}></Route>
        <Route path='/Kids/:id' element={
          <PrivateRoute>
              <KidSingle/>
        </PrivateRoute> 
        }/>
        <Route path='/Gifts' element={<Gifts/>}></Route>
        <Route path='/Gifts/:id' element={
          <PrivateRoute>
        <GiftSingle/>
        </PrivateRoute> 
        }/>
      
        
        <Route path='/Signin' element={<Signin/>}></Route>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Favorites' element={<Favorites/>}></Route>
        <Route path='/Cart' element={<Cart/>}></Route>
        <Route path="/Payment" element={<Payment/>}/>
      </Routes>
    </div>
  )
}

export default Allroutes