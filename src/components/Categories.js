import React from 'react'
import shirt from './shirt.jpg'
import download from './icons8-call-50 (1).png'
import what from './icons8-whatsapp-50.png'
import insta from'./icons8-insta-50.png'
import location from'./icons8-location-50.png'

// import shirt2 from './'
import tshirt from './tshirt.jpg'
import jeans from './jeans.jpg'
import Hodiee from './hodiee.jpg'
import lower from './lower.jpg'
import sports from'./IMG-20231101-WA0023.jpg'
import Tshirt from'./IMG-20231101-WA0027.jpg'
import  dress from'./IMG-20231101-WA0028.jpg'
import  tshirt1 from'./IMG-20231101-WA0022.jpg'
import  tshirt2 from'./tshirt2.jpg'
import jacket from'./OIP (1).jpg'
import off from './offt.jpg'
import formal from './formal dress.jpg'

// import foramls from './forms.jpg'
import catlog from './shirt.jpg'
import Box from './Box'
import Carousels from './Carousels'
import Footer from './Footer'
import { Link } from 'react-router-dom'

export const Categories = (props) => {
 
 
    return (
        <>
        {<div className='firstbox'>
        <div id='poster' >
          <h1 className='text-center'>
            Dev Kripa Collection
          </h1>
          <h5 className='text-center text-white'>Men's Clothing website</h5>
          <div className='d-flex justify-content-between'>
          <div className='icon'>
            <img src={download} width={35} className='m-2 d-block'/>
          <p className='text-white m-0 d-block' >6260202353</p>
            <img src={location} width={35} className='m-2  address'/>
          <p className='text-white m-0  address' >Bholaram Ustad marg ,indore ,MP</p>

          </div>
         <div className='social d-flex justify-content-end m-4'>
          <a href='https://chat.whatsapp.com/CQwdi6jutL15UCeLJg94sA' target='_blank'><img src={what} width={35} className='m-2'/></a>
          <a href='https://www.instagram.com/d.k._collection_/' target='_blank'><img src={insta}  width={35} className='m-2'/></a></div>
        </div></div>
       
        </div>}
            <div className='productlist'>
            <h2 className='text-center'>Categories To Shop</h2>
                <section className="service" >
               
           
               
                <Link to="/shirt "><Box name="Shirt" img={shirt} /></Link>
                    <Link to="/dress "><Box name="Dress" img={dress} /></Link>
                    <Link to="/tshirt "><Box name="sporty" img={sports} /></Link>
                    <Link to="/tshirt"><Box name="T-shirt" img={Tshirt} /></Link>
                




                </section >
                <hr></hr>
         
                
                <div  className='jeans'>

                <Link to="/shirt"><Box name="formal dress" img={formal} /></Link>
                <Link to="/shirt"  ><Box name="Hodiee" img={Hodiee} /></Link>
                       <Link to="/jeans "><Box name="Jeans" img={jeans} /></Link>
                      <Link to="/jeans " ><Box name="Lower" img={lower} /></Link>
                       <Link to="/dress "><Box name="Dress" img={dress} /></Link>
                      <Link to="/jeans " ><Box name="jacket" img={jacket} /></Link>
                      


                </div>
            </div>
            <h2 className='text-center'>Categories To T-shirt</h2>
                <section className="service" >
               
           
               
                <Link to="/tshirt "><Box name="T-Shirt" img={tshirt1} /></Link>
                <Link to="/tshirt "><Box name="T-Shirt" img={tshirt2} /></Link>
                <Link to="/jeans "  ><Box name="offshoulder tshirt" img={off} /></Link>
                    
                    <Link to="/tshirt"><Box name="T-shirt" img={Tshirt} /></Link>
                




                </section >
                <hr></hr>
            
            <Footer/>




        </>
    )
}
