import HomeBlog from "@/components/Home/HomeBlog";
import HomeFaq from "@/components/Home/HomeFaq";
import HeroBanner from "@/components/services/HeroBanner";
import { heroBannerContent } from "@/static/services";
import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";

const SuryaChikitsa = () => {
  const { title, breadcrumbTitle, bgImg } = heroBannerContent.suryaChikitsa;
  return (
    <>
      <section className="servicesContent suryaChikitsa">
        <HeroBanner
          title={title}
          breadcrumbTitle={breadcrumbTitle}
          bgImg={bgImg}
        />
        <div className="container">
          <h2>What is Helio Therapy</h2>
          <p>
            In Ayurveda, Heliotherapy. known as "Surya Chikitsa,• is a
            therapeutic practice done at many Wellness retreats at Prayagraj
            that harnesses the healing power Of the sun. It is believed to
            balance the body's doshas (Vata, Pitta, and Kapha) and promote
            overall well-being. Ayurvedic heliotherapy involves sun exposure
            during specific times of the day, such as sunrise or sunset, to
            absorb vital energy and activate the body's internal healing
            mechanisms. The sun's rays are considered a source of Prana (life
            force energy) and are thought to improve digestion. boost immunity.
            and enhance mental clarity. This traditional practice is used to
            address various health concerns and align with Ayurvedic principles
            for holistic wellness.
          </p>
          <p>
            Heliotherapy is primarily associated with the following potential
            benefits:
          </p>
          <div className="imgContent">
            <div className="imgContentData">
              <p>
                Sunlight serves as a vital catalyst for the bodys production of
                vitamin D. When the skin is exposed to ultraviolet B (UVB) rays
                from the sun, it triggers a chemical reaction that synthesizes
                vitamin D. This nutrient is crucial for various aspects Of
                health, particularly bone health, as it enables the absorption
                Of calcium and supports bone mineralization. Additionally,
                vitamin D plays a pivotal role in bolstering the immune system.
                helping to defend against infections and regulate immune
                responses. Its multifaceted importance extends to overall
                well-being, impacting mood, cardiovascular health, and
                potentially reducing the risk of chronic diseases.
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
                src="/images/services/potli-massage/potli-massage-benefit.jpg"
                fill
                alt="Benfit of Potli Massage"
              />
            </div>
          </div>
          <p>
            Mood Enhancement: According to the experts of Wellness resort in
            Prayagraj exposure to sunlight has a profound impact on mood due to
            its ability to stimulate the production of serotonin, a
            neurotransmitter often referred to as the "feel-good" chemical. When
            sunlight enters the eyes. it triggers the brain to release more
            serotonin, which in turn elevates mood and promotes a sense of
            well-being. This natural mood enhancement is particularly valuable
            in addressing conditions like depression and Seasonal Affective
            Disorder (SAD). where individuals often experience lower serotonin
            levels and mood disturbances during darker, winter months. Sunlight
            therapy, or phototherapy, can be an effective treatment, helping to
            alleviate symptoms of these mood disorders and improve overall
            mental health.
          </p>
          <p>
            Circadian Rhythm Regulation: Exposure to natural sunlight serves as
            a key mechanism for regulating the body's internal timekeeping
            system. or circadian rhythm. This synchronization process,
            particularly when exposed to natural light in the morning, sends
            signals to the body, indicating that it'S time to be awake and alert
            during the day. This synchronization enhances the quality Of Sleep
            by promoting a consistent sleep-wake schedule and increasing the
            production of melatonin, a vital hormone for promoting restful
            sleep. A well-regulated circadian rhythm not only improves sleep
            patterns but also has a broader positive impact on overall health,
            affecting mood, cognitive functions, and various physiological
            processes,
          </p>
        </div>
      </section>
      <HomeFaq />
      <HomeBlog />
    </>
  );
};

export default SuryaChikitsa;
