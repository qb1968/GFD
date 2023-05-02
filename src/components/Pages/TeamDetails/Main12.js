import React from "react";
import Bredcrumb from "../../HomeMain/Bredcrumb";
import Img1 from "../../../assets/img/team/jessica.jpg";

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
                    Jessica is one of our amazing Dental Hygienists. She is a
                    natural teacher and has a knack with children. Jessica has
                    her laser, nitrous and anesthesia certification. She has a
                    passion for oral health. She will put you at ease before you
                    even sit in her chair, and will educate you as she makes
                    your smile look and feel more beautiful. Jessica's motto is,
                    "If the eyes are the windows to the soul, the mouth is the
                    door to the body" and uses this to emphasize her
                    oral-systemic health philosophy.
                  </p>
                  <p>
                    Jessica is a proud mother to her son who is a senior in high
                    school. When she is not at work, you will often find her
                    working on home improvement projects and taking her dogs for
                    a walk. She carves out time for herself by enjoying a
                    healthy lifestyle that is filled with fitness and
                    fu...including rock climbing and scuba diving! She loves to
                    make bone broth and shop local when she can for ingredients
                    to make delicious meals. She also finds the time to
                    volunteer for Mission of Mercy and had a blast at the United
                    Way Day of Caring in 2019.
                  </p>
                  {/* <p>
                    Melissa adores her husband and three children…she can’t get
                    enough of them! When Melissa isn’t in the office, this
                    easy-going crafter tends to her 22’ x 22’ fruit and veggie
                    garden…and you can also find Melissa savoring a cup of
                    coffee and admiring her flower beds on the weekends.
                  </p>
                  <p>
                    Melissa has a Puerto Rican and Italian background, and she
                    loves to cook empanadas, arroz con gandules and lasagna…we
                    can’t wait for the next office pot luck!
                  </p> */}

                  <p>
                    FUN FACT: "I believe everyone should skip and touch their
                    toes every day...and I sing in the shower!"
                    <br></br>
                    {/* <a> sam@dunkirkdental.com</a> */}
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
