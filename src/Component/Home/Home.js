import React from "react";
import './Home.css'
import LoadProduct from "./LoadProduct/LoadProduct";

import MiddleOne from "./MiddleOne";
import MiddleThree from "./MiddleThree";
import MiddleTwo from "./MiddleTwo";

const Home = () => {
  return (
    <>
    <div className="Hero-section">
          <div className="header-text text-center"> 
         <h3 className="mt-3" style={{ color: "red", textAlign: "center" }}>
          New
        </h3>
         
              <div className="content ">
              <h3 className="">MacBook Pro</h3>
             <h3 className="">MacBook Pro</h3>
              </div>
              
          </div >

          <div className=" mb-5 d-flex justify-content-center align-item-center h-100 mt-5">
              <img src="https://www.apple.com/v/mac/home/bk/images/overview/hero/hero_macbook_pro_14_16__0y2t2v3g4hu2_large.jpg" alt="" />
          </div>
     </div>
     
      <LoadProduct></LoadProduct>
      <MiddleOne></MiddleOne>
      <MiddleTwo></MiddleTwo>
      <MiddleThree></MiddleThree>
          
    </>
  );
};

export default Home;
