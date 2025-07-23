import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import  ReviewCommponent from"./ReviewComponet";
import { createRef,useRef } from "react";
import RecentUpdateComponent from "./RecentUpdateComponent";
export default function UpdateScroll({items}){
  var settings = {
    dots: false,               
    infinite: true,           
    speed: 4000,                
    slidesToShow: 5, 
    slidesToScroll:2,         
    arrows: false, 
    centerPadding:"20px",
     centerMode:true, 
    autoplay:true,               
    autoplaySpeed:-5,       
     cssEase: "linear",         
};



  var sref=useRef()
  const  showupdate=()=>{
     return items.map((item)=>{
         return<div><RecentUpdateComponent item={item}/></div>
     })
  
    }
    return(<div>
        <Slider ref={sref} {...settings}>
        {showupdate()}
      </Slider>
      </div>)
    }

