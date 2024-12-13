import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {Favorites, Home, Navbar} from "./components"
import Cart from './components/Cart'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/favorites' element={<Favorites/>}/>
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  )
}

export default App