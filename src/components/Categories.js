import React from 'react'
import shirt from './shirt.jpg'
import tshirt from './tshirt.jpg'
import jeans from './jeans.jpg'
import Hodiee from './hodiee.jpg'
import lower from './lower.jpg'
import off from './offt.jpg'
import formal from './formal dress.jpg'
// import foramls from './forms.jpg'
import catlog from './shirt.jpg'
import Box from './Box'
import Carousels from './Carousels'
import Footer from './Footer'
export const Categories = (props) => {
    return (
        <>
            <div id='carou'>
                <Carousels /></div>
            <div className='productlist'>
                <section id="service" >


                    <Box name="Shirt" img={shirt} />
                    <Box name="T-Shirt" img={tshirt} />
                    <Box name="Hodiee" img={jeans} />
                    <Box name="Shirt" img={Hodiee} />






                </section >
                <hr></hr>
                <div  className='jeans'>

                    <Box name="formal dress" img={formal} />
                    <Box name="offshoulder tshirt" img={off} />
                    <Box name="Trousers" img={jeans} />
                    <Box name="Lower" img={lower} />
                    <Box name="Lower" img={catlog} />
                    <Box name="Lower" img={catlog} />
                    <Box name="Lower" img={catlog} />


                </div>
            </div>
            
            <Footer/>




        </>
    )
}
