import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import simg from "./OIP.jpg"

const Carousels = ()=> {

    return (
        <>
        <div>
        <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-inline  hight w-100"
          src={simg}
          width={30}
          height={50}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-inline  hight w-100"
          src={simg}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-inline  hight w-100"
          src={simg}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
        </>
    )
}

export default Carousels
