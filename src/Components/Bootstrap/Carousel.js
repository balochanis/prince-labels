import React from 'react'
import { Carousel} from 'react-bootstrap'



function Slider() {
  return (
    <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.picsum.photos/id/1/800/400.jpg?hmac=lP5ueMCjxeLFC5HJPNkGzLE9oZOcWhPpOQZ12itchyY"
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
      src="https://i.picsum.photos/id/967/800/400.jpg?hmac=tucYJHMv8S5CMSFmUobKYEsGohVqYJ_N-QDt9y-q30o"
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
      src="https://i.picsum.photos/id/323/800/400.jpg?hmac=fIRwhI0GTJR6Outceta7kRdjm1dUAoiKJmqDt5bW7rU"
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