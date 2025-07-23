import React from "react";
import Spider from "../../assets/spider.png";

export default function SpiderImage() {
  return (<div style={{display:"flex",justifyContent:"center"}}>
    <div style={{ display: "flex",  width:"60vw",justifyContent: "center", alignItems:"center" }}>
      <img src={Spider} alt="Spider" style={{ width: 400,height:400, objectFit:"contain" ,paddingTop:20}} />
    </div>
    </div>
  );
}
