import React from "react";
import { useContext } from "react";
import Context from "../context/Context"
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import Productdetail from "./Productdetail";

const ProductCategoryRow = (props) => {
    const[simple,setSimple]=useState(false)
    let { key, imageUrl, category, price,id } = props
    const pro = useContext(Context)
    console.log("check", pro[0].category)
    let handle = (e) => {
setSimple(e.target.childNodes[0].wholeText)
console.log(simple)
        console.log(e)
        let pname = e.target.childNodes[0].wholeText
        console.log("pro", e.target.childNodes[0].wholeText)
        if ((e.target.childNodes[0].wholeText) === (pro[0].category)) {
            console.log("y")
            alert("yes")
        } var i;

        let match = pro[0].category;
        console.log("h5", match)
        if (match) {
            let txtValue = match.textContent || match.innerText;

            console.log(match)
            console.log(match.indexOf(pname))
            //       if (txtValue.toUpperCase().indexOf(filter) > -1) {
            //           product[i].style.display = "";


            //       } else {
            //           product[i].style.display = "none";


            //   }
        }
    }

    return (

        <>
        <NavLink to={`/productdetail/${category}`}>
         <div className="box">

                <a>  <img src={imageUrl} alt="" />  </a>
                {/* <li><Link to="/ ">Home</Link></li> */}
               
                     <h5 className="pr-name" >    {category}  </h5>
                    
                     {/* {simple && <Productdetail/>} */}
                     

                <h6 className="price">{price}</h6>
                <p>{key}</p>
            </div>
            </NavLink>
       </>
       
    )
        
}
export default ProductCategoryRow;