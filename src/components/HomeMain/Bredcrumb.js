import { Link } from "react-router-dom";
import React from "react";
import BGIMG from "../../assets/img/bg/cover1.jpg";

const Bredcrumb = ({ title, subtitle }) => {
  return (
    <>
      <section
        className="breadcrumb-area d-flex align-items-center"
        style={{ backgroundImage: `url(${BGIMG})` }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-12 col-lg-12">
              <div className="breadcrumb-wrap text-left">
                <div className="breadcrumb-title">
                 
                  <div className="breadcrumb-wrap">
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                       
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Bredcrumb;
