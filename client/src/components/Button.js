import React, { useState, useEffect ,} from "react";
import {useParams} from 'react-router-dom';
import saloon from "../images/saloon.jpeg";
import plumberpic from "../images/plumber pic.jpg";
const Button = () => {
   
  const params=useParams();
  const userId=params.userId;
  const [users, setUsers] = useState([]);
  const [imagefile,uploading]=useState("");

  const Getdata = async () => {
    let response;
  
    
    
     if(userId==='plumber'){
       response = await fetch("/plumber");
       uploading(plumberpic);
       
     }

     if(userId==='saloon'){
      response = await fetch("/saloon");
      uploading(saloon);
     }


    if(userId==='roofing'){
      response = await fetch("/roofing");
      uploading(plumberpic);
    }
      if(userId === 'D'){
       response = await fetch("/cleaning");

    }
    

    setUsers(await response.json());
  };

  useEffect(() => {
    Getdata();
  }, []);


  

  return (
    <>
   

    <div className="container">
      <h1 className="fs-1 text-center mb-5">{userId}</h1>
      <div className="row">
        <div className="col-md-4 col-12">
          <img src={imagefile} class="img-fluid" alt="saloonpic" />
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
  )



}

export default Button;

