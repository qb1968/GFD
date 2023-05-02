import React from "react";
import Bredcrumb from "../../HomeMain/Bredcrumb";
import Img1 from "../../../assets/img/team/melissa.jpg";

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
                    Melissa came to us from New Jersey by way of her military
                    husband. And you know we just love a military family at
                    GFD…so Melissa is fitting right in!
                  </p>
                  <p>
                    Melissa loves the challenge of managing a team…her knack for
                    organization and her ability to thrive under pressure help
                    her navigate the waters at GFD. Melissa worked for many
                    years at a specialist’s office, and most recently at a
                    multi-specialty practice. Melissa is excited to bring her
                    skill set to GFD, and she loves the people you get to meet
                    in the dental field. She began her career in the medical
                    field as a medical assistant, but found dentistry is where
                    her passion lies, and has developed that passion into a
                    career.
                  </p>
                  <p>
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
                  </p>
                 

                  <p>
                    Fun Fact: “I am all about a creative DIY project!"
                                      <br></br>
                    
                                      <a> manager@dunkirkdental.com</a>
                                     
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
