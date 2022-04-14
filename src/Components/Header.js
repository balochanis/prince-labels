import React from 'react'
import '../App.css';
import Navbar from '../Components/Bootstrap/Navbar';
import Carousel from '../Components/Bootstrap/Carousel';



function Header() {
  return (
    <div>
      <Navbar></Navbar>
      <Carousel></Carousel>
    </div>
  )
}

export default Header