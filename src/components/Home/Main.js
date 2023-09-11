
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css"
import Image1 from "../../assets/img/gallery/content-img-1.jpg"
import Image2 from "../../assets/img/gallery/content-img-3-updated.jpg"
import Image3 from "../../assets/img/gallery/content-img-4.jpg"
import Image4 from "../../assets/img/gallery/content-img-5.jpg"
import Image5 from "../../assets/img/gallery/content-img-6.jpg"
import Gallery from "../HomeMain/Gallery"
import VideoPlayer from "react-background-video-player";
import Video from "../../assets/img/bg/new - Trim.mp4";
import About from "../HomeMain/About"
import Logo from "../../assets/img/logo/logo (3).png"
import Img1 from "../../assets/img/brand/ada.png";
import Img2 from "../../assets/img/gallery/content-img-1.jpg";
import Img3 from "../../assets/img/gallery/content-img-3-updated.jpg";
import Img4 from "../../assets/img/gallery/content-img-4.jpg";
import Img5 from "../../assets/img/gallery/content-img-5.jpg";
import Img6 from "../../assets/img/gallery/content-img-6.jpg";
import Img7 from "../../assets/img/brand/aafe.png";
import Img8 from "../../assets/img/brand/agd.png";
import Img9 from "../../assets/img/brand/msda.png";
import Img10 from "../../assets/img/brand/botox.png";



const Main = () => {
  
  return (
    <>
      <main>
        <section id="home" className="slider-area ">
          <div className="slider-active">
            <div
            // className="single-slider slider-bg d-flex align-items-center"
            // style={{
            //   backgroundSize: "cover",
            //   backgroundImage: `url(${BGImg})`,
            // }}
            >
              <div
                className="container"
                style={{ display: "flex", justifyContent: "center"}}
              >
                <div className="row justify-content-center align-items-center" >
                  <VideoPlayer
                    src={Video}
                    autoPlay={true}
                    muted={true}
                    style={{ marginTop: "20rem"}}
                  />
                  <div className="col-lg-6 col-md-6">
                    <div className="slider-content s-slider-content mt-20">
                      <div className="slider-btn mt-30"></div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 p-relative"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <main>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={Logo} />
        </div>

        <div>
          <VideoPlayer
            src={Video}
            autoPlay={true}
            muted={true}
            playsInLing={true}
            style={{
              height: "85vh",
              width: "85%",
              marginLeft: "145px",
              postion: "center",
              marginTop: "15rem",
            }}
          />
        </div>
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

        <div className="container" style={{ marginTop: "62rem" }}>
          <About />
        </div>
        <h1 style={{ textAlign: "center" }}>Our Associations</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems:"center",
            backgroundColor: "#58846D",
          }}
        >
          <div>
            <img src={Img1} alt="" style={{}} />
          </div>
          <div>
            <img src={Img7} alt="" />
          </div>
          <div>
            <img src={Img8} alt="" />
          </div>
          <div>
            <img src={Img9} alt="" />
          </div>
          <div>
            <img src={Img10} alt="" />
          </div>
        </div>

        {/* <Testimonial /> */}
      </main>{" "}
      */}
    </>
  );
};

export default Main;
