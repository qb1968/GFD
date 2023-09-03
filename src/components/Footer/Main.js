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
        className="footer-bg footer-p "
        style={{ backgroundColor: "#71A28A" }}
      >
       
          <div className="container">
            

              <div className="col-lg-12 col-md-4 d-none d-lg-block text-center">
                <div className="header-social">
                  <li>
                    <i
                      className="icon fa fa-envelope"
                      style={{ color: "black" }}
                    ></i>
                    <span style={{ color: "black" }}>
                      office@dunkirkdental.com{" "}
                    </span>
                  </li>
                  <li>
                    <i
                      className="icon fa fa-phone"
                      style={{ color: "black" }}
                    ></i>
                    <span style={{ color: "black" }}>410-257-2424</span>
                  </li>
                  <span>
                    <a
                      href="https://www.facebook.com/"
                      title="Facebook"
                      style={{ color: "black" }}
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/"
                      title="Instagram"
                      style={{ color: "black" }}
                    >
                      <i
                        className="fab fa-instagram"
                        style={{ color: "black" }}
                      ></i>
                    </a>
                    <a href="https://twitter.com" title="Twitter">
                      <i
                        className="fab fa-twitter"
                        style={{ color: "black" }}
                      ></i>
                    </a>
                    <a
                      href="https://www.youtube.com/"
                      title="Youtube"
                      style={{ color: "black" }}
                    >
                      <i className="fab fa-youtube"></i>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          
       

        {/* <div className="col-xl-12 col-lg-8 col-sm-6">
          <div className="row justify-content-evenly">
            <img src={ADA} style={{ height: 100, width: 100 }} />
            <img src={AAFE} style={{ height: 100, width: 100 }} />
            <img src={AGD} style={{ height: 100, width: 100 }} />
            <img src={MSDA} style={{ height: 100, width: 100 }} />
            <img src={Botox} style={{ height: 100, width: 100 }} />
          </div>
        </div> */}

        <div className="row align-items-center copyright-wrap">
          <div className="col-lg-6">
            <div className="copy-text">
              Copyright &copy; 2023 <Link to="#" style={{color:"white"}}>Jonathan Mark Allison</Link>.
              All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Main;
