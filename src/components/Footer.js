import React from "react";
import download from './icons8-call-50 (1).png'
import what from './icons8-whatsapp-50.png'
import insta from'./icons8-insta-50.png'
import location from'./icons8-location-50.png'

const Footer =()=>{

    return (<>
       
        <div className="container " id="foot" >
  <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
    <div className="col mb-3">
      <a href="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
        <svg className="bi me-2" width="40" height="32"></svg>
      </a>
      <p>DEV KRIPA COLLECTION</p>

      <p className="text-body-secondary">© 2023</p>
    </div>
    <div className='d-flex justify-content-between'>
          <div className='icon'>
            <img src={download} width={35} className='m-2 d-block'/>
          <p className='text-black m-0 d-block' >6260202353</p>
            <img src={location} width={35} className='m-2 d-block'/>
          <p className='text-black m-0 d-block address' >Bholaram Ustad marg ,indore ,MP</p>

          </div>
         <div className='social d-flex justify-content-end m-4'>
          <a href='https://chat.whatsapp.com/CQwdi6jutL15UCeLJg94sA' target='_blank'><img src={what} width={35} className='m-2'/></a>
          <a href='https://www.instagram.com/d.k._collection_/' target='_blank'><img src={insta}  width={35} className='m-2'/></a></div>
        </div>
        
    <div className="col mb-3">

    </div>

    <div className="col mb-3">
      
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
      </ul>
    </div>

   

  
    
  </footer>
</div> </>
    )
}
export default Footer;