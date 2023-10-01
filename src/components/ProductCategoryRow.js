import React from "react";
// import Product from "./Product";
const ProductCategoryRow=(props)=>{
    let{category,price,key,imageUrl}=props
    return(
        <>
        <div className="box">
                  <img src={imageUrl} alt="" />
                   <h5 className="pr-name">{price}</h5>
                   <h5 className="pr-name">{category}</h5>

               </div>

       </>
    )

}
export default ProductCategoryRow;