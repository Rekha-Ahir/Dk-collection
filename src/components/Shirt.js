import React  from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import catlog from "./OIP.jpg"
import { useState } from "react";
let Shirt =(props)=>{
//     let lastCategory=null
//     const [filterText, setFilterText] = useState('');
//   // const [rows, setRows] = useState([])
  let pro = [
    {category: "shirts",price: "500 ₹",key :"1"},
    {category: "Fruits", price: "500₹", key :"2"} ,     
     {category: "Fruits", price: "500₹" , key :"3"},
    {category: "Vegetables", price: "500₹" , key :"4"},  
     {category: "Vegetables", price: "500₹" , key :"5"} , 
      {category: "Vegetables", price: "500₹" , key :"6"}  ] 
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
    
       return(<>
      
        <div className="container">
                         
                         <div className="row" >
                             {pro.map((element) => {
                                 return <div className="col-md-4" key={element.key}>
                                     <ProductCategoryRow category={element.category ? element.category : ""} price={element.price ? element.price : ""} imageUrl={catlog}  />
                                 </div>
                             })}
                             </div>
                             </div>
     
                

              
        
      
        </>)
     
    }      
    
    
export default Shirt;