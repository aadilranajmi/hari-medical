import HomeBlog from "@/components/Home/HomeBlog";
import HomeFaq from "@/components/Home/HomeFaq";
import HeroBanner from "@/components/services/HeroBanner";
import { heroBannerContent } from "@/static/services";
import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";

const BastiChikitsa = () => {
  const { title, breadcrumbTitle, bgImg } = heroBannerContent.bastiChikitsa;
  return (
    <>
      <section className="servicesContent suryaChikitsa">
        <HeroBanner
          title={title}
          breadcrumbTitle={breadcrumbTitle}
          bgImg={bgImg}
        />
        <div className="container">
          <h2>What is Basti?</h2>
          <p>
            In simple terms, it is a medicated ENEMA. In Basti. the medicated
            ghee or herbal oils are administered into the ANUS with the help of
            an instrument, specially designed for this process. Basti is
            considered as the mother of all treatments. It is done in Pakwashaya
            i.e. lower gastrointestinal tract. It is the main site of Vata
            Dosha. Furthermore, Enemas are also given as treatment for
            Constipation if nothing works for the patient- It is not a localized
            or symptomatic treatment. Basti also feeds the colonic flora.
          </p>
          <div className="imgContent">
            <div className="imgContentData">
              <p>
                Administering medicated substances through enema is Ayurveda's
                unique contribution to the medical world, The therapy has
                enormous benefits, especially in complicated and chronic
                diseases. As per the nature Of disease. herbal decoctions. Oils,
                ghee or milk are administered into the rectum and this has
                incredible positive effects. This therapy is extremely effective
                against vata-dominated conditions such as arthritis, piles and
                constipation.
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
                src="/images/services/basti-chikitsa/basti-chikitsa.jpg"
                fill
                alt="Benefit of Basti Chikitsa"
              />
            </div>
          </div>
          <p>
            <b>What is Basti Treatment in Ayurveda?</b>
          </p>
          <p>
            Basti treatment is also known as medicated enema therapy aimed at
            cleansing and rejuvenating the body. Derived from the Sanskrit word
            'Basti' which means urinary bladder This therapy involves the
            introduction of herbal decoctions and oils into the rectum to
            eliminate toxins and promote overall well-being.
          </p>
          <p>
            <b>Types of Basti Treatment</b>
          </p>
          <p>
            Various types of Basti treatments are prescribed based on the
            individual's specific needs and health conditions. Some commonly
            used types are-
          </p>
          <ul style={{ listStyle: "none" }}>
            <li>
              <b>1. Anuvasana Basti:</b> This type involves the administration
              of medicated oils into the rectum.
            </li>
            <li>
              <b>2. Niruha Basti:</b> This is known as a decoction enema
              containing herbal decoctions along with oils.
            </li>
            <li>
              <b>3. Uttara Basti:</b> Uttara Basti focuses on treating
              reproductive and urinary disorders and is administered through the
              urinary tract.
            </li>
            <li>
              <b>4. Matra Basti:</b> When small amounts of oil or herbal
              preparations are given daily for a specific duration, this is
              referred to as Matra Basti.
            </li>
          </ul>
          <p>
            <b>Benefits of Basti Treatment</b>
          </p>
          <p>
            Basti treatment offers numerous benefits for both physical and
            mental well-being. Some key advantages include
          </p>
          <ul style={{ listStyle: "none" }}>
            <li>
              <b>1. Detoxification:</b> Basti therapy helps eliminate
              accumulated toxins from the body, promoting overall
              detoxification. Therefore, basti is the real detox, the world is
              looking for not random juices, shakes and smoothies or fasting
              injudiciously through crash diets.
            </li>
            <li>
              <b>2. Balancing Vata Dosha:</b> By addressing imbalances in the
              Vata dosha, Basti treatment helps relieve conditions related to
              mental health such as anxiety. insomnia. seizures, and pain in
              almost every area of the body since Vata gets aggravated in every
              painful condition. The painful medical conditions of the
              modern-day world as Fibromyalgia, Arthritis of every type can find
              their cure in this wonder therapy devised by great sages of
              Ayurveda.
            </li>
            <li>
              <b>3. Digestive Health:</b> This therapy improves digestion,
              alleviates constipation, and enhances the absorption of nutrients
              and is fruitful in giving results in conditions such as
              pancreatitis, exocrine pancreatic insufficiency also. Losing
              weight can also be achieved with Lekhan Basti and other
              panchakarma modalities. Basti also helps greatly in achieving
              healthy BMR Of the body.
            </li>
            <li>
              <b>4. Rejuvenation:</b> Basti treatment rejuvenates the body,
              improves vitality, and enhances the quality of life. Basti also is
              an anti-ageing treatment that helps in the graceful ageing of
              individuals, Therefore, healthy people should also consider going
              through Basti treatment,
            </li>
            <li>
              <b>5. Disease Management:</b> There is hardly any condition where
              Basti doesnt bring any result. The ambit of the treatment is very
              broad and effective in managing conditions from any physical and
              mental health conditions. and this even includes auto-immune
              disorders to gynecological issues.
            </li>
          </ul>
        </div>
      </section>
      <HomeFaq />
      <HomeBlog />
    </>
  );
};

export default BastiChikitsa;
