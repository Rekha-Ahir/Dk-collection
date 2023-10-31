import React from "react";
import {App} from "../App";
import ProductCategoryRow from "./ProductCategoryRow";
import catlog from "./OIP.jpg"
import { useContext } from "react";
import Context from "../context/Context"
let Shirt = (props) => {
const pro=useContext(Context)
let {catname}=props
// console.log(catname)
    // let pro = [
        
           
    //             [ {category: "Adida", price: "500₹", key: "2"}, {category: "fam", price: "600₹", key: "3"},  {category: "fam", price: "600₹", key: "3"}, {category: "fam", price: "600₹", key: "3"}, {category: "fam", price: "600₹", key: "3"}, {category: "fam", price: "600₹", key: "3"},],
    //             [{category: "", price: "500₹", key: "3"} ,{category: "fam", price: "600₹", key: "3"}, {category: "fam", price: "600₹", key: "3"}, {category: "fam", price: "600₹", key: "3"}, {category: "fam", price: "600₹", key: "3"}, ],
    //         // T_shirt: { category: "Vegetables", price: "500₹", key: "4" },
    //         //     lower: { category: "Vegetables", price: "500₹", key: "5" },
    //         //     name: { category: "Vegetables", price: "500₹", key: "6" },
    //         ]
        
    
    let a=pro[0]
    console.log(a.category)
    //   let rows=[]
    //       pro.forEach((product) => {

    //         if (
    //           pro.category.toLowerCase().indexOf(
    //             filterText.toLowerCase()
    //           ) === -1
    //         ) {
    //           return;
    //         }

    //         if (product.category !== lastCategory) {
    //           rows.push(
    //             <ProductCategoryRow
    //               category={product.category}
    //               key={product.category} />
    //           );
    //         }
    //         rows.push(
    //           <ProductCategoryRow
    //             product={product}
    //             key={product.category} />
    //         );
    //         lastCategory = product.category;
    //       });
// for(let i=0,i<=pro={}length
    return (<>

       {<div className="container productlist" >

            <div className="row" >
                {
                // props.catname==="shirt" &&

                 pro.map((element) => {
                
                   console.log(element)
                   return <div className="col-md-4" key={element.key}>
                       <ProductCategoryRow  category={element.category } price={element.price } imageUrl={catlog} key={element.key}  />
                        
                    </div>
                    console.log(element)}
                )}
            </div>
        </div>}

       {/* { props.catname==="jeans" && <div className="container productlist" >

            <div className="row" >
                { 
               

                 pro[1].map((element) => {
                
                   
                   return <div className="col-md-4" >
                       <ProductCategoryRow  category={element.category } price={element.price } imageUrl={catlog}  id={element.id}/>
                        
                    </div>
                    console.log(element)}
                )}
            </div>
        </div>} */}






    </>)

}


export default Shirt;