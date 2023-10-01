// import logo from './logo.svg';
import './App.css';
import Shirt from './components/Shirt';
import Navtop from './components/Navtop';

import { Categories } from './components/Categories';
import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";
const App =()=> {
  return (
    <>
    <div>
    <BrowserRouter>
<Navtop/>
<div className='container'>
{/* <Carousels/> */}
</div>

<Routes>
<Route  path="/" element ={<Categories/>}/> 
<Route  path="/shirt" element ={<Shirt />}/> 
<Route  path="/jeans" element ={<Shirt/>}/> 
<Route  path="/t-shirt" element ={<Shirt />}/> 
<Route  path="/dress" element ={<Shirt />}/> 
</Routes>

</BrowserRouter>
    </div>
    </>
  );
}

export default App;
