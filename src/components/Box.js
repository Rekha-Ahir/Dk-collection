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
   
    return(
        <>
         <div className="box " id="box">
                   <img src={prop.img} alt=""  ></img>
      
                    <h5 className="pr-name" >{prop.name}
    
      </h5>

                </div>

        </>
    )
}
export default Box;