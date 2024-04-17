import HomeBlog from "@/components/Home/HomeBlog";
import HomeFaq from "@/components/Home/HomeFaq";
import HeroBanner from "@/components/services/HeroBanner";
import { heroBannerContent } from "@/static/services";
import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";

const JalChikitsa = () => {
  const { title, breadcrumbTitle, bgImg } = heroBannerContent.jalChikitsa;
  return (
    <>
      <section className="servicesContent suryaChikitsa">
        <HeroBanner
          title={title}
          breadcrumbTitle={breadcrumbTitle}
          bgImg={bgImg}
        />
        <div className="container">
          <h2>Benefits Of Jal Chikitsa Therapie</h2>
          <p>
            Hydrotherapy uses water for treatment. It is a part of nature cure —
            healing by natural measures. Among the five basic elements of
            nature, when water is used for treatment purposes. in nature cure,
            it is also called Jala Chikitsa.
          </p>
          <p>
            Hydrotherapy techniques are completely safe and some absolutely
            vital (like wound irrigation or running cold water over a burn).
            certain therapies are unsuitable for people suffering from
            preexisting conditions, Hydrotherapy should be undertaken with
            proper consideration or avoided altogether in these cases.
            Contraindications to hydrotherapy are:-
          </p>
          <p>
            <b>Heart Disease</b> A history of heart problems makes hydrotherapy
            (especially heat-related) imprudent at the risk of precipitating an
            attack,
          </p>
          <div className="imgContent">
            <div className="imgContentData">
              <ul>
                <li>
                  Unstable <b>Angina</b>
                </li>
                <li>
                  Undiagnosed <b>chest pain</b>
                </li>
                <li>
                  Undiagnosed <b>chest pain</b>
                </li>
                <li>
                  Recent <b>Heart Attack (myocardial infarction)</b>
                </li>
                <li>
                  <b>Aortic stenosis</b>
                </li>
                <li>Carotid artery stenosis</li>
              </ul>
            </div>
            <div className="serviceImg">
              <Image
                src="/images/services/jal-chikitsa/jal-chikitsa.jpg"
                fill
                alt="Benfit of Kati Basti and Vasti Massage"
              />
            </div>
          </div>
          <p>
            <b>Pregnancy:</b> Exposure to steam or immersion in hot baths can be
            detrimental to the baby, especially in cases of a high-risk
            pregnancy, and doctors do not recommend it. Water births are
            contraindicated in women suffering from any preexisting condition or
            with a complicated pregnancy. Sitz bath following recent birth is
            advisable for pain relief.
          </p>
          <p>
            Understanding how aquatic therapy works can ease any nerves or
            discomfort a person feels before their first session, especially if
            they spend minimal time in water outside of therapy.
          </p>
          <Button
            variant="contained"
            sx={{
              borderRadius: "2rem",
            }}
          >
            <a href="tel:+91 98115 73361">Book Your Appointment</a>
          </Button>
        </div>
      </section>
      <HomeFaq />
      <HomeBlog />
    </>
  );
};

export default JalChikitsa;
