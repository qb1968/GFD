import React from "react";
import { Link } from "react-router-dom";
import Bredcrumb from "../../HomeMain/Bredcrumb";
import Img1 from "../../../assets/img/team/content-img-2.jpg";
import Img2 from "../../../assets/img/team/dr2.jpg";
import Img3 from "../../../assets/img/team/melissa.jpg";
import Img4 from "../../../assets/img/team/samantha.jpg";
import Img5 from "../../../assets/img/team/sarah.jpg";
import Img6 from "../../../assets/img/team/hunter.jpg";
import Img7 from "../../../assets/img/team/melinda.jpg";
import Img8 from "../../../assets/img/team/kacie.jpg";
import Img9 from "../../../assets/img/team/Emily.jpg";
import Img10 from "../../../assets/img/team/Barbara.jpg";
import Img11 from "../../../assets/img/team/Sandi.jpg";
import Img12 from "../../../assets/img/team/jessica.jpg";
import Img13 from "../../../assets/img/team/Ashley.jpg";
import Img14 from "../../../assets/img/team/christina.jpg";

const Main = () => {
  return (
    <>
      <Bredcrumb title="Team" subtitle="Team" />

      <section className="team-area fix p-relative pt-120 pb-90">
        <div className="container">
          <h2>Meet The Doctors</h2>
          <div className="row">
            <div className="col-xl-3">
              <div className="single-team mb-45">
                <div className="team-thumb">
                  <div className="brd">
                    <img src={Img1} alt="img" />
                  </div>
                </div>
                <div className="team-info">
                  <h4>
                    <Link to="/team-details">Cynthia Sclater, D.M.D.</Link>
                  </h4>
                  <p>General & Cosmetic Dentist, Owner</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="single-team mb-45">
                <div className="team-thumb">
                  <div className="brd">
                    <img src={Img2} alt="img" />
                  </div>
                </div>
                <div className="team-info">
                  <h4>
                    <Link to="/team-details2">Anna Meyssami, D.D.S.</Link>
                  </h4>
                  <p>General & Cosmetic Dentist</p>
                </div>
              </div>
            </div>
            {/* <div className="col-xl-3">
              <div className="single-team mb-45">
                <div className="team-thumb">
                  <div className="brd">
                    <img src={Img3} alt="img" />
                  </div>
                </div>
                <div className="team-info">
                  <h4>
                    <Link to="/team-details3">Melissa Cortes</Link>
                  </h4>
                  <p>Office Manager</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="single-team mb-45">
                <div className="team-thumb">
                  <div className="brd">
                    <img src={Img4} alt="img" />
                  </div>
                </div>
                <div className="team-info">
                  <h4>
                    <Link to="/team-details4">Samantha</Link>
                  </h4>
                  <p>Financial Coordinator</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="single-team mb-45">
                <div className="team-thumb">
                  <div className="brd">
                    <img
                      src={Img5}
                      alt="img"
                      style={{ width: 264, height: 280 }}
                    />
                  </div>
                </div>
                <div className="team-info">
                  <h4>
                    <Link to="/team-details5">Sarah</Link>
                  </h4>
                  <p>Treatment Coordinator</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="single-team mb-45">
                <div className="team-thumb">
                  <div className="brd">
                    <img
                      src={Img6}
                      alt="img"
                      style={{ width: 264, height: 280 }}
                    />
                  </div>
                </div>
                <div className="team-info">
                  <h4>
                    <Link to="/team-details6">Hunter</Link>
                  </h4>
                  <p>Hygiene Coordinator</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="single-team mb-45">
                <div className="team-thumb">
                  <div className="brd">
                    <img
                      src={Img7}
                      alt="img"
                      style={{ width: 264, height: 280 }}
                    />
                  </div>
                </div>
                <div className="team-info">
                  <h4>
                    <Link to="/team-details7">Melinda</Link>
                  </h4>
                  <p>Media Worker</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="single-team mb-45">
                <div className="team-thumb">
                  <div className="brd">
                    <img
                      src={Img8}
                      alt="img"
                      style={{ width: 264, height: 280 }}
                    />
                  </div>
                </div>
                <div className="team-info">
                  <h4>
                    <Link to="/team-details8">Kacie</Link>
                  </h4>
                  <p>Certified Dental Assistant</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="single-team mb-45">
                <div className="team-thumb">
                  <div className="brd">
                    <img
                      src={Img9}
                      alt="img"
                      style={{ width: 264, height: 280 }}
                    />
                  </div>
                </div>
                <div className="team-info">
                  <h4>
                    <Link to="/team-details9">Emily</Link>
                  </h4>
                  <p>Dental Assistant</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="single-team mb-45">
                <div className="team-thumb">
                  <div className="brd">
                    <img
                      src={Img10}
                      alt="img"
                      style={{ width: 264, height: 280 }}
                    />
                  </div>
                </div>
                <div className="team-info">
                  <h4>
                    <Link to="/team-details10">Barbara</Link>
                  </h4>
                  <p>Registered Dental Hygienist</p>
                  <p>Joined GFD in 1979</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="single-team mb-45">
                <div className="team-thumb">
                  <div className="brd">
                    <img
                      src={Img11}
                      alt="img"
                      style={{ width: 264, height: 280 }}
                    />
                  </div>
                </div>
                <div className="team-info">
                  <h4>
                    <Link to="/team-details11">Sandi</Link>
                  </h4>
                  <p>Registered Dental Hygienist</p>
                  <p>Joined GFD in 2004</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="single-team mb-45">
                <div className="team-thumb">
                  <div className="brd">
                    <img
                      src={Img12}
                      alt="img"
                      style={{ width: 264, height: 280 }}
                    />
                  </div>
                </div>
                <div className="team-info">
                  <h4>
                    <Link to="/team-details12">Jessica</Link>
                  </h4>
                  <p>Registered Dental Hygienist</p>
                  <p>Joined GFD in 2009</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="single-team mb-45">
                <div className="team-thumb">
                  <div className="brd">
                    <img
                      src={Img13}
                      alt="img"
                      style={{ width: 264, height: 280 }}
                    />
                  </div>
                </div>
                <div className="team-info">
                  <h4>
                    <Link to="/team-details13">Ashley</Link>
                  </h4>
                  <p>Registered Dental Hygienist</p>
                  <p>Joined GFD in 2018</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="single-team mb-45">
                <div className="team-thumb">
                  <div className="brd">
                    <img
                      src={Img14}
                      alt="img"
                      style={{ width: 264, height: 280 }}
                    />
                  </div>
                </div>
                <div className="team-info">
                  <h4>
                    <Link to="/team-details14">Christina</Link>
                  </h4>
                  <p>Registered Dental Hygienist</p>
                  <p>Joined GFD in 2020</p>
                </div>
              </div> 
            </div>*/}
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
