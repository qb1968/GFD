import { Link } from 'react-router-dom'
import React from 'react'
import Icon1 from '../../assets/img/features/banner-01.png'
import Icon2 from '../../assets/img/features/banner-02.png'
import Icon3 from '../../assets/img/features/banner-03.png'

const Feature = () => {
    return (
      <>
        <section
          className="feature-area p-relative "
          style={{ backgroundColor: "71A28A" }}
        >
          <div className="container-fluid">
            <div className="row" style={{ backgroundColor: "71A28A" }}>
              <div
                className="col-lg-4 col-md-6 col-sm-12"
                style={{ backgroundColor: "#71A28A" }}
              >
                <div className="feature-box">
                  <div className="text">
                    <h3 style={{ color: "black" }}>Cosmetics</h3>
                    <p style={{ color: "black" }}>
                      Our goal as a cosmetic dentistry practice is to give an
                      overall beautiful smile to our patients.
                    </p>

                    <Link to="/">Start Now</Link>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-sm-12"
                style={{ backgroundColor: "#71A28A" }}
              >
                <div className="feature-box">
                  <div className="text">
                    <h3 style={{ color: "black" }}>Technology</h3>
                    <p style={{ color: "black" }}>
                      We provide our patients with the latest dental technology.
                    </p>

                    <Link to="/">Start Now</Link>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-sm-12"
                style={{ backgroundColor: "#71A28A" }}
              >
                <div
                  className="feature-box"
                  style={{ backgroundColor: "#71A28A" }}
                >
                  <div className="text">
                    <h3 style={{ color: "black" }}>Dental Savings Plan</h3>
                    <p style={{ color: "black" }}>
                      We offer an In-House Dental Savings Plan... <br></br>
                      created with our non-insured patients in mind.
                    </p>

                    <Link to="/">Start Now</Link>
                  </div>
                  <img
                    src={Icon1}
                    alt="icon01"
                    style={{ backgroundColor: "#71a28a" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}

export default Feature