import React, { useEffect,useState } from "react";
import smallpic from "../images/solutionssmall.png";
import painter from "../images/painter.png";
import sliderpic from "../images/sliderpic.webp";
import {useNavigate} from "react-router-dom";
import cleaning from "../images/cleaning.jpeg";
import saloon from "../images/saloonservice.jpeg";
import ac from "../images/acrepair.jpg";
import painterpic from "../images/painterwall.jpeg";
import carpenter from "../images/carpenter.jpeg";
import plumberpic from "../images/plumber pic.jpg";
import roofing from "../images/roofing.jpg";





const About = () => {

  const navigate=useNavigate();
  const [color, setColor] = useState("");
   const callaboutpage=async()=>{
      try{        
       const res = await fetch('/about',{
        method:"GET",
        headers:{
          Accept:"application/json",
          "Content-Type":"application/json"
        },
        credentials:"include"
       });
      const  response=await res.json();
      console.log(response);
      setColor(response);
   //  setuserData(await res.json());
  //   console.log(userData);
     
     console.log("hello deepu");
      
      if(!res.status===200){
        const error=new Error(res.error);
        console.log('oops you got error');
        throw error;
      }

      console.log(color);

      if(res.status===401){
        navigate('/Login');
      }

      }catch(err){
        console.log(err);
        navigate('/Login');
      }
  }

  useEffect(() =>{
    callaboutpage();
  }, []);

 
 
   
  return (
    <>
      <form method="GET">
       <div className="container-fluid">
        <h1> hello {color.email}</h1>
       </div>
  </form>
      <div className="container-fluid p-0  mt-5 text-white mt-5">
        <h1 className="fs-1 text-center text-white mb-5 ">
          Our solutions for you 
        </h1>
        <div className="row m-0">
          <div className="col-md-4 col-12 p-0">
            <ul className="unordered-list">
              <li className="title-1 d-flex align-items-center">
                <h5 className="fs-5 ">Cleaning</h5>
                <img
                  className="rounded-circle images-2 mx-5 mb-3"
                  src={cleaning}
                  alt="pic"
                />
              </li>

              <li className="title-1 d-flex align-items-center mt-5">
                <h5 className="fs-5 ">Painting</h5>
                <img
                  className="rounded-circle images-2 mx-5 mb-3"
                  style={{ width: "130px!important", height: "auto" }}
                  src={painterpic}
                  alt="pic"
                />
              </li>

              <li className="title-1 d-flex align-items-center mt-5">
                <h5 className="fs-5 ">Saloon</h5>
                <img
                  className="rounded-circle images-2 mx-5 mb-3"
                  style={{ width: "130px!important", height: "auto" }}
                  src={saloon}
                  alt="pic"
                />
              </li>

              <li className="title-1 d-flex align-items-center mt-5">
                <h5 className="fs-5 ">A/C Repair</h5>
                <img
                  className="rounded-circle images-2 mx-5 mb-3"
                  style={{ width: "130px!important", height: "auto" }}
                  src={ac}
                  alt="pic"
                />
              </li>
            </ul>
          </div>
          <div className="col-md-4 col-12 p-0">
            <img src={painter} className="img-fluid" alt="painter" />
          </div>
          <div className="col-md-4 col-12 p-0">
            <ul className="unordered-list">
              <li className="title-1 d-flex align-items-center ">
                <img
                  className="rounded-circle images-2 mx-5 mb-3"
                  style={{ width: "130px!important", height: "auto" }}
                  src={carpenter}
                  alt="pic"
                />
                <h5 className="fs-5 ">Carpenter</h5>
              </li>

              <li className="title-1 d-flex align-items-center mt-5">
                <img
                  className="rounded-circle images-2 mx-5 mb-3"
                  style={{ width: "130px!important", height: "auto" }}
                  src={roofing}
                  alt="pic"
                />
                <h5 className="fs-5 ">Roofing</h5>
              </li>

              <li className="title-1 d-flex align-items-center mt-5">
                <img
                  className="rounded-circle images-2 mx-5 mb-3"
                  style={{ width: "130px!important", height: "auto" }}
                  src={sliderpic}
                  alt="pic"
                />
                <h5 className="fs-5 ">Electrician</h5>
              </li>

              <li className="title-1 d-flex align-items-center mt-5">
                <img
                  className="rounded-circle images-2 mx-5 mb-3"
                  style={{ width: "130px!important", height: "auto" }}
                  src={plumberpic}
                  alt="pic"
                />
                <h5 className="fs-5 ">Plumber</h5>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <section className="container-fluid mx-auto gallery bg-dark text-white">
        <div className="roow d-flex justify-content-center">
          <div className="cool-1">
            <h1>About Us</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex
              molestiae repudiandae aperiam veniam dicta atque nemo sit enim
              totam dolores deserunt fuga iste, maiores eius
            </p>
          </div>
          <div className="cool-1">
            <div className="image-gallery">
              <img src={sliderpic} alt="pics" />
              <img src={sliderpic} alt="pics" />
              <img src={sliderpic} alt="pics" />
              <img src={sliderpic} alt="pics" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
