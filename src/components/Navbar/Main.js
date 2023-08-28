import { Link } from "react-router-dom";
import React, { useState } from "react";
import Img1 from "../../assets/img/bg/logo (3).png"
import Logo from "../../assets/img/logo/logo (3).png"
import VideoPlayer from "react-background-video-player";
import Video from "../../assets/img/bg/new.mp4"
import Gallery from "../HomeMain/Gallery";




const Main = () => {
  const [mobile, setmobile] = useState(false);
  const [show, setshow] = useState(false);
  const [show1, setshow1] = useState(false);
  const [show2, setshow2] = useState(false);
  const [show3, setshow3] = useState(false);

  return (
    <>
      <header className="header-area">
        <div id="header-sticky" className="menu-area">
          <div className="container">
            <div className="second-menu">
              <div className="row align-items-center">
                <div className="col-xl-2 col-lg-2"></div>
                <div className="col-xl-7 col-lg-7">
                  <div className="main-menu text-center text-xl-right">
                    <nav id="mobile-menu">
                      <ul>
                        <li className="has-sub">
                          <Link to="/">Home</Link>
                        </li>
                        <li className="has-sub">
                          <Link to="/about">About Us</Link>
                          <ul>
                            <li>
                              <Link to="/team2">Meet The Doctors</Link>
                            </li>
                            <li>
                              <Link to="/team">Team</Link>
                            </li>
                          </ul>
                        </li>

                        <li className="has-sub">
                          <Link to="#">Resources</Link>
                          <ul>
                            <li className="has-sub">
                              <Link to="/">Smile Gallery</Link>
                              <ul>
                                <li>
                                  <Link to="/">Cosmetic Dentistry</Link>
                                </li>
                                <li>
                                  <Link to="/">Restorations</Link>
                                </li>
                                <li>
                                  <Link to="/">Orthodontics</Link>
                                </li>
                                <li>
                                  <Link to="/">Cosmetic Procedures</Link>
                                </li>
                              </ul>
                            </li>

                            <li>
                              <Link to="/">Faqs</Link>
                            </li>
                            <li>
                              <Link to="/">Links</Link>
                            </li>
                          </ul>
                        </li>
                        <li className="has-sub">
                          <Link to="/">Services</Link>
                          <ul>
                            <li className="has-sub">
                              <Link to="/">
                                Botox as an Alternative Treatment for TMD
                              </Link>
                              <ul>
                                <li>
                                  <Link to="">Benefits of Boxtox for TMJ</Link>
                                </li>
                              </ul>
                            </li>
                            <li className="has-sub">
                              <Link to="/">Cosmetic Dentistry</Link>
                              <ul>
                                <li>
                                  <Link to="">Opalescence Teeth Whitening</Link>
                                </li>
                                <li>
                                  <Link to="">Juvaderm</Link>
                                </li>
                                <li>
                                  <Link to="">CEREC</Link>
                                </li>
                                <li>
                                  <Link to="">Porcelain Veneers</Link>
                                </li>
                              </ul>
                            </li>
                            <li className="has-sub">
                              <Link to="">Dental Anxiety and Fear</Link>
                              <ul>
                                <li>
                                  <Link to="">
                                    How to Reduce Dental Anxiety
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li className="has-sub">
                              <Link to="">Laser Dentistry</Link>
                              <ul>
                                <li>
                                  <Link to="">Laser Bacterial Reduction</Link>
                                </li>
                                <li>
                                  <Link to="">
                                    BIOLASE Waterlase Technology
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li className="has-sub">
                              <Link to="">Restorations</Link>
                              <ul>
                                <li>
                                  <Link to="">Dental Implants</Link>
                                </li>
                                <li>
                                  <Link to="">Composite Fillings</Link>
                                </li>
                                <li>
                                  <Link to="">Crowns(Caps)</Link>
                                </li>
                                <li>
                                  <Link to="">Dentures & Partial Dentures</Link>
                                </li>
                                <li>
                                  <Link to="">Fixed Bridges</Link>
                                </li>
                                <li>
                                  <Link to="">Root Canal Therapy</Link>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="/billing">Billing and Insurance</Link>
                        </li>
                        <li>
                          <Link to="/contact">Contact</Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>

                <div className="col-12">
                  <div className="mobile-menu mean-container">
                    <div className="mean-bar">
                      <Link
                        to="#nav"
                        className={`meanmenu-reveal ${mobile && "meanclose"}`}
                        onClick={() =>
                          setmobile(mobile === true ? false : true)
                        }
                        style={{
                          right: "0",
                          left: "auto",
                          textAlign: "center",
                          textIndent: "0px",
                          fontSize: "18px",
                        }}
                      >
                        {mobile ? (
                          "X"
                        ) : (
                          <>
                            <span>
                              <span>
                                <span></span>
                              </span>
                            </span>
                          </>
                        )}
                      </Link>
                      <nav className="mean-nav">
                        {mobile && (
                          <ul style={{ display: mobile ? "block" : "none" }}>
                            <li className="has-sub">
                              <Link to="/">Home</Link>
                              <ul style={{ display: show ? "block" : "none" }}>
                                <li>
                                  <Link to="/">Home Page 01</Link>
                                </li>
                                <li>
                                  <Link to="/home-two">Home Page 02</Link>
                                </li>
                                <li>
                                  <Link to="/home-three">Home Page 03</Link>
                                </li>
                              </ul>
                              <Link
                                to="#"
                                className={`mean-expand ${
                                  show && "mean-clicked"
                                }`}
                                onClick={() =>
                                  setshow(show === true ? false : true)
                                }
                                style={{ fontSize: "18px" }}
                              >
                                +
                              </Link>
                            </li>
                            <li>
                              <Link to="/about/">About Us</Link>
                            </li>

                            <li className="has-sub">
                              <Link to="/service">Services</Link>
                              <ul style={{ display: show1 ? "block" : "none" }}>
                                <li>
                                  <Link to="/service-details"> Facials</Link>
                                </li>
                                <li>
                                  <Link to="/service-details">
                                    Body Treatments
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/service-details">
                                    {" "}
                                    Mineral Baths
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/service-details">Waxing</Link>
                                </li>
                                <li>
                                  <Link to="/service-details">Massage</Link>
                                </li>
                                <li>
                                  <Link to="/service-details">
                                    Geothermal Spa
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/service">Services</Link>
                                </li>
                              </ul>
                              <Link
                                to="#"
                                className={`mean-expand ${
                                  show1 && "mean-clicked"
                                }`}
                                onClick={() =>
                                  setshow1(show1 === true ? false : true)
                                }
                                style={{ fontSize: "18px" }}
                              >
                                +
                              </Link>
                            </li>
                            <li className="has-sub">
                              <Link to="#">Pages</Link>
                              <ul style={{ display: show2 ? "block" : "none" }}>
                                <li>
                                  <Link to="/gallery">Gallery</Link>
                                </li>

                                <li>
                                  <Link to="/pricing">Pricing</Link>
                                </li>
                                <li>
                                  <Link to="/faq">Faq</Link>
                                </li>
                                <li>
                                  <Link to="/team">Team</Link>
                                </li>
                                <li>
                                  <Link to="/team-details">Team Details</Link>
                                </li>
                                <li>
                                  <Link to="/shop">Shop</Link>
                                </li>
                                <li>
                                  <Link to="/shop-details">Shop Details</Link>
                                </li>
                              </ul>
                              <Link
                                to="#"
                                className={`mean-expand ${
                                  show2 && "mean-clicked"
                                }`}
                                onClick={() =>
                                  setshow2(show2 === true ? false : true)
                                }
                                style={{ fontSize: "18px" }}
                              >
                                +
                              </Link>
                            </li>
                            <li className="has-sub">
                              <Link to="/blog">Blog</Link>
                              <ul style={{ display: show3 ? "block" : "none" }}>
                                <li>
                                  <Link to="/blog">Blog</Link>
                                </li>
                                <li>
                                  <Link to="/blog-details">Blog Details</Link>
                                </li>
                              </ul>
                              <Link
                                to="#"
                                className={`mean-expand ${
                                  show3 && "mean-clicked"
                                }`}
                                onClick={() =>
                                  setshow3(show3 === true ? false : true)
                                }
                                style={{ fontSize: "18px" }}
                              >
                                +
                              </Link>
                            </li>
                            <li className="mean-last">
                              <Link to="/contact">Contact</Link>
                            </li>
                          </ul>
                        )}
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </header>
    </>
  );
};

export default Main;
