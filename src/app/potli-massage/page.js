import HomeBlog from "@/components/Home/HomeBlog";
import HomeFaq from "@/components/Home/HomeFaq";
import HeroBanner from "@/components/services/HeroBanner";
import { heroBannerContent } from "@/static/services";
import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";

const PotliMassage = () => {
  const { title, breadcrumbTitle, bgImg } = heroBannerContent.potliMassage;
  return (
    <>
      <section className="servicesContent potliMassage">
        <HeroBanner
          title={title}
          breadcrumbTitle={breadcrumbTitle}
          bgImg={bgImg}
        />
        <div className="container">
          <h2>Benefits of Potli Massage</h2>
          <p>
            Ayurvedic pouch massage is popular for aches and pains especially
            for muscles, tendons and joints. It provides you deep tissue massage
            and much more without feeling that hurt or uncomfortable. In a
            session of Ayurvedic pouch massage, after applying herbalized oil to
            your body, massage is administered with warm herbal pouch. The pouch
            is prepared from fresh herbs or herbal powders depending upon your
            imbalance and pain. The pouch is reheated to maintain the warmth by
            dipping in warm herbal pain oil. The oil and herbs of pouch are
            selected according to your symptoms, health issues and body type
          </p>
          <div className="imgContent">
            <div className="serviceImg">
              <Image
                src="/images/services/potli-massage/potli-massage-benefit.jpg"
                fill
                alt="Benfit of Potli Massage"
              />
            </div>
            <div className="imgContentData">
              <p>
                Pinda sweda or Ayurvedic pouch massage relieves stiffness and
                pain, so it is highly recommended for problems with muscles,
                tendons, ligaments and spine. It is highly effective in bulged
                disc, frozen shoulder, cervical spondylosis, osteo arthritis,
                rheumatoid arthritis, chronic fatigue syndrome, calcaneal spur,
                and plantar fasciitis and so on. Pinda sweda provides
                lubrication and addresses stiffness
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
          </div>
          <p>
            Pinda sweda is a very unique therapy for pain and associated
            problems. Pinda sweda not only gives an instant and lasting relief
            from pain and stiffness, but also gives a sense of wellbeing and
            relaxation. As stress is an important factor that induces and
            increases joint and muscular pain and stiffness, relieving stress is
            very important to provide better healing.
          </p>
          <p>
            Muscles, tendons, ligaments and joints work together as Musculo
            skeletal system to bring about desired movements and actions. Even
            though the muscles work as a unit located at different regions like
            lower back, neck, upper arm, legs and so on; they are closely
            connected and dependent upon nearby muscles and other structures.
            For example neck is very closely related to rest of the spine, arms
            and chest. So we can’t expect a complete relief from pain until and
            unless the associated structures are treated and healed. A session
            of Pinda sweda helps to relax and heal the whole musculo skeletal
            system making the results deeper and sustainable.
          </p>
          <p>
            The effects of Pinda sweda can be boosted by taking a session of
            steam afterwards. Multiple sessions of Pinda sweda may be required
            for long lasting effects. Usually 3-7 sessions are recommended.
          </p>
        </div>
      </section>
      <HomeFaq />
      <HomeBlog />
    </>
  );
};

export default PotliMassage;
