import React, { useState } from 'react'
import './Prouduct.css'
import {ProductsData, prouductData } from './../Prouduct'
import { useAutoAnimate } from '@formkit/auto-animate/react'
const Prouduct = () => {

    const [parent]= useAutoAnimate()
    const [menuproduct,setmenuproduct]= useState(ProductsData)

    const filter =(type) =>{
        setmenuproduct(ProductsData.filter((product)=>product.type ===type))
    }
  return (
    <div className="container_prod">
         <h1>Our Products</h1>
        <div className="prods">
       
            <ul className="menu">
                <li onClick={()=>setmenuproduct(ProductsData)}>All</li>
                <li onClick={()=>filter("skin care")}>Skin Care</li>
                <li onClick={()=>filter("conditioner")}>Conditioners</li>
                <li onClick={()=>filter("foundation")}>Foundations</li>
            </ul>
            <div className="list" ref={parent}>
                {
                    menuproduct.map((product,i)=>(
                        <div className="product">
                            <div className="slide_left">
                                <div className="name">
                                    <span>{product.name}</span>
                                    <span>{product.detail}</span>
                                </div>
                                <span>{product.price} $</span>
                                <div>Show Now </div>
                            </div>
                            <img src={product.img} className="img_prod" />
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Prouduct