import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import  ReviewCommponent from"./ReviewComponet";
import { createRef,useRef } from "react";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
 export default function ReviewScroll ({data}){
     const theme = useTheme();
 const matches = useMediaQuery(theme.breakpoints.down('sm')); 
    var settings={
        dots: false,
        infinite: true,
        speed:500,
        slidesToShow: matches?1:2,
        slidesToScroll: 1,
        arrows:false,
        centerMode:true,
        centerPadding: matches?"0px":"0px",
        autoplay:false,
        autoplaySpeed:5000,
    };
 
 var sref=useRef()
 const  showReview=()=>{
    return data.map((item)=>{
        return<div><ReviewCommponent item={item}/></div>
    })
}
 return(<div style={{width:"100%"}}>
    <Slider ref={sref} {...settings}>
    {showReview()}
  </Slider>
  </div>)
}
 