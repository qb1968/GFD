import { Link } from "react-router-dom";
import React, { useState } from "react";
import BGImg6 from "../../assets/img/bg/gallery-bg.png";
import FsLightbox from "fslightbox-react";
import Img1 from "../../assets/img/gallery/content-img-2.jpg";
import Img2 from "../../assets/img/gallery/content-img-1.jpg";
import Img3 from "../../assets/img/gallery/content-img-3-updated.jpg";
import Img4 from "../../assets/img/gallery/content-img-4.jpg";
import Img5 from "../../assets/img/gallery/content-img-5.jpg";
import Img6 from "../../assets/img/gallery/content-img-6.jpg";
import Img7 from "../../assets/img/gallery/protfolio-img07.png";
import Img8 from "../../assets/img/gallery/protfolio-img08.png";

// const Gallery = () => {
//   const [toggler, setToggler] = useState(false);
//   const [activeImage, setActiveImage] = useState();
//   const [images, setImages] = useState([
//     Img1,
//     Img2,
//     Img3,
//     Img4,
//     Img5,
//     Img6,
//     Img7,
//     Img8,
//   ]);

//   return (
//     <>
//       <section
//         id="work"
//         className="pt-120 pb-110 full-screen-gallary"
//         style={{
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
         
//         }}
//       >
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-12">
//               <div
//                 className="section-title text-center mb-40 wow fadeInDown animated"
//                 data-animation="fadeInDown"
//                 data-delay=".4s"
//               >
//                 <h5>Our Gallery</h5>
//                 <h2>See Our Portfolio</h2>
//               </div>
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-lg-12">
//               <div className="masonry-gallery-huge portfolio ">
//                 <div
//                   className="grid col4"
//                   style={{ position: "relative", height: "762.75px" }}
//                 >
//                   <div
//                     className="grid-item hover-zoomin banking"
//                     style={{ position: "absolute", left: "0%", top: "0px" }}
//                   >
                    
//                       <figure
//                         className="gallery-image"
                       
//                       >
//                         <img src={Img1} alt="img" className="img" />
//                       </figure>
                    
//                   </div>
//                   <div
//                     className="grid-item hover-zoomin financial"
//                     style={{
//                       position: "absolute",
//                       left: "24.9804%",
//                       top: "0px",
//                     }}
//                   >
//                     <Link to="#" className="popup-image">
//                       <figure
//                         className="gallery-image"
//                         onClick={() => {
//                           setToggler(!toggler);
//                           setActiveImage(2);
//                         }}
//                       >
//                         <img src={Img2} alt="img" className="img" />
//                       </figure>
//                     </Link>
//                   </div>
//                   <div
//                     className="grid-item hover-zoomin financial"
//                     style={{
//                       position: "absolute",
//                       left: "49.9607%",
//                       top: "0px",
//                     }}
//                   >
//                     <Link to="#" className="popup-image">
//                       <figure
//                         className="gallery-image"
//                         onClick={() => {
//                           setToggler(!toggler);
//                           setActiveImage(3);
//                         }}
//                       >
//                         <img src={Img3} alt="img" className="img" />
//                       </figure>
//                     </Link>
//                   </div>
//                   <div
//                     className="grid-item hover-zoomin insurance"
//                     style={{
//                       position: "absolute",
//                       left: "74.9411%",
//                       top: "0px",
//                     }}
//                   >
//                     <Link to="#" className="popup-image">
//                       <figure
//                         className="gallery-image"
//                         onClick={() => {
//                           setToggler(!toggler);
//                           setActiveImage(4);
//                         }}
//                       >
//                         <img src={Img4} alt="img" className="img" />
//                       </figure>
//                     </Link>
//                   </div>
//                   <div
//                     className="grid-item hover-zoomin banking insurance"
//                     style={{ position: "absolute", left: "0%", top: "351px" }}
//                   >
//                     <Link to="#" className="popup-image">
//                       <figure
//                         className="gallery-image"
//                         onClick={() => {
//                           setToggler(!toggler);
//                           setActiveImage(5);
//                         }}
//                       >
//                         <img src={Img5} alt="img" className="img" />
//                       </figure>
//                     </Link>
//                   </div>
//                   <div
//                     className="grid-item hover-zoomin financial"
//                     style={{
//                       position: "absolute",
//                       left: "74.9411%",
//                       top: "351px",
//                     }}
//                   >
//                     <Link to="#" className="popup-image">
//                       <figure
//                         className="gallery-image"
//                         onClick={() => {
//                           setToggler(!toggler);
//                           setActiveImage(6);
//                         }}
//                       >
//                         <img src={Img6} alt="img" className="img" />
//                       </figure>
//                     </Link>
//                   </div>
//                   <div
//                     className="grid-item hover-zoomin financial"
//                     style={{
//                       position: "absolute",
//                       left: "49.9607%",
//                       top: "381px",
//                     }}
//                   >
//                     <Link to="#" className="popup-image">
//                       <figure
//                         className="gallery-image"
//                         onClick={() => {
//                           setToggler(!toggler);
//                           setActiveImage(7);
//                         }}
//                       >
//                         <img src={Img7} alt="img" className="img" />
//                       </figure>
//                     </Link>
//                   </div>
//                   <div
//                     className="grid-item hover-zoomin financial"
//                     style={{
//                       position: "absolute",
//                       left: "24.9804%",
//                       top: "441px",
//                     }}
//                   >
//                     <Link to="#" className="popup-image">
//                       <figure
//                         className="gallery-image"
//                         onClick={() => {
//                           setToggler(!toggler);
//                           setActiveImage(8);
//                         }}
//                       >
//                         <img src={Img8} alt="img" className="img" />
//                       </figure>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <FsLightbox toggler={toggler} sources={images} slide={activeImage} />
//     </>
//   );
// };

// export default Gallery;

 const Gallery = () => {
   return (
     <>
       <section
         className="team-area fix p-relative pt-120 pb-90"
         
       >
         <h1
           style={{
             fontSize: "50px",
             fontFamily: "Alex Brush",
             textAlign: "center",
             color: "black",
           }}
         >
           Welcome
         </h1>
         <div className="container">
           <div className="row">
            

             <div className="col-lg-4">
               <figure>
                 <img src={Img4} alt="" />
               </figure>
             </div>
             <div className="col-lg-4">
               <figure>
                 <img src={Img3} alt="" />
               </figure>
             </div>
             <div className="col-lg-4">
               <figure>
                 <img src={Img2} alt="" style={{height:"367px"}} />
               </figure>
             </div>

             <div className="col-lg-4">
               <figure>
                 <img src={Img5} alt="" />
               </figure>
             </div>
            
             <div className="col-lg-4">
               <img src={Img6} alt="" />
             </div>
             
           </div>
         </div>
       </section>
     </>
   );
 };

 export default Gallery;