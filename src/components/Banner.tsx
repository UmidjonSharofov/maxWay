import React,{useEffect, useState} from 'react'
import Slider from "react-slick";
import '../styles/_banner.scss'
import axios from 'axios';

const Banner = ({banner}:any) => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
  return (
    <section className='banner'>
         <Slider {...settings}>
          {/* {banner.map((item:any,i:number)=>{
            return(
              <div key={i}>
                <img loading='lazy' src={item.image} alt="" />
              </div>
            )
          })} */}
          <div>
           <img src="/images/first.jpg" alt="" />
          </div>
          <div>
            <img src="/images/second.jpg" alt="" />
          </div>
          <div>
            <img src="/images/third.jpg" alt="" />
          </div>
       </Slider>
    </section>
  )
}

export default Banner;

function SampleNextArrow(props:any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style,}}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props:any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style }}
        onClick={onClick}
      />
    );
  }