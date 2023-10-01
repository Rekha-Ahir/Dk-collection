import React  from "react";
// import Product from "./Product";
import { useState } from "react";

const Box =(prop)=>{
    const [componentVisible, setComponentVisible] = useState(false);

  // Function to toggle the visibility of the custom component
  const toggleComponent = () => {
    console.log("click")
    setComponentVisible(!componentVisible);
  };
    // var openpage =()=>{
    //     console.log("click");
    //     {<Product/>}
        // <Product    product = {[
        //     {category: "Fruits", price: "500 ₹"},
        //     {category: "Fruits", price: "500₹"} ,     
        //      {category: "Fruits", price: "500₹"},
        //     {category: "Vegetables", price: "500₹"},  
        //      {category: "Vegetables", price: "500₹"} , 
        //       {category: "Vegetables", price: "500₹"}  ,] }/>
    // }
    return(
        <>
         <div className="box " id="box">
                   <img src={prop.img} alt=""  ></img>
      
                    <h5 className="pr-name" >{prop.name}
        {/* {componentVisible ? 'Hide Component' : 'Load Component'} */}
     
      {/* {componentVisible && <Product /> } */}
      </h5>

                </div>

        </>
    )
}
export default Box;