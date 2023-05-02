import React from "react";
import Bredcrumb from "../../HomeMain/Bredcrumb";
import Img1 from "../../../assets/img/team/hunter.jpg";

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
                    Hunter is our amazing Hygiene Coordinator! He has worked in
                    the dental industry for over 2 years and came to GFD from
                    another local office. Hunter’s favorite thing about his job
                    is being able to help patients achieve their best smile.
                    Hunter is originally from St. Mary’s County and now lives in
                    Southern Calvert.{" "}
                  </p>
                  <p>
                    Hunter is known by patients and the GFD staff for his
                    honesty and sense of humor. He loves meeting new people and
                    hearing their stories. On his days off Hunter can usually be
                    found hanging out with friends. He especially enjoys
                    unwinding at the bar - his favorite local spot is
                    O’Gannigans!
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
                    Fun Fact: “I’ve lived in Maryland my entire life, but I
                    would rather be somewhere on the beach with a Malibu bay
                    breeze in my hand!”
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
