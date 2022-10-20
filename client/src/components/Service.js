import React, {useState,useEffect}from "react";
import { useParams } from "react-router-dom";
import sliderpic from "../images/sliderpic.webp";
import { Link ,Outlet,NavLink} from "react-router-dom";
import plumberpic from "../images/plumber pic.jpg";
import Mainservicea from "./Mainservicea";
import Acservice from "./Acservice";
import Carpenter from "./Carpenter";
import Painter from "./Painter";
import Roofing from "./Roofing";
import Electrician from "./Electrician";
import Saloon from "./Saloon";
import Cleaning from "./Cleaning";
import Button from "./Button";

import saloon from "../images/saloonservice.jpeg";
import ac from "../images/acrepair.jpg";
import painter from "../images/painterwall.jpeg";
import carpenter from "../images/carpenter.jpeg";
import cleaning from "../images/cleaning.jpeg";
import roofing from "../images/roofing.jpg";

const Service = () => {

  return (
   

    
    <>
    <h1 className="service-heading">Services provided by us</h1>
      <div className="container text-dark text-center  d-flex justify-content-center align-items-center">
        <div className="row">
          <div className="col-md-3 col-12">
            <div className="card-body">
              <div className="card" style={{ width: "18rem" }}>
                <img src={plumberpic} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title text-center">Plumber</h5>
                  <p className="card-text">
                  Install and repair pipes and fixtures that carry water, gas, or other fluids in homes
                  </p>
                  <Link to={`plumber`} className="btn btn-primary">
                    Continue
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-12">
            <div className="card-body">
              <div className="card" style={{ width: "18rem" }}>
                <img src={saloon} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title text-center">Saloon</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <Link to={`saloon`} className="btn btn-primary">
                    Continue
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-12">
            <div className="card-body">
              <div className="card" style={{ width: "18rem" }}>
                <img src={ac} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title text-center">AC repair</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <NavLink to={`/Acservice`} className="btn btn-primary">
                    Continue
                  </NavLink>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-12">
            <div className="card-body">
              <div className="card" style={{ width: "18rem" }}>
                <img src={carpenter} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title text-center">carpenter</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <NavLink to={`/Carpenter`} className="btn btn-primary">
                    Continue
                  </NavLink>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-12">
            <div className="card-body">
              <div className="card" style={{ width: "18rem" }}>
                <img src={painter} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title text-center">painter</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <NavLink to={`/Painter`} className="btn btn-primary">
                    Continue
                  </NavLink>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-12">
            <div className="card-body">
              <div className="card" style={{ width: "18rem" }}>
                <img src={roofing} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title text-center">roofing</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <Link to={`roofing`} className="btn btn-primary">
                    Continue
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-12">
            <div className="card-body">
              <div className="card" style={{ width: "18rem" }}>
                <img src={sliderpic} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title text-center">Electrician</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <NavLink to={`/Electrician`} className="btn btn-primary">
                    Continue
                  </NavLink>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-12">
            <div className="card-body">
              <div className="card" style={{ width: "18rem" }}>
                <img src={cleaning} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title text-center">Cleaning</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <NavLink to={`/Cleaning`} className="btn btn-primary">
                    Continue
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-3 col-12">
            <div className="card-body">
              <div className="card" style={{ width: "18rem" }}>
                <img src={sliderpic} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title text-center">Electrician</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <Link to={`D`} className="btn btn-primary">
                    button 1
                  </Link>
                </div>
              </div>
            </div>
          </div>


          <div className="col-md-3 col-12">
            <div className="card-body">
              <div className="card" style={{ width: "18rem" }}>
                <img src={sliderpic} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title text-center">Electrician</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <Link to={`C`} className="btn btn-primary">
                    button 2
                  </Link>
                </div>
              </div>
            </div>
          </div>



          <div className="col-md-3 col-12">
            <div className="card-body">
              <div className="card" style={{ width: "18rem" }}>
                <img src={sliderpic} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title text-center">Electrician</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <Link to={`B`} className="btn btn-primary">
                    button 3
                  </Link>
                </div>
              </div>
            </div>
          </div>


          <div className="col-md-3 col-12">
            <div className="card-body">
              <div className="card" style={{ width: "18rem" }}>
                <img src={sliderpic} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title text-center">Electrician</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <Link to={`B`} className="btn btn-primary">
                    button 3
                  </Link>
                </div>
              </div>
            </div>
          </div>


    </>
  );
};

export default Service;
