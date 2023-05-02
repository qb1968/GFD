import React from "react";
import Bredcrumb from "../../HomeMain/Bredcrumb";
import Img1 from "../../../assets/img/team/Sandi.jpg";

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
                    Sandi is a Dental Hygienist with Gentle Family Dentistry and
                    earned an A.A.S. degree. She has been with our practice
                    since 2004 and has been in the dental industry for 38 years.
                    Sandi is a truly gentle hygienist. She feels that gaining
                    the trust of a patient is one of the most important aspects
                    of her job. She takes great satisfaction in restoring a
                    mouth to total health and seeing how it impacts the lives of
                    her patients. Sandi is laser and anesthesia certified.
                  </p>
                  <p>
                    Sandi originally hailed from the Hudson Valley in NY. She
                    has lived in Maryland for the past 30 years. Sandi is very
                    active in her church, and she loves to spend time with her
                    family. Sandi likes to spend her free time attending plays
                    or working on puzzles. She also likes to squeeze in a little
                    girl-time with her friends when she gets the chance. Sandi
                    was a part of the dental team that volunteered for Mission
                    of Mercy in 2012 and 2014, and is a supporter of The Autism
                    Project.
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
                    FUN FACT: "I love spending time at church with the seniors -
                    they have such great stories!"
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
