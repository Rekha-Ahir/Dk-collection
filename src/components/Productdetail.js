import React from "react";
// import df from "./"
import pic from "./OIP.jpg"
import { useContext } from "react";
import Context from "../context/Context";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const Productdetail = (props) => {
  const{category}=useParams();
  console.log("kam",category)

  // console.log(c)

  // let { key, category, price } = props
  const pro = useContext(Context)
//   useEffect(()=>{
// getproduct()
//   },[])
  // console.log("cat",props.category)
  // console.log("pls",pro[0].category)
  return (

    <>
     
{pro.map((el)=>{
if(el.category===category){
      return <div id="product">
          <div id="right-container">
            <img className="firstimg" src={pic} width={200} height={200} alt="front" />
            <div><img src={pic} width={100} height={100} alt="front" />
              <img src={pic} width={100} height={100} alt="front" /></div>

          </div>
          <div id="left-container">




            <div className="pbox"> <h5>{el.name}
            </h5>
              <div id="rating"><span class="material-symbols-outlined">
                star
              </span>{el.rating} | rating</div>

              <h5>₹{el.price}</h5>
            </div>
            <div className="size pbox" >
              <h5>SELECT SIZE</h5>
              <div>
                <p>30</p>
                <p>40</p>
                <p>42</p>
                <p>44</p></div>
            </div>
            <button>
              <span class="material-symbols-outlined">
              shopping_cart
            </span>
            Add to cart</button>
            <button>Buy Now</button>
            <hr></hr>
            <div className="pbox">
              <h5> PRODUCT DETAILS </h5>
              <li> Name : Printed Round Neck White T shirt</li>

              <li>Sizes : </li>

              <li>M (Chest Size : 32 in)</li>

              <li>L (Chest Size : 34 in)</li>

              <li>XL (Chest Size : 38 in)</li>

              <li>Round Neck Printed Poly Cotton White T shirt 100% Poly Cotton</li>

              <li>Country of Origin : India</li>
            </div>

          </div>
        </div>
}})}
    </>
  )
}
export default Productdetail