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
       
      >
       
         
          
       

        {/* <div className="col-xl-12 col-lg-8 col-sm-6">
          <div className="row justify-content-evenly">
            <img src={ADA} style={{ height: 100, width: 100 }} />
            <img src={AAFE} style={{ height: 100, width: 100 }} />
            <img src={AGD} style={{ height: 100, width: 100 }} />
            <img src={MSDA} style={{ height: 100, width: 100 }} />
            <img src={Botox} style={{ height: 100, width: 100 }} />
          </div>
        </div> */}

        <div className="row align-items-center copyright-wrap" >
          <div className="col-lg-6">
            <div className="copy-text">
              Copyright &copy; 2023 <Link to="#" style={{color:"black"}}>Jonathan Mark Allison</Link>.
              All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Main;
