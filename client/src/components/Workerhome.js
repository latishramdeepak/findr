import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Workerhome = () => {
  // let detail;
  const navigate = useNavigate();
  const [detail, setDetail] = useState({
    fname: "",

    lname: "",
    service: "",

    shopname: "",

    timings: "",

    email: "",

    aadharno: "",

    phone: "",

    address: "",

    location: "",

    city: "",

    state: "",

    pincode: "",

    messages: [],
  });
 

  const callworkpage = async () => {
    try {
      const res = await fetch("/workerhome", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const response = await res.json();

      setDetail((prestate) => {
        return {
          
          fname: "",

          lname: "",
          service: "",

          shopname: "",

          timings: "",

          email: "",

          aadharno: "",

          phone: "",

          address: "",

          location: "",

          city: "",

          state: "",

          pincode: "",

          messages: [
          ]
        };
      });
      console.log("helloo");
       console.log(response);
      setDetail((prestate) => {
        return {
          ...prestate,

          fname: response.fname,

          lname: response.lname,
          service: response.service,

          shopname: response.shopname,

          timings: response.timings,

          email: response.email,

          aadharno: response.aadharno,

          phone: response.phone,

          address: response.address,

          location: response.location,

          city: response.city,

          state: response.state,

          pincode: response.pincode,

          messages: [...prestate.messages,response.messages]
        };
      });
     
    console.log(detail);

     console.log("hello deepu");
     
     console.log(detail.messages);

        

      if (!res.status === 200) {
        const error = new Error(res.error);
        console.log("oops you got error");
        throw error;
      }

 

      if (res.status === 401) {
        navigate("/Workerlogin");
      }
    } catch (err) {
      console.log(err);
      navigate("/workerlogin");
    }
  };

  useEffect(() => {
    callworkpage();
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="fs-1 text-center mb-5">About me</h1>
        <div className="row text-black">
          <div className="col-md-6 col-12">
            <div className="card p-5">
              <div className="card-header">Featured</div>
              <div className="card-body">
                <h5 className="card-title">
                  {detail.fname} {detail.lname}
                </h5>
                <p class="card-text">
                  service : {detail.service}
                  <br></br>
                  shopname : {detail.shopname} <br></br>
                  timings : {detail.timings} <br></br>
                  email : {detail.email} <br></br>
                  aadharno : {detail.aadharno} <br></br>
                  address : {detail.address} <br></br>
                  location : {detail.location} <br></br>
                  city : {detail.city}
                  <br></br>
                  state : {detail.state}
                  <br></br>
                  pincode : {detail.pincode}
                  <br></br>
                  messages:
                </p>
                <a href="#" className="btn btn-primary">
                  contact: {detail.phone}
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12 text-white">
            <div className="row ">
               {detail.messages.map((elem)=>{
                return (
                  <>
                  <h1>{elem.name}</h1>
                  </>
                )
               })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Workerhome;
