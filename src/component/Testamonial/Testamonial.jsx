import React from 'react'
import './Testamonial.css'
import pic from './../../images/hero.png'
import {Swiper} from 'swiper/react'
import {TestimonialsData} from '../../Testamonial'
import { SwiperSlide } from 'swiper/react'
import { motion } from "framer-motion"
const Testamonial = () => {
  return (
   <div className="testamonial">
    <div className="wraper_test">
        <div className="container_test">
        <span>Top Rated </span>
        
        <span> seedly say has sutible disposal and boy, exercise joy man children rejoiced</span>
        
        </div>
        <motion.div 
        animate={{
            scale: [1, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%"],
          }}
        className="yellow_circle"
          ><img src={pic}/>
          </motion.div>
        
        
        <div className="container_test">
            <span>100k</span>
            <span>Happy Customers with Us </span>
        </div>
        </div>
        <div className="review">Reviews</div>
        <div className="carousol">
            <Swiper
             
             
             className="test_carsoul"
             slidesPerView={3}
             spaceBetween={20}
             breakpoints={
             { 320:{
              slidesPerGroup:1,
              slidesPerView:1

              },
            768:{
              slidesPerGroup:1,
              slidesPerView:3
            }}
             }
             
            >{
                TestimonialsData.map((testa,i)=>(
                    <SwiperSlide>
                        <div className="testamonial_review">
                            <img src={testa.image} />
                            <span>{testa.comment}</span>
                            <hr/>
                            <span>{testa.name}</span>

                        </div>
                    </SwiperSlide>
                ))}</Swiper>
        </div>
   </div>
  )
}

export default Testamonial