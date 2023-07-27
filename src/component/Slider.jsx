import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import './Slider.css'
import {SliderProducts} from './../Prouduct'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slider = () => {
  return (
    <div className="container_slide">
        <Swiper
        modules={[Navigation, Pagination]}
        navigation={true}
        loopFillGroupWithBlank={true}
        className="my_swiper"
        slidesPerView={3}
        spaceBetween={45}
        slidesPerGroup={1}
        loop={true}
        >
            
           {SliderProducts.map((slide,i)=>(
            <SwiperSlide>
                <div className="slide_left">
                    <div className="name">
                        <span>
                            {slide.name}
                        </span>
                        <span>
                            {slide.detail}
                        </span>
                    </div>
                    <span>{slide.price} $</span>
                    <div>Shope Now</div>
                </div>
                <img src={slide.img} className="img_prod" />
                 </SwiperSlide>
           )

           )}
          
        </Swiper>
    </div>
  )
}

export default Slider