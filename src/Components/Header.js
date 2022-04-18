import React from 'react'
import '../App.css';
import Navbar from '../Components/Bootstrap/Navbar';
// import Carousel from '../Components/Bootstrap/Carousel';
import './Header.css'
import Slider from './Slider';



function Header() {
  return (
    <header className='header'>
      <Navbar></Navbar>
      <Slider></Slider>
      {/* <Carousel></Carousel> */}
    </header>
  )
}

export default Header