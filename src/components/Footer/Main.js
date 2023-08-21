import { Link } from "react-router-dom";
import React from "react";
import BGImg from "../../assets/img/bg/footer-bg.png";
import Img1 from "../../assets/img/logo/logo (3).png";
import Img2 from "../../assets/img/icon/ft-icon01.png";
import Footer from "../../assets/img/icon/ft-icon02.png";
import Footer1 from "../../assets/img/icon/ft-icon03.png";
import { faClock } from "@fortawesome/react-fontawesome";
import ADA from "../../assets/img/brand/ada.png"
import AAFE from "../../assets/img/brand/aafe.png"
import AGD from "../../assets/img/brand/agd.png"
import MSDA from "../../assets/img/brand/msda.png"
import Botox from "../../assets/img/brand/botox.png"

const Main = () => {
  return (
    <>
      <footer
        className="footer-bg footer-p pt-90"
        style={{ backgroundColor: "#71A28A", }}
      >
        <div className="footer-top">
          <div className="container" >
            <div className="row justify-content-between">
              <div className="col-xl-4 col-lg-4 col-sm-6">
                <div className="footer-widget mb-30">
                  <div className="f-widget-title mb-40">
                    <img src={Img1} alt="logo" />
                  </div>
                  <div className="footer-link">
                   
                    <div className="f-contact">
                      <ul>
                        <li>
                          <div className="contact-box">
                            <div className="icon">
                              <faClock/>
                            </div>
                            <div className="text">
                              <strong>Monday - Wednesday:</strong>
                              <p>8:00am - 7:00pm</p>
                              <strong>Thursday:</strong>
                              <p>8:00am - 1:00pm</p>
                              <strong>Friday:</strong>
                              <p>Closed</p>
                            </div>
                            
                          </div>
                          
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-8 col-lg-8 col-sm-6" >
                <div className="row justify-content-between">
                 <img src={ADA} style={{height:150,width:150}}/>
                 <img src={AAFE} style={{height:150,width:150}}/>
                 <img src={AGD} style={{height:150,width:150}}/>
                 <img src={MSDA} style={{height:150,width:150}}/>
                 <img src={Botox} style={{height:150,width:150}}/>
                 </div>
              </div>
            
              
              
            </div>
            <div className="row align-items-center copyright-wrap">
              <div className="col-lg-6">
                <div className="copy-text">
                  Copyright &copy; 2022 <Link to="#">Jonathan Mark Allison</Link>. All rights
                  reserved.
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Main;
