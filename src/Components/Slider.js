import React from 'react'
import {Carousel} from 'react-bootstrap';
const style = {
  // height: 'calc(100vh - 56px)',
  // display: 'none'
}
function Slider() {
  return (
    <Carousel style={style}>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={"https://i.picsum.photos/id/1/800/400.jpg?hmac=lP5ueMCjxeLFC5HJPNkGzLE9oZOcWhPpOQZ12itchyY"}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.picsum.photos/id/1/800/400.jpg?hmac=lP5ueMCjxeLFC5HJPNkGzLE9oZOcWhPpOQZ12itchyY"
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
      src="https://i.picsum.photos/id/1/800/400.jpg?hmac=lP5ueMCjxeLFC5HJPNkGzLE9oZOcWhPpOQZ12itchyY"
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