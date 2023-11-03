import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import simg from "./OIP.jpg"
import sports from'./IMG-20231101-WA0023.jpg'
import tshirt from './IMG-20231101-WA0027.jpg' 
import tshirt2 from './IMG-20231101-WA0031.jpg' 
import { useEffect } from 'react';
const Carousels = ()=> {
  let slideIndex = 0;

  useEffect(() => {
    showSlides(); // Start the image slider when the component mounts

    function showSlides() {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }
      slides[slideIndex - 1].style.display = "block";
      setTimeout(showSlides, 2000); // Change image every 2 seconds
    }
  }, []);
  
    return (
        <>
        <div className='firstbox'>
          <div id='poster' >
            <h1 className='text-center'>
              Dev Kripa Collection
            </h1>
            <h5 className='text-center text-white'>Men's Clothing website</h5>
          </div>
        {/* <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          classNameName="d-inline hights w-100"
          src={sports}
          // width={40}
          // height={40}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          classNameName="d-inline hights w-100"
          src={tshirt}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          classNameName="d-inline hights w-100"
          src={tshirt2}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> */}
  {/*  <div className="slideshow-container">
    


<div className="mySlides fade">
  <div className="numbertext">1 / 3</div>
  <img src={sports} width={100}/>
  <div className="text">Caption Text</div>
</div>

<div className="mySlides fade">
  <div className="numbertext">2 / 3</div>
  <img src={tshirt}width={100}/>
  <div className="text">Caption Two</div>
</div>

<div className="mySlides fade">
  <div className="numbertext">3 / 3</div>
  <img src={tshirt2} width={100}/>
  <div className="text">Caption Three</div>
</div>


<a className="prev" onclick="plusSlides(-1)">&#10094;</a>
<a className="next" onclick="plusSlides(1)">&#10095;</a>
</div>
{/* </br> */}


        </div>
        </>
    )
}

export default Carousels
