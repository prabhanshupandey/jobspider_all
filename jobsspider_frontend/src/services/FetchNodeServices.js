import axios from 'axios'
const serverURL = 'http://localhost:5000'
const token=localStorage.getItem('TOKEN')
const config = {
    headers: { Authorization: `${token}` }
};

const postData = async (url, body) => {
    try {
        var response = await axios.post(`${serverURL}/${url}`, body)
        var data = response.data
        return data
    }
    catch (e) {
        return null
    }

}


     const getData = async (url) => {
    const token=localStorage.getItem('TOKEN')
    console.log("xxxxxxxxxxxxxxxxxxxxxxxx",  token)
    var config
    if(token){
     config ={
     headers:{Authorization:`${token}`}
      }; }
      else{
         config={}
      }
    try {
        var response = await axios.get(`${serverURL}/${url}`,config)
        var data = response.data
        return data
    }
    catch (e) 
    {
        //console.log("error",e.status)
       // console.log("error",e)
       if(e.status==401){
        return({status:false,message:"Unauthorized Access"})

       }
       else{
        return({status:false,message:" Error on Server, please contact Backebd team"})
       }

    
       
    }

}

const passwordGenerator = () => {
    var p = parseInt(Math.random() * 899999) + 100000
    return p

}



const generateOtp = () => {
    var ot = parseInt(Math.random() * 8999) + 1000
    alert(ot)
    return (ot)
}
export { serverURL, postData, generateOtp, getData, passwordGenerator }