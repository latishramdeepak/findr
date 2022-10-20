import React , {useState} from 'react'
import gifpic from "../images/logingif.webp";
import { NavLink, useNavigate } from 'react-router-dom';

const Login = () => {
  let navigate=useNavigate();
  
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  const loginUser= async (e) =>{
    e.preventDefault();

    const res= await fetch('/login', {
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
      navigate('/Service')
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
                <h2 className="fs-2 text-center mb-3">Sign in</h2>
                {/*--------------forms fill up------------------------------------------*/}
                <form method="POST">
                
                <NavLink to={`/Workerlogin`} >
               <div class="form-check form-check-inline mb-3">
               <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="option1"
                    
                  />
                  

                  <label className="form-check-label" htmlFor="inlineRadio1">
                    Signin as a worker
                  </label>
                  </div> 
                  </NavLink>
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
                  <NavLink to="/Signup" >Create an account</NavLink>
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

export default Login;