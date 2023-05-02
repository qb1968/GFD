import { Link } from "react-router-dom";
import React from "react";
import BGImg from "../../assets/img/bg/footer-bg.png";
import Img1 from "../../assets/img/logo/logo (3).png";
import Img2 from "../../assets/img/icon/ft-icon01.png";
import Footer from "../../assets/img/icon/ft-icon02.png";
import Footer1 from "../../assets/img/icon/ft-icon03.png";
import { faClock } from "@fortawesome/react-fontawesome";

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
                    <p>
                      Dr. Cynthia Sclater is a dental care professional
                      dedicated to providing patients with painless and gentle
                      cosmetic, family and general dentistry. Located in
                      Dunkirk, Maryland the office serves Calvert County,
                      Southern Anne Arundel County and neighboring cities such
                      as Huntingtown, Owings, Sunderland, North Beach,
                      Chesapeake Beach, Prince Frederick, Lothian, Harwood,
                      Friendship, Tracys Landing, Deale, Churchton, West River
                      and Shady Side.
                    </p>
                    <div className="f-contact">
                      <ul>
                        <li>
                          <div className="contact-box">
                            <div className="icon">
                              <faClock/>
                            </div>
                            <div className="text">
                              <strong>Monday - Saturday:</strong>
                              <p>9:00am - 10:00pm</p>
                              <strong>Monday - Saturday:</strong>
                              <p>9:00am - 10:00pm</p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
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
