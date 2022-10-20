import React, { useState } from "react";

const Workerdetails = () => {
  const [worker, setWorker] = useState({
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
    password: "",
    cpassword: ""
  });

  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setWorker({ ...worker, [name]: value });

  }
    const PostData = async (e) =>{
      const {fname, lname, service, shopname, timings,
        email, aadharno, phone, address, location, city, state, pincode,password,cpassword} = worker;

        const res = await fetch("/workerdetails",{
          method:"POST",
          headers:{
            "Content-Type" : "application/json",
          },
          body:JSON.stringify({
            fname, lname, service, shopname, timings,
          email, aadharno, phone, address, location, city, state, pincode, password,cpassword
    
          })
          
        });

        const data= await res.json();
        
        if(data.status === 422 || !data)
        {
          window.alert("invalid registration");
          console.log("invalid registration");
        }

        else{
          window.alert("registration completed hurray");
          console.log("successful");
        }

  };

  return (
    <>

    <center className="mb-3 mt-3">
      <h1 className="fs-1">Register your self as a worker</h1>
    </center>
      <section className="container bg-white text-dark mx-auto d-flex align-items-center justify-content-center p-5 mt-5 rounded-3">
        <form method="POST" className="row g-3 ">
          <div className="row">
            <div className="col">
              <input
                type="text"
                name="fname"
                id="fname"
                value={worker.fname}
                onChange={handleInputs}
                autoComplete="off"
                className="form-control"
                placeholder="First name"
                aria-label="First name"
              />
            </div>
            <div className="col">
              <input
                type="text"
                id="lname"
                name="lname"
                value={worker.lname}
                onChange={handleInputs}
                autoComplete="off"
                className="form-control"
                placeholder="Last name"
                aria-label="Last name"
              />
            </div>
          </div>

          <div className="col-md-4">
            <select
              id="inputState"
              value={worker.id}
              name="service"
              onChange={handleInputs}
              className="form-select"
            >
              <option selected="">service</option>
              <option id="saloon">Saloon</option>
              <option id="repair">AC/repair</option>
              <option id="electrician">Electrician</option>
              <option id="plumber">plumber</option>
              <option id="carpenter">cleaning</option>
              <option id="carpenter">roofing</option>
              <option id="carpenter">Carpenter</option>
              <option id="carpenter">painter</option>

            </select>
          </div>


          <div className="col-md-4">
            <input
              type="text"
              name="shopname"
              id="shopname"
              value={worker.shopname}
              onChange={handleInputs}
              autoComplete="off"
              className="form-control"
              placeholder="shopname"
              aria-label="shopname"
            />
          </div>

          <div className="col-md-4">
            <input
              type="text"
              name="timings"
              id="timings"
              value={worker.timings}
              onChange={handleInputs}
              autoComplete="off"
              className="form-control"
              placeholder="timings input as 00:00 AM to 12:00 PM"
              aria-label="timings"
            />
          </div>


          <div className="col-md-4">
            <input
              type="email"
              className="form-control"
              id="inputEmail4"
              value={worker.email}
              name="email"
              placeholder="email"
              onChange={handleInputs}
              autoComplete="off"
            />
          </div>
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              id="aadharno"
              value={worker.aadharno}
              name="aadharno"
              placeholder="aadhar no"
              onChange={handleInputs}
              autoComplete="off"
            />
          </div>

          <div className="col-md-4">
            <input
              type="email"
              className="form-control"
              placeholder="Mobile no"
              id="phone"
              value={worker.phone}
              name="phone"
              onChange={handleInputs}
              autoComplete="off"
            />
          </div>

          <div className="col-12">
            <input
              type="text"
              name="address"
              value={worker.address}
              onChange={handleInputs}
              autoComplete="off"
              className="form-control"
              id="address"
              placeholder="address"
            />
          </div>
          <div className="col-12">
            <input
              type="text"
              name="location"
              value={worker.location}
              onChange={handleInputs}
              autoComplete="off"
              className="form-control"
              id="location"
              placeholder="Apartment, studio, or floor"
            />
          </div>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              id="city"
              placeholder="city"
              name="city"
              value={worker.city}
              autoComplete="off"
              onChange={handleInputs}

            />
          </div>
          <div className="col-md-4">
           
            <select id="inputState" value={worker.id}  name="state" autoComplete="off" onChange={handleInputs} className="form-select">
              <option selected="">state</option>
              <option id="telangana">Telangana</option>
              <option id="andhra pradesh">Andhra Pradesh</option>
            </select>
          </div>
          <div className="col-md-2">
          
            <input type="text" name="pincode" onChange={handleInputs} autoComplete="off" value={worker.pincode}  className="form-control" id="pincode" placeholder="pincode"/>
          </div>

          <div className="row mt-3">
            <div className="col">
              <input
                type="text"
                name="password"
                id="cpasword"
                value={worker.password}
                onChange={handleInputs}
                autoComplete="off"
                className="form-control"
                placeholder="password"
                aria-label="password"
              />
            </div>
            <div className="col ">
              <input
                type="text"
                id="cpassword"
                name="cpassword"
                value={worker.cpassword}
                onChange={handleInputs}
                autoComplete="off"
                className="form-control"
                placeholder="confirm password"
                aria-label="cpassword"
              />
            </div>
          </div>

          <div className="col-12">
            <button onClick={PostData} type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>


        </form>
      </section>
    </>
  );
};

export default Workerdetails;
