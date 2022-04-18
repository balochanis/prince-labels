import React from 'react'
import CardImage from "../Assets/Images/cfc.jpg";
import '../App.css'
import { FaHeart } from 'react-icons/fa';

function Card(props) {

  return (
    <div className='card'>
      <div className="card-image">
        <div className="wishlist">
        <FaHeart size={'1.125rem'} className="wishlist-icon" />
         </div>
    <img src={CardImage} alt="Product Sticker" className='card-picture' />
      </div>
    <h4 className='title'>Product Title</h4>
    <p className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, debitis!</p>
      <small className='price'>More Colors</small>
      
    </div>
  )
}

export default Card