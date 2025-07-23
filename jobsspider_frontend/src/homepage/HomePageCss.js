import makeStyles from '@mui/styles/makeStyles';


const homeStyles = makeStyles({
    
    root: {
        backgroundColor: '#f1f2f6',
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        gap: '20px', 
      },
      
      box: {
        backgroundColor: '#ffffff',
        width: 500,
        height: 'auto',
        border: '1px solid #2c3e50',
        borderRadius: 8,
        padding: 15,
      },
      boxs: {
        backgroundColor: '#ffffff',
        width: 375,
        height: 300,
        borderRadius: 8,
        padding: 15,
      },
      itemAbove: {
        backgroundColor: '#dcdde1',
        padding: '10px 20px',
        borderRadius: 4,
        textAlign: 'center',
      },
      
      helperTextStyle:{
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
  export {homeStyles}

