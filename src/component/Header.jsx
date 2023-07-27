import React, { useState } from 'react'
import  './Header.css'
import logo from '../images/logo.png'
import {BiShoppingBag} from 'react-icons/bi'
import {GoThreeBars} from 'react-icons/go'
function Header() {
  
  const[showmenu,setshowmenu]=useState(true)
  const mobile = window.innerWidth<=640 ? true : false
  const togglemenu= ()=>{
    setshowmenu((showmenu)=>!showmenu)
  }

  /* const mobile = window.innerWidth<=768 ? true : false
    const [menueopen, setmenueopen]=useState(false)
    return(
        <div className="header">
           
            <img src={Logo} title="Logo" className="Logo" />
            {(menueopen===false && mobile===true) ?(
                <div><img src={bars} alt="" style={{width:'2.5rem' , height:'2.5rem',padding:'0.5rem',backgroundColor: 'rgb(31, 32, 32)',borderRadius:'5px'}} onClick={()=>setmenueopen(true)} />
                
                </div>
                
                
                */
  return (
    <div className="container">
        <div className="logo">
            <img src={logo} />
            <span >ForEver</span>
        </div>
        <div className="right">
       
        <div className='bars' onClick={togglemenu}>
            <GoThreeBars />
          </div> 
            <div className="menue">
            <ul className="menue" style={{display:showmenu?'inherit':'none'}}>
              <li>Collactions</li>
              <li>Brands</li>
              <li>New</li>
              <li>Sells</li>
              <li>More</li>
             </ul>

            </div>
            <input type="text" className="search" placeholder='search'/>
            <BiShoppingBag />
        </div>
    </div>
    
  )
}

export default Header