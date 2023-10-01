import React from 'react'
import catlog from './OIP.jpg'
import Box from './Box'
import Carousels from './Carousels'
export const Categories = (props) => {
    return (
        <>
        <div id='carou'>
<Carousels/></div>
<div id='productlist'>
            <section id="service" >

               
                <Box name="Shirt" img={catlog} />
                <Box name="T-Shirt" img={catlog}/>
                <Box name="Hodiee" img={catlog}/>
                <Box name="Shirt" img={catlog}/>

                

                


            </section >
            <hr></hr>
            <section id="service-jeans  " className='service' >

            <Box name="Shirt" img={catlog}/>
                <Box name="Jeans" img={catlog}/>
                <Box name="Trousers" img={catlog}/>
                <Box name="Lower" img={catlog}/>
                <Box name="Lower" img={catlog}/>
                <Box name="Lower" img={catlog}/>
                <Box name="Lower" img={catlog}/>


            </section> 
            </div>   
            <hr></hr>
            

           


        </>
    )
}
