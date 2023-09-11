import React from "react";
import BGImg1 from "../../assets/img/bg/marble.jpg";
import { Link } from "react-router-dom";
import Img from "../../assets/img/gallery/cindy.jpg";

const About = () => {
  return (
    <>
      <section
        className="about-area about-p pt-120 pb-120 p-relative fix"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${BGImg1})`,
        }}
      >
        <div className="container">
          <div className="row justify-content-center ">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <img src={Img} alt="img" style={{ height: 500 }} />
              <div
                className="s-about-img p-relative  wow fadeInLeft animated"
                data-animation="fadeInLeft"
                data-delay=".4s"
              ></div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div
                className="about-content s-about-content  wow fadeInRight  animated"
                data-animation="fadeInRight"
                data-delay=".4s"
              >
                <div className="about-title second-title pb-25">
                  <h2 style={{ color: "black" }}>About Us </h2>
                </div>
                <p style={{ fontWeight: "600", color: "black" }}>
                  We are a dental practice devoted to restoring and enhancing
                  the natural beauty of your smile using conservative,
                  state-of-the-art procedures that will result in a beautiful,
                  long-lasting smile!
                  <br></br>
                </p>
                <div>
                  <p style={{ textAlign: "left" }}>
                    <strong>
                      <span style={{ color: "black" }}>
                        Our Mission Statement...
                      </span>
                    </strong>
                  </p>
                  <p style={{ fontWeight: "600", color: "black" }}>
                    To provide superior dental care in an inviting and
                    comfortable environment, while creating lasting
                    relationships.
                  </p>
                  <p>
                    <strong>
                      <span>
                        <span style={{ color: "black" }}>
                          I
                          <span style={{ color: "black" }}>
                            n a World of Tech
                            <strong style={{ color: "black" }}>
                              nology...
                            </strong>
                          </span>
                        </span>
                      </span>
                    </strong>
                  </p>
                  <p style={{ fontWeight: "600", color: "black" }}>
                    We are proud to offer the latest dental technology in our
                    Dunkirk, MD office. We are one of
                  </p>
                  <p style={{ fontWeight: "600", color: "black" }}>
                    the only dental practices in Calvert County to offer CEREC
                    technology. We offer low radiation 3D Cone Beam Imaging to
                    gain the clearest and most accurate digital images to assist
                    us in diagnosing our patients. Gentle Family Dentistry also
                    utilizes laser family dentistry and laser periodontal
                    therapies. Our CEREC technology helps us create beautiful
                    cosmetic restorations that are performed in one day. We also
                    offer hybrid implant dentures.
                  </p>
                  <p style={{ textAlign: "left", textAlign: "justify" }}>
                    <strong>
                      <span style={{ color: "black" }}>High Standards</span>
                    </strong>
                  </p>
                  <p style={{ fontWeight: "600", color: "black" }}>
                    A standard of excellence in personalized dental care enables
                    us to provide the quality dental services our patients
                    deserve. We provide comprehensive treatment planning and use
                    restorative and cosmetic dentistry to achieve your optimal
                    dental health. Should a dental emergency occur, we make
                    every effort to see and care for you as soon as possible.
                    But in some instances, we may refer you to the emergency
                    room.
                  </p>
                  <p style={{ textAlign: "left", textAlign: "justify" }}>
                    <strong>
                      <span style={{ color: "black" }}>
                        Education & Prevention
                      </span>
                    </strong>
                  </p>
                  <p style={{ fontWeight: "600", color: "black" }}>
                    A standard of excellence in personalized dental care enables
                    us to provide the quality dental services our patients
                    deserve. We provide comprehensive treatment planning and use
                    restorative and cosmetic dentistry to achieve your optimal
                    dental health. Should a dental emergency occur, we make
                    every effort to see and care for you as soon as possible.
                    But in some instances, we may refer you to the emergency
                    room.
                  </p>
                  <p>
                    <strong>
                      <span style={{ color: "black" }}>
                        Uncompromising Safety
                      </span>
                    </strong>
                  </p>
                  <p style={{ fontWeight: "600", color: "black" }}>
                    Infection control in our office is also very important to
                    us. To protect our patients and ourselves, we strictly
                    maintain sterilization and cross contamination processes
                    using standards recommended by the American Dental
                    Association (ADA), the Occupational Safety and Health
                    Administration (OSHA), and the Center for Disease Control
                    (CDC).
                  </p>
                  <p>
                    <strong>
                      <span style={{ color: "black" }}>
                        Training & Expertise
                      </span>
                    </strong>
                  </p>
                  <p style={{ fontWeight: "600", color: "black" }}>
                    As your dental health professionals, we want you to be
                    confident knowing that we are a team of highly trained and
                    skilled clinicians. We pride ourselves in providing the care
                    you need to keep your smile healthy. To give you the best
                    possible service and results, we are committed to continual
                    education and learning. We attend dental lectures, meetings,
                    and dental conventions to stay informed of new techniques,
                    the latest products, and the newest equipment that a modern
                    dental office can utilize to provide state-of-the-art dental
                    care. Also, being members of various professional dental
                    associations helps us to stay abreast of the changes and
                    recommendations for our profession. Dr. Sclater is trained
                    and certified by the American Academy of Facial Aesthetics
                    and Allergan (the manufacturer of BOTOX® and JUVÉDERM®). In
                    addition, she is a member of the American Academy of
                    Cosmetic Dentistry. Her advanced knowledge of facial anatomy
                    and extensive experience with dental injections make Dr.
                    Sclater a natural choice when you choose a cosmetic
                    dentistry specialist for BOTOX® and JUVÉDERM®. We are
                    honored to serve Dunkirk, MD and surrounding Calvert County
                    and Southern Anne Arundel County.
                  </p>
                  <p>
                    <strong>
                      <span style={{ color: "black" }}>
                        A Positive Experience
                      </span>
                    </strong>
                  </p>
                  <p style={{ fontWeight: "600", color: "black" }}>
                    We thank you for allowing us to take care of your dental
                    needs and look forward to serving you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
