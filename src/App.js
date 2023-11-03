// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Shirt from './components/Shirt';
import Navtop from './components/Navtop';
import Footer  from './components/Footer';
import { Categories } from './components/Categories';

import {
  HashRouter,
  Routes,
  Route,
  
} from "react-router-dom";
import Productdetail from './components/Productdetail';
import ContState from './context/ContState';
import ProductCategoryRow from './components/ProductCategoryRow';
const App =(props)=> {
  const[progress,setProgress]=useState(0)
  return (
    <>
    <ContState>
    <div>
    <HashRouter>
<Navtop/>




<Routes>
<Route  path="/" element ={<Categories catname="carousels" />}/>
<Route  path="/shirt" element ={<Shirt catname="shirt"/>}/> 
<Route  path="/jeans" element ={<Shirt catname="jeans"/>}/> 
<Route  path="/tshirt" element ={<Shirt catname="tshirt"/>}/> 
<Route  path="/dress" element ={<Shirt  catname="dress"/>}/> 

<Route  path="/productdetail/:category" element ={<Productdetail  />}/> 
<Route  path="/productcategoryrow/:name" element ={<Shirt catname="shirt"/>}/> 

</Routes>

</HashRouter>

    </div>
    </ContState>
    </>
  );
}

export default App;
