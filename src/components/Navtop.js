import React from "react";
import shoplogo from "./Screenshot 2023-09-28 074439.png"
import { Link } from "react-router-dom";
import Srch from "./Srch";
import { useState } from "react";
import "./App.css";
// import Srch from "./Srch";

const Navtop = () => {
    const [filterText, setFilterText] = useState('');
    function myFunction() {

        // Declare variables
        var input, filter, ul, a, i, txtValue;
        input = document.getElementById('myInput');
        filter = input.value.toUpperCase();
        ul = document.getElementById("productlist");
        console.log(input)
        console.log(filter)
        console.log(ul)
        const product = document.querySelectorAll(".box")
        const pname = ul.getElementsByTagName('h5');
       

        // Loop through all list items, and hide those who don't match the search query
        for (i = 0; i < pname.length; i++) {
            let match = product[i].getElementsByTagName("h5")[0];
            console.log("h5", match)
            if (match) {
                txtValue = match.textContent || match.innerText;
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

                        <li><Link to="/ ">Home</Link></li>
                        <li><Link to="/shirt">Shirt </Link></li>
                        <li><Link to="jeans ">Jeans </Link></li>
                        <li><Link to="/T-shirt ">T-shirt</Link></li>
                        <li><Link to="/dress ">Dress</Link></li>

                    </ul>
                </div>
                <div id="right">
                    <form>
                        <input id="myInput"
                            type="text"
                            placeholder="Srch..."
                            onKeyUp={myFunction} />
                    </form>
                    {/* <Srch filterText={filterText} onFilterTextChange={setFilterText} */}

                </div>


            </nav>
        </>



    );

}
export default Navtop;