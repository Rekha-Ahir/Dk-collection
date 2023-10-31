import React from "react";
import shoplogo from "./favicon.png"
import { Link } from "react-router-dom";

import { useState } from "react";
import "./App.css";


const Navtop = (props) => {
    
    const [search, setSearch] = useState('');
    function handleChange(e) {
        console.log(e.target.value);
        setSearch(e.target.value)
      
  

        // Declare variables
        var input, filter, ul, a, i, txtValue;
        input = document.getElementById('myInput');
        filter = input.value.toUpperCase();
        ul = document.querySelectorAll(".productlist")[0];
        console.log(input)
        console.log(filter)
        console.log(ul)
        const product = document.querySelectorAll(".box")
        const pname = ul.getElementsByTagName('h5');
       console.log("product",pname)

        // Loop through all list items, and hide those who don't match the search query
        for (i = 0; i < pname.length; i++) {
            let match = product[i].getElementsByTagName("h5")[0];
            console.log("h5", match)
            if (match) {
                txtValue = match.textContent || match.innerText;
                console.log(txtValue.toUpperCase().indexOf(filter))
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    product[i].style.display = "";
                
                    
                } else {
                    product[i].style.display = "none";
                 
                }
            }
        }
    }

    return (

        <>



            <nav className="navbar">

                <img src={shoplogo} alt="" width={"50px"} id="logo"></img>
                <div id="left">

                    <ul>
<li>shirtf<a href="shirt.js"></a></li>
                        {/* <li><Link to="/ ">Home</Link></li> */}
                        <li><Link to="/shirt">Shirt </Link></li>
                        <li><Link to="/jeans ">Jeans </Link></li>
                        <li><Link to="/T-shirt ">T-shirt</Link></li>
                        <li><Link to="/dress ">Dress</Link></li>

                    </ul>
                </div>
                
                <div id="right">
                <span class="material-symbols-outlined">
search
</span>
                    <form>
                        <input id="myInput"
                        value={search}
                            type="text"
                            placeholder="Search products"
                            onChange={handleChange} />
                    </form>
                    {/* <Srch filterText={filterText} onFilterTextChange={setFilterText} */}

                </div>


            </nav>
           
        </>



    );

}
export default Navtop;