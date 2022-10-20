import React, { useState, useEffect } from "react";
import saloon from "../images/saloon.jpeg";
import Message from "./Message";
import {useNavigate} from 'react-router-dom';

const Carpenter = () => {

  let navigate=useNavigate();

  
  const [users, setUsers] = useState([]);

  const Getdata = async () => {
    const response = await fetch("/carpenter");

    setUsers(await response.json());
  };


  const magic=async(e)=>{
      e.preventDefault();

      const dat=e.target.value;
      console.log(dat);
      
     //  const send=async ()=>{
        const res= await fetch('/message',{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          
          body:JSON.stringify({
             dat
          })
        });

        const data=res.json();

        if(res.status===400 || !data){
          window.alert("invalid deepu");
        }else{
          navigate('/Message')
        }
   //    }


  }

  useEffect(() => {
    Getdata();
  }, []);
  return (
    <>
      <div className="container">
        <h1 className="fs-1 text-center mb-5">Carpenter</h1>
        <div className="row">
          <div className="col-md-4 col-12">
            <img src={saloon} class="img-fluid" alt="saloonpic" />
          </div>
          <div className="col-md-7 col-12 ">
            <div className="row">
              {users.map((curElem) => {
                return (
                  <>
                    <div className="col-md-12 col-12">
                      <div
                        className="card border-success mb-3"
                        style={{ maxWidth: "100%" }}
                      >
                        <div className="card-header bg-transparent text-black border-dark">
                          {curElem.fname} {curElem.lname}
                        </div>
                        <div className="card-body text-success">
                          <h5 className="card-title text-black">
                            {curElem.shopname}
                          </h5>
                          <p className="card-text text-dark">
                            Address: {curElem.address}
                            <br></br>
                            Timings: {curElem.timings}
                          </p>
                        </div>
                        <div className="card-footer bg-transparent border-dark text-black">
                          Contact Us : {curElem.phone}
                        </div>

                        <div className="card-footer bg-transparent border-dark text-black">
                          id : {curElem._id}
                        </div>

                       
                          <button value={curElem._id}  onClick={magic} type="submit" >Submit</button>
                      
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carpenter;
