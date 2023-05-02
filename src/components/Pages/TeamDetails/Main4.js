import React from "react";
import Bredcrumb from "../../HomeMain/Bredcrumb";
import Img1 from "../../../assets/img/team/samantha.jpg";

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
                    Sam, as she's known around the office, is Gentle Family
                    Dentistry's Financial Coordinator. She has been in the
                    dental industry for 20 years. Sam is a wonderful patient
                    advocate who strives to help a patient understand their
                    benefits. She is happy to submit claims to reap the maximum
                    benefit from your plan. Sam takes pride in being a
                    problem-solver, and will answer questions for a patient at
                    any time. Her knowledge of benefits is extensive, and she is
                    a true asset to the practice.
                  </p>
                  <p>
                    Sam first came to Maryland when her spouse, who was then in
                    the military, transferred to Maryland. Sam grew up in South
                    Jersey, but she and her husband have come to love the
                    Maryland lifestyle and decided to stay. And it really helps
                    that there is a Jersey Mikes in Dunkirk now...it's like a
                    little taste of home! Sam is always active. When not in the
                    office, you will find Sam hiking, sewing, playing Xbox, or
                    working on the latest home project with her husband. She
                    loves rustic vacations that include hiking, mountains and
                    pine trees...Colorado is a favorite travel destination of
                    hers, but her trip to Banff takes the cake for her! And Sam
                    recently had a baby...a beautiful boy! She'll have the
                    mom/work balance down to a science in no time!
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
                    FUN FACT: "I am a music lover...I've played 5 different
                    instruments...2 of which were self-taught. I have been to
                    tons and tons of concerts, and I have downloaded roughly
                    20,000 songs."
                    <br></br>
                    <a> sam@dunkirkdental.com</a>
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
