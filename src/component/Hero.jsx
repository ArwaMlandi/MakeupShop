import React from 'react'
import'./Hero.css'
import hero from './../images/testimonialHero.png'
import {RiShoppingBagFill} from 'react-icons/ri'
import {BsArrowRight} from 'react-icons/bs'
import { motion } from "framer-motion"
function Hero() {
    
  return (
    <div className="container_hero">
        <div className="left_side">
            <span className='s_left'>Skin Protection cream</span>
        </div>

        <div className="medule_side">
            <div className="red_circle"></div>
            <motion.img
          
          animate={{ x: 30,y:40 ,x:-30 ,y:-40 }}
          transition={{ type: "spring", stiffness: 100 ,delay: 1.2}}
        
            src={hero} width={300} />



            <motion.div 
            transition={{delay:1.2}}
            initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
            className="cart">
                <RiShoppingBagFill/>
                <div className="signup">
                    <span>Best Signup Offers</span>
                    <BsArrowRight/>
                </div>
                
            </motion.div>
        </div>



        <div className="right_side">
            <div className="text1">
            <span className='s_right'>Trendy Collection </span>
            </div>

            <div className="text2">
            <span className='s_right'> seedly say has sutible disposal and boy, exercise joy man children rejoiced</span>
            </div>
        </div>
    </div>
  )
}

export default Hero