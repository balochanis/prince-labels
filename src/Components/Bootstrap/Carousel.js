import React from 'react'
import { Carousel} from 'react-bootstrap'
import SliderImg1 from '../../Assets/Images/SliderImages/slider1.webp'
import SliderImg2 from '../../Assets/Images/SliderImages/slider2.webp'
import SliderImg3 from '../../Assets/Images/SliderImages/slider3.webp'


function Slider() {
  return (
    <Carousel fade  controls='false'>
  <Carousel.Item className="inner-item">
    <img
      className="d-block w-100"
      src={SliderImg1}
      alt="First slide"

    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item >
    <img
      className="d-block w-100"
      src={SliderImg2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={SliderImg3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  )
}

export default Slider