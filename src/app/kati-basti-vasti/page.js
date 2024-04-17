import HomeBlog from "@/components/Home/HomeBlog";
import HomeFaq from "@/components/Home/HomeFaq";
import HeroBanner from "@/components/services/HeroBanner";
import { heroBannerContent } from "@/static/services";
import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";

const KatiBastiVasti = () => {
  const { title, breadcrumbTitle, bgImg } = heroBannerContent.katiBastiVasti;
  return (
    <>
      <section className="servicesContent suryaChikitsa">
        <HeroBanner
          title={title}
          breadcrumbTitle={breadcrumbTitle}
          bgImg={bgImg}
        />
        <div className="container">
          <h2>Benefits of Kati Basti/ Kati Vasti</h2>
          <p>
            Kati basti also known as Kati vasti is a popular deep tissue
            treatment for low back pain and associated health issues. The term
            Kati basti is formed from two Sanskrit words; kati meaning low back
            and basti/vasti meaning dam. It gives quick relief and relaxes the
            muscles of the whole area. This is a unique treatment of low back
            where a dam filled with warm pain oil is made on your low back. The
            dam is located at the point of origin of pain. inflammation and/or
            stiffness.
          </p>
          <div className="imgContent">
            <div className="imgContentData">
              <p>
                After giving you a quick session Of head massage, the dam is
                made on your back, It is filled with warm herbalized pain Oil.
                The Oil is chosen according to your imbalance and body type. Oil
                will be reheated periodically to ensure the required
                temperature, At the end of the session, a thorough back and leg
                massage will be given.
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
            <div className="serviceImg">
              <Image
                src="/images/services/kati-basti-vasti/kati-basti-vasti.jpg"
                fill
                alt="Benfit of Kati Basti and Vasti Massage"
              />
            </div>
          </div>
          <p>
            Kati basti is ideal for stiffness, Iow back pain and neuropathies of
            legs. It is highly beneficial in disc bulge. Even though a single
            session can give you a lot Of relief from pain and stiffness,
            multiple sessions are recommended to get the desired long lasting
            effects. A session Of steam can boost the results of Kati vasti.
          </p>
        </div>
      </section>
      <HomeFaq />
      <HomeBlog />
    </>
  );
};

export default KatiBastiVasti;
