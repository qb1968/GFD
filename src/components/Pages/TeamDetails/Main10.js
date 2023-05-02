import React from "react";
import Bredcrumb from "../../HomeMain/Bredcrumb";
import Img1 from "../../../assets/img/team/Barbara.jpg";

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
                    Barb is a Registered Dental Hygienist who has been
                    practicing her craft for 40 years! She has been with the
                    practice since 1979, and has been with Dr. Sclater since
                    2008. Barb's favorite part about being a Dental Hygienist is
                    getting to see a patient make a complete turnaround towards
                    excellent dental health with a little education and regular
                    dental care. Barb has a knack for great sealants on teeth,
                    and believes they are an important part of optimizing the
                    benefits of regular visits to the dentist. Barb is Laser
                    Certified.
                  </p>
                  <p>
                    Barb moved to Calvert County in 1979 and she's never looked
                    back. She raised her family in Calvert County, and is lucky
                    to still have all her grown children living close by. When
                    not in the office, Barb spends as much time as possible with
                    her grandchildren...which keeps her very busy! Barb really
                    values the connection she has with her patients, and being a
                    part of this community is very important to her. And she
                    loves to row with the GFD team when we do the End Hunger
                    Dragon Boat races. But being a grandmother is her absolute
                    favorite thing!
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
                    FUN FACT: "I am a life-saver! I saved 4 people back in my
                    lifeguard days. And I never wore a stitch of sunscreen back
                    then...except zinc on my nose. Now I won't leave the house
                    without sunscreen."
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
