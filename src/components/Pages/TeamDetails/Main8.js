import React from "react";
import Bredcrumb from "../../HomeMain/Bredcrumb";
import Img1 from "../../../assets/img/team/kacie.jpg";

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
                    The sun is shining down on us at GFD because Kacie is back!
                    She left us in 2017 when her military husband had a job
                    transfer to Illinois. But the call of the Chesapeake Bay was
                    too much for them to ignore, and they longed to be back in
                    Calvert County. Long story short…her husband retired from
                    the military, they bought back the EXACT same house they
                    lived in before, her girls are over the moon to be back with
                    their old friends, and she’s back at GFD! Tell us that
                    wasn’t meant to be!
                  </p>
                  <p>
                    Kacie is even back to her old work schedule and fell right
                    back into the travel softball lifestyle with her girls. Life
                    is good for Kacie as she settles into her old routine and
                    gets to enjoy the Chesapeake Bay, Patuxent River and nature
                    trails in Calvert. Plus, she’s a big crab-eater…and there’s
                    nobody that knows crabs like a Marylander (native or
                    transplant). And her North Dakota sweetness is still the
                    best thing about her!
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
                    FUN FACT: "I won the anchor-throwing contest at the boat
                    show in Solomons...I won a 3 foot trophy!"
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
