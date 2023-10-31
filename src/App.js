// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Shirt from './components/Shirt';
import Navtop from './components/Navtop';
import Footer  from './components/Footer';
import { Categories } from './components/Categories';
import LoadingBar from 'react-top-loading-bar'
import {
  HashRouter,
  Routes,
  Route,
  
} from "react-router-dom";
import Productdetail from './components/Productdetail';
import ContState from './context/ContState';
const App =(props)=> {
  const[progress,setProgress]=useState(0)
  return (
    <>
    <ContState>
    <div>
    <HashRouter>
<Navtop/>
{/* <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}

      /> */}



<Routes>
<Route  path="/" element ={<Categories onClick={<Route  path="/shirt" exact component ={<Shirt catname="shirt" />}/>}/>}/>
<Route  path="/shirt" element ={<Shirt catname="shirt"/>}/> 
<Route  path="/jeans" element ={<Shirt catname="jeans"/>}/> 
<Route  path="/t-shirt" element ={<Shirt catname="T-shirt"/>}/> 
<Route  path="/dress" element ={<Shirt  catname="dress"/>}/> 

<Route  path="/productdetail/:category" element ={<Productdetail  />}/> 

</Routes>

</HashRouter>

    </div>
    </ContState>
    </>
  );
}

export default App;
