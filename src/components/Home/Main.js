
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
import Video from "../../assets/img/bg/new.mp4";




const Main = () => {
  
  return (
    <>
      <main>
        <div>
          <VideoPlayer
            src={Video}
            
            autoPlay={true}
            muted={true}
            playsInLing={true}
            style={{
              height: "85vh",
              width: "85%",
              marginLeft: "8rem",
              marginTop: "5rem",
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
       
        <div className="container" style={{ marginTop: "48rem" }}>
          <Gallery  />
        </div>

        {/* <Testimonial /> */}
      </main>
    </>
  );
};

export default Main;
