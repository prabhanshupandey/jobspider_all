
export default function TitleComponent({title}){
    return(<div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                <div style={{display:'flex',flexDirection:'column'}}>
        <div style={{display:'flex',alignItems:'center'}}>

      <div syle={{marginLeft:5,marginTop:5}}>
        <img src='/spider.png' style={{width:40}}/>
      </div>
      <div  style={{fontWeight:700,fontSize:24}}>
        JobsSipder
      </div>
      </div>
      
      <div style={{fontWeight:'600',fontSize:16,marginLeft:5}}>
      {title}
      </div>
     </div>
    
       <div>
      <img src='/report.png' style={{width:40}}/>
      </div>
    
     

 
    </div>)

}