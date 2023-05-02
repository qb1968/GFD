import React from "react";
import Bredcrumb from "../../HomeMain/Bredcrumb";
import Img1 from "../../../assets/img/team/content-img-2.jpg"

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
                    Dr. Sclater attended the University of Pittsburgh, School of
                    Dental Medicine and graduated cum laude. While in dental
                    school, she received an Army Health Professions Scholarship.
                    She was commissioned into the Army while in dental school
                    and served on active duty for 3 years. She had tours in
                    South Carolina, Wurzburg, Germany and Virginia. She
                    completed a one year general practice residency while
                    stationed in South Carolina. Dr. Sclater served a total of
                    eight years in the Army and received three medals, including
                    the Army Commendation Medal and The Army Achievement Medal.
                  </p>
                  <p>
                    Dr. Sclater has been a dentist for 18 years, and has been in
                    the dental field for 27 years. She became the owner of
                    Gentle Family Dentistry in 2008. She has a passion for
                    continuing education and new developments in dental
                    technology. She is Biolase, CEREC, Allergan, Orthodontic and
                    ClearCorrect certified. Visit our procedures page to learn
                    more about our technology and the services she provides.
                  </p>
                  <p>
                    Dr. Sclater loves using Waterlase which allows our patients
                    a dental experience that is virtually pain free and
                    conservative. She embraces laser technology because she can
                    use minimal, and in some cases even, no anesthetic or
                    drills, to perform routine dental procedures. In addition,
                    she feels CEREC technology has revolutionized her patient
                    care...now she can give her patients beautiful porcealin
                    restorations that are made in-office, usually in the same
                    visit. Which means no more temporary crowns in most cases.
                  </p>
                  <p>
                    Dr. Sclater is certified in orthodontics and enjoys the
                    cosmetic aspect of dentistry. She loves the joy it brings a
                    patient when their smile is healthy and beautiful. Dr.
                    Sclater is excited to bring advanced cosmetic dentistry
                    techniques to Gentle Family Dentistry with BOTOX®,
                    JUVÉDERM®, KYBELLA® and Jeuveau®. Dr. Sclater finds it very
                    rewarding to incorporate BOTOX® and Jeuveau® into her
                    practice for dental aesthetics and pain management.
                  </p>
                  <p>
                    Dr. Sclater is a member of the American Academy of Facial
                    Aesthetics, Patuxent Dental Society, Maryland State Dental
                    Association, Academy of General Dentistry and the American
                    Dental Association. She is Allergan certified in Facial
                    Aesthetics. Dr. Sclater is also AAFE trained and certified
                    in BOTOX® & dermal filler and frontline TMJ & orofacial
                    pain. She is a former Maryland State Dental Association Vice
                    President and was a PANDA trainer for four years.
                  </p>
                  <p>
                    Dr. Sclater is a Calvert County native, and strongly
                    believes in local businesses supporting each other and the
                    community. Dr. Sclater knew from a very young age that she
                    wanted to become a dentist due to her frequent visits to the
                    dentist - she spent four years in braces as a teen, and had
                    braces a second time as an adult. Dr. Sclater enjoys her
                    work and giving back to others. She loves visiting local
                    schools for Career Day when she can.
                  </p>
                  <p>
                    At home, she loves to curl up with a good book and an
                    excellent cup of coffee (she's a confessed coffee snob) or a
                    small batch brew (she said she became a beer snob when she
                    lived in Germany). She is an avid skier and loves to jet ski
                    on the bay in the summer months. She rarely sits
                    still...she's a go-go-go personality, and she loves a
                    bargain! Dr. Sclater has been married to her husband Charlie
                    for 25 years. Charlie is a MPT at Elite Care Physical
                    Therapy in Chesapeake Beach. Their son, Cameron, is a
                    college sophomore in Florida. Dr. Sclater loves to travel
                    and she loved living in Germany when she was in the Army.
                    And she thought Pittsburgh was a fantastic town when she
                    lived there during dental school. Her dream retirement
                    destination is Hawaii.
                  </p>
                  <p>
                    FUN FACT: "I inspect and sniff my food before I eat it."
                    <br></br>
                    FUN FACT: "I was in a fashion show in high school."
                    <br></br>
                    FUN FACT: "I clean my bathroom with a toothbrush."
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
