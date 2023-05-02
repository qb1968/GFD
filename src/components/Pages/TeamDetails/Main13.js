import React from "react";
import Bredcrumb from "../../HomeMain/Bredcrumb";
import Img1 from "../../../assets/img/team/Ashley.jpg";

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
                    Please help us welcome Ashley! We are very excited to expand
                    our hygiene department so we can accommodate our patients in
                    a more timely manner. We love that Ashley is bringing to our
                    team a fresh perspective. Ashley, like the rest of our team,
                    is patient-focused, and is incredibly empathetic to patients
                    with dental anxiety (she said she has dental anxiety too,
                    which really helps with comforting her patients). Ashley is
                    laser, nitrous and anesthesia certified.
                  </p>
                  <p>
                    Ashley committed to her goal of being a hygienist at 14.
                    She's been in the dental field for 9 years, and worked as an
                    oral surgery assistant while pursuing her degree. She is
                    passionate about oral health, and even received the
                    Hu-Friedy Golden Scaler Award… which was presented to a
                    graduating dental hygiene student showing the greatest
                    proficiency in the performance of clinical dental hygiene
                    services. Ashley is a Southern MD native, and recently
                    married her best friend! She has a passion for animals,
                    family and crafting. She couldn’t live without ice cream,
                    and grilled cheese is her favorite food! And we are very
                    excited for her...she recently had her first baby! She and
                    her husband are over the moon...they love every minute of
                    being a parent!
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
                    FUN FACT: "I cannot eat a sandwich if anything is hanging
                    over the side...all sandwich fillings have to be tucked into
                    the bread and not showing."
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
