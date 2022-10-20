import React, {useState} from "react";
import gifpic from "../images/logingif.webp";
import { Link ,Outlet,NavLink, useNavigate} from "react-router-dom";


const Signup = () => {

  let navigate=useNavigate();

  const [user,setUser] =useState({
    name:"",email:"",phone:"",password:"",cpassword:""
  });
  let name,value;
  const handleInputs=(e)=>{
   console.log(e);
   name=e.target.name;
   value=e.target.value;

   setUser({...user,[name]:value});
  }

  const PostData = async (e) =>{
     e.preventDefault();
     const { name, email, phone, password, cpassword} =user;

    const res = await fetch("/signup",{
      method:"POST",
      headers:{
        "Content-Type" : "application/json",
      },
      body:JSON.stringify({
        name, email, phone, password, cpassword

      })
    });

    const data = await res.json();
    
    if(data.status === 422 || !data)
    {
      window.alert("invalid registration");
      console.log("invalid registration");
    }

    else if(data.status===201){
      window.alert("registration completed hurray");
      navigate('/Login');
      console.log("successful");


    }
    
  }


 
  return (
    <>
      <section className="signup">
        <div className="container justify-content-center text-center mt-5">
          <div className="row d-flex justify-content-around">
            <div className="col-md-5 col-12 d-flex align-items-center">
              <img src={gifpic} className="img-fluid rounded-2" alt="gif" />
            </div>
            <div className="col-md-5 col-12 mt-5 text-center d-flex align-items-center">
              <div className=" container-fluid signup-form">
                <h2 className="fs-2 text-center mb-3">Sign Up</h2>
                {/*--------------forms fill up------------------------------------------*/}

                {/*---------------------radio ----------------------------------------------*/}

               
               <NavLink to={`/Workerdetails`} >
               <div class="form-check form-check-inline mb-3">
               <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="option1"
                    
                  />
                  

                  <label className="form-check-label" htmlFor="inlineRadio1">
                    Register as a worker
                  </label>
                  </div> 
                  </NavLink>
                {/*---------------------radio ends----------------------------------------------*/}
                <form method="POST">
                  <div className="mb-3">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      aria-describedby="emailHelp"
                      placeholder="name"
                      autoComplete="off"
                      value={user.name}
                      onChange={handleInputs}
                    />
                  </div>

                  <div className="mb-3">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      id="email"
                      aria-describedby="emailHelp"
                      placeholder="email"
                      value={user.email}
                      onChange={handleInputs}
                      autoComplete="off"
                    />
                  </div>

                  <div className="mb-3">
                    <input
                      type="text"
                      name="phone"
                      className="form-control"
                      id="phone"
                      aria-describedby="emailHelp"
                      placeholder="phonenumber"
                      value={user.phone}
                      onChange={handleInputs}
                      autoComplete="off"
                    />
                  </div>

                  <div className="mb-3">
                    <input
                      type="password"
                      name="password"
                      class="form-control"
                      id="password"
                      placeholder="password"
                      value={user.password}
                      onChange={handleInputs}
                      autoComplete="off"
                    />
                  </div>

                  <div className="mb-3">
                    <input
                      type="password"
                      name="cpassword"
                      class="form-control"
                      id="cpassword"
                      placeholder="confirm password"
                      value={user.cpassword}
                      onChange={handleInputs}
                      autoComplete="off"
                    />
                  </div>

                  <div className="mb-3">
                  <NavLink to="/login">i'm already a user</NavLink>
                  </div>

                 

                  <button onClick={PostData} type="submit"  name="submit" className="btn text-white bg-dark">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
