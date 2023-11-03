import React  from "react";
import { NavLink } from "react-router-dom";
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
         <NavLink to={`/productcategoryrow/${prop.name}`}>
         <div className="box " id="box">
                   <img src={prop.img} alt=""  ></img>
      
                    <h5 className="pr-name" >{prop.name}
    
      </h5>

                </div>
                </NavLink>

        </>
    )
}
export default Box;