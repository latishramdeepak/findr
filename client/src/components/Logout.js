import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
const Logout = () => {
    
    const navigate=useNavigate();
    useEffect(()=>{
        fetch('/logout',{
            method:"GET",
            headers: {
                Accept: "application/json",
                "Content-Type" : "application/json"
            }
        }).then((res)=>{
             navigate('/Login',{replace:true});
             if(!res.status===200){
                const error= new Error(res.error);
                throw error;
             }
        }).catch((err)=>{
            console.log(err);
        })
    })
  return (
   <>
   <center>
    <h1>hello i am logout page</h1>
   </center>
   </>
  )
}

export default Logout;
