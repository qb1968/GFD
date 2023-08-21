
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css"
import Image1 from "../../assets/img/gallery/content-img-1.jpg"
import Image2 from "../../assets/img/gallery/content-img-3-updated.jpg"
import Image3 from "../../assets/img/gallery/content-img-4.jpg"
import Image4 from "../../assets/img/gallery/content-img-5.jpg"
import Image5 from "../../assets/img/gallery/content-img-6.jpg"




const Main = () => {
  
  return (
    <>
      <main>
        <section id="home" className="slider-area fix p-relative">
          <h1 style={{display:"flex",justifyContent:"center"}}>Welcome</h1>
          <div className="slide-container">
            <AliceCarousel autoPlay autoPlayInterval="4000">
          <img src={Image1} classname="sliderimg" style={{marginLeft:"36rem"}}/>
          <img src={Image2} classname="sliderimg" style={{marginLeft:"49rem"}}/>
          <img src={Image3} classname="sliderimg"style={{marginLeft:"47rem"}}/>
          <img src={Image4} classname="sliderimg"style={{marginLeft:"43rem"}}/>
          <img src={Image5} classname="sliderimg"style={{marginLeft:"45rem"}}/>
          </AliceCarousel>
          </div>
        </section>

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
        {/* <Gallery /> */}

        {/* <Testimonial /> */}
      </main>
    </>
  );
};

export default Main;
