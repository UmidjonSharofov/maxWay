import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import '../styles/_category.scss'
import list from "../list.js"
import { NavLink, useLocation } from 'react-router-dom';


const Category = () => {

 
  
  const [show,setShow]=useState(false)
  const {hash} =useLocation()
 
  const [xash,setXash]=useState('')
  
  useEffect(()=>{
    const scrollFunc=(e:any)=>{
      const divId=document?.getElementById('#products') as HTMLDivElement 
     
        if(window.pageYOffset>(divId?.offsetTop)-50){
          setShow(true)
          
         
         
          
        }else{
          setShow(false)
        }
    }
    window.addEventListener('scroll',scrollFunc)
  })
    const settings = {
        className: "slider variable-width",
        dots: false,
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
  return (
    <section className='category'>
        <div  className='container'>
            <h6 id='#title' className='title'>Категории</h6>
            {!show && <Slider {...settings}>
                {list.map((item:any,i:number)=>{
                    return(
                        <li key={i}><a href={`#${item.id}`}>{item.name}</a></li>
                    )
                })}
            </Slider>}
            {show && <div className='fixed-category'>
              <div className="container1">
                  <Slider {...settings}>
                      {list.map((item:any,i:number)=>{
                       

                        
                          return(
                              <li   key={i}><a className={hash==("#"+item.id)?'active':''} href={`#${item.id}`}>{item.name}</a></li>
                          )
                      })}
                  </Slider>
              </div>
            </div>}
        </div>
    </section>
  )
}

export default Category;

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