import React ,{useState} from 'react'
import gifpic from "../images/logingif.webp";
import { NavLink, useNavigate } from 'react-router-dom';

const Workerlogin = () => {

    let navigate=useNavigate();
  
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');


  const loginUser= async (e) =>{
    e.preventDefault();

    const res= await fetch('/workerlogin', {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        email,
        password
      })
    });

    const data=res.json();

    if(res.status===400 || !data){
      window.alert("invalid credentials");
    }else{
      navigate('/Workerhome')
      window.alert("login successfully");
    }
    

  }



  return (
    <>

<section className="signin">
        <div className="container justify-content-center text-center mt-5">
          <div className="row d-flex justify-content-around">
            <div className="col-md-5 col-12 d-flex align-items-center">
              <img src={gifpic} className="img-fluid rounded-2" alt="gif" />
            </div>
            <div className="col-md-5 col-12 mt-5 text-center d-flex align-items-center">
              <div className=" container-fluid login-form">
                <h2 className="fs-2 text-center mb-3">Worker Sign in</h2>
                {/*--------------forms fill up------------------------------------------*/}
                <form method="POST">
                
               
                  <div className="mb-3">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      id="email"
                      aria-describedby="emailHelp"
                      value={email}
                      onChange={(e)=> setEmail(e.target.value)}
                      placeholder="email"
                    />
                  </div>

                  <div className="mb-3">
                    <input
                      type="password"
                      name="password"
                      class="form-control"
                      id="password"
                      value={password}
                      onChange={(e)=>setPassword(e.target.value)}
                      placeholder="password"
                    />
                  </div>

                  <div className="mb-3">
                  <NavLink to="/Workerdetails" >Create an account</NavLink>
                  </div>

                  

                 

                  <button type="submit" name="signin"  onClick={loginUser} className="btn text-white bg-dark">
                    continue
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Workerlogin;
