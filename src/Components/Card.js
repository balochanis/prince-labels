import React from 'react'
import CardImage from "../Assets/Images/cfc.jpg";

function Card() {
  return (
    <div className='card'>
    <img src={CardImage} alt="Product Sticker" className='card-picture' />
    <div className="card-feature">More colors</div>
    <h4 className='card-title'>Card Title</h4>
    <p className="card-description">Card description goes here</p>
    <p className="card-price">Card Price</p>
    
    </div>
  )
}

export default Card