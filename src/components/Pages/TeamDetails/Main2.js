import React from "react";
import Bredcrumb from "../../HomeMain/Bredcrumb";
import Img1 from "../../../assets/img/team/dr2.jpg";

const Main = () => {
  return (
    <>
      <Bredcrumb title="Team Details" subtitle="Team Details" />

      <section className="team-area-content">
        <div className="container">
          <div className="lower-content">
            <div className="row">
              <div className="col-lg-3 col-md-12 col-sm-12 text-center">
                <div className="team-img-box">
                  <img src={Img1} alt="img" />
                </div>
              </div>
              <div className="text-column col-lg-9 col-md-12 col-sm-12">
                <div
                  className="s-about-content pl-30 wow fadeInRight"
                  data-animation="fadeInRight"
                  data-delay=".2s"
                >
                  <p>
                    Anna Meyssami, D.D.S. is a Maryland native and a graduate of
                    the University of Maryland School of Dentistry. She is very
                    excited to be a part of the GFD team. Dr. Meyssami
                    (MAY-SAMMY) has a passion for helping her patients achieve
                    their healthiest and brightest smile through a
                    patient-centered approach…she said this is what drew her to
                    Calvert County and GFD’s kind and caring dental family.
                  </p>
                  <p>
                    Dr. Meyssami demonstrates her caring personality with a
                    gentle touch and attention to detail. She has a knack for
                    art, which helps her navigate the artistic aspects of
                    dentistry with an attentive eye and steady hand. Dr.
                    Meyssami was in the prestigious Gorgas Odontological
                    Honorary Society at the University of Maryland School of
                    Dentistry and earned the Dean’s Research Award for her
                    commitment to dental research throughout school.
                  </p>
                  <p>
                    Dr. Meyssami was born and raised in Maryland and loves every
                    part of the Maryland lifestyle. “Growing up, I loved the
                    little family trips we made over to the Chesapeake Bay,
                    finding shark teeth on the beaches and exploring the local
                    shops and restaurants. It seems fitting that I’ve ended up
                    working just a fifteen minutes’ drive from the Bay!”
                  </p>
                  <p>
                    When Dr. Meyssami isn’t working, she usually spends time
                    with family and friends, writing, or reading a book. She is
                    the published author of a children’s fantasy book and she is
                    currently writing a second book. Dr. Meyssami has been
                    writing fiction as a hobby since grade school and her
                    children’s book has earned several awards. Whenever she can
                    get her hands on new arts and crafts materials, she is in
                    her happy place. Dr. Meyssami likes to dabble in different
                    forms of art, like sculpting, woodburning, and painting.
                    When the weather’s nice, you’ll find her doing any of the
                    above outdoors, since she loves getting out and about in
                    nature.
                  </p>
                  <p>
                    Dr. Meyssami supports Mission of Mercy, Doctors Without
                    Borders and Habitat for Humanity…and coffee and pizza made
                    the top of her “Favorite Things” list.
                  </p>

                  <p>
                    FUN FACT: “I have a folder in my phone with pictures and
                    videos of adorable dogs that I’ve taken over the years and
                    like to revisit every so often.”
                    <br></br>
                    FUN FACT: “I play the ukulele.”
                    <br></br>
                    FUN FACT: “One of my favorite simple pleasures is crossing
                    things off my to-do list.”
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

export default Main;
