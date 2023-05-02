import { Link } from "react-router-dom";
import React from "react";
import BGImg from "../../assets/img/bg/cover1.jpg";
import BGImg1 from "../../assets/img/bg/testimonials-bg.jpg";
import About from "../HomeMain/About";
import Appointment from "../HomeMain/Appointment";
import Blog from "../HomeMain/Blog";
import Testimonial from "../HomeMain/Testimonial";
import Service from "../HomeMain/Service";
import Gallery from "../HomeMain/Gallery";
import Pricing from "../HomeMain/Pricing";
import Feature from "../HomeMain/Feature";
import Product from "../HomeMain/Product";

const Main = () => {
  return (
    <>
      <main>
        <section id="home" className="slider-area fix p-relative">
          <div className="slider-active" style={{ background: "#00173c" }}>
            <div
              className="single-slider slider-bg d-flex align-items-center"
              style={{
                backgroundSize: "cover",
                backgroundImage: `url(${BGImg})`,
              }}
            >
              <div className="container">
                <div className="row justify-content-center align-items-center">
                  <div className="col-lg-10 col-md-6">
                    <div className="slider-content s-slider-content mt-20">
                     
                      <h2
                        data-animation="fadeInUp"
                        data-delay=".4s"
                        style={{ color: "white" }}
                      >
                        Enhancing our community
                        <br />
                        one smile at a time
                      </h2>
                      <p
                        data-animation="fadeInUp"
                        data-delay=".6s"
                        style={{ color: "white" }}
                      >
                        GENERAL & COSMETIC DENTISTRY SERVING DUNKIRK, MD AND
                        SURROUNDING AREAS
                      </p>

                      <div className="slider-btn mt-30">
                        <Link to="/contact" className="btn ss-btn mr-15">
                          Request an Appointment
                        </Link>
                        <Link to="/contact" className="btn ss-btn active">
                          Meet the doctor
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 p-relative"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Feature />
        
      
        {/* <div
              className="  d-flex align-items-center"
          style={{
                marginTop:"20px",
                background:"cover",
                backgroundImage: `url(${BGImg1})`,
            height: "400px",
                width:"100%"
              }}
            ></div> */}
        <Gallery/>
        
       
        {/* <Testimonial /> */}
        
      </main>
    </>
  );
};

export default Main;
