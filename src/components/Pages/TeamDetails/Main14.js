import React from "react";
import Bredcrumb from "../../HomeMain/Bredcrumb";
import Img1 from "../../../assets/img/team/christina.jpg";

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
                    Christina is a bundle of energy and has slipped into the GFD
                    Team seamlessly. Christina is bubbly and known for her
                    extreme attention to detail. She has the ability to put the
                    most anxious patients at ease and she has been a hygienist
                    for 10 years. She has practiced in MD, TX and NM, and she
                    said Little Rock, AR was a fabulous place to live when her
                    husband was in the military. She grew up in Baltimore
                    County, and after traveling with her family around the US,
                    they landed in Southern MD because of her husband's job…and
                    they love the military community in Calvert!
                  </p>
                  <p>
                    Health and fitness are very important to Christina…she’s
                    been leading driveway workouts for her neighbors during the
                    pandemic. Christina loves teaching Sunday school at her
                    church, ran two half-marathons in 2012 and is obsessed with
                    Hint of Lime tortilla chips!
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
                    FUN FACT: “I love to sing! I had professional voice training
                    and sang in a girl’s group.”
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
