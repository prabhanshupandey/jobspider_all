import makeStyles from '@mui/styles/makeStyles';
const comStyles = makeStyles({
    root: {
      width:'100%',
      height:'auto',
      display:'flex',
      justifyContent:'center',
      paddingTop:30,
      fontFamily:'Ubuntu'
    },
    box:{
        width:'auto',
        height:'auto',
        //border:'1px solid #2c3e50',
        borderRadius:5,
        padding:15
    },
    dbox:{
      width:1500,
      height:'auto',
      border:'1px solid #2c3e50',
      borderRadius:5,
      padding:15
  },
    HelperText:{

 
    color: "#d32f2f",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: 400,
    fontSize: "0.75rem",
    lineHeight: 1.66,
    letterSpacing: "0.03333em",
    textAlign: "left",
    marginTop: "3px",
    marginBottom: "0",
   
  }


    
  });
  export{comStyles}