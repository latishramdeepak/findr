import React from "react";
import homepage from "../images/newhomepage.jpg";

import gifpic from "../images/logingif.webp";

const Home = () => {
  return (
    <>
     

     <div className="container-fluid p-0">
        <div className="home-page-pic">
          <img src={homepage}  className="img-fluid main-page" alt="Responsive"/>
          <h1 className="heading">Hello deepu</h1>
        </div>
      </div>


    


    <section className="description text-white">
        <div className="container-fluid">
            <div class="row mt-5 align-items-center">
               <div className="col-md-6 col-12 align-items-center">
                  <div className="desc-img p-3">
                    <img  src={gifpic} className="img-fluid" alt="gif"/>
                  </div>
               </div>
               <div className="col-md-6 col-12">
                  <h4 className="fs-4">Description</h4>
                  <h1 className="fs-1">Services by one click</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos suscipit consectetur,
                    dolorum sed pariatur
                    dolorem tenetur aspernatur eaque odio quasi, nesciunt ducimus nobis nemo recusandae nam
                    praesentium harum perspiciatis
                    incidunt?</p>
                    <button className="btn-1">learn more</button>

               </div>
            </div>
        </div>
    </section>



    </>
  );
};

export default Home;
