import React from "react";
import Appointment from "../HomeMain/Appointment";
import { Link } from "react-router-dom";
import Bredcrumb from "../HomeMain/Bredcrumb";

const Main = () => {
  return (
    <>
      <Bredcrumb title="Contact Us" subtitle="Contact Us" />
      <Appointment />

      <div className="map fix" style={{ background: "white" }}>
        <div className="container-flud">
          <div className="row">
            <div className="col-lg-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212867.83634504632!2d-112.24455686962897!3d33.52582710700138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b743829374b03%3A0xabaac255b1e43fbe!2sPlexus%20Worldwide!5e0!3m2!1sen!2sin!4v1618567685329!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: "0" }}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
