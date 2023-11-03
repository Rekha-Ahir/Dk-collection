import React from "react";

import ProductCategoryRow from "./ProductCategoryRow";
import catlog from "./OIP.jpg"
import { useContext } from "react";
import Context from "../context/Context"
let Shirt = (props) => {
const pro=useContext(Context)


let {catname}=props
console.log("to use",pro.jeans)
let shirts=pro.shirt
let pants=pro.jeans
let tshirt=pro.tshirt

let dress=pro.dress

   

    return (<>

       { 
        props.catname==="shirt" &&
        <div className="container productlist" >
<h1 className="text-center border border-primary ">Shirts</h1>
            <div className="row" >
                {
             

                 shirts.map((element) => {
                 
                   console.log(element)
                   return <div className="col-md-4" key={element.key}>
                       <ProductCategoryRow  category={element.category } price={element.price } imageUrl={element.img} key={element.key}  />
                        
                    </div>
                   }
                )}
            </div>
        </div>}
        
       {props.catname==='jeans'&&
       <div className="container productlist" >
        <h1 className="text-center border border-primary">Jeans</h1>

            <div className="row" >
                {
               

                 pants.map((element) => {
              
                   console.log("jeans ki row ",element)
                   return <div className="col-md-4" key={element.key}>
                       <ProductCategoryRow  category={element.category } price={element.price } imageUrl={element.img} key={element.key}  />
                        
                    </div>
                   }
                )}
            </div>
        </div>}
       {props.catname==='tshirt'&&
       <div className="container productlist" >
        <h1 className="text-center border border-primary">T-Shirts</h1>

            <div className="row" >
                {
               

                tshirt.map((element) => {
                {
                   console.log("tshirt",element)
                   return <div className="col-md-4" key={element.key}>
                       <ProductCategoryRow  category={element.category } price={element.price } imageUrl={element.img} key={element.key}  />
                        
                    </div>}
                   }
                )}
            </div>
        </div>}
       {props.catname==='dress'&&
       <div className="container productlist" >
        <h1 className="text-center border border-primary">Dress</h1>

            <div className="row" >
                {
               

                 dress.map((element) => {
                   
                   console.log(" ",element)
                   return <div className="col-md-4" key={element.key}>
                       <ProductCategoryRow  category={element.category } price={element.price } imageUrl={element.img} key={element.key}  />
                        
                    </div>
                    }
                )}
            </div>
        </div>}
      

       
                 





    </>)

}


export default Shirt;