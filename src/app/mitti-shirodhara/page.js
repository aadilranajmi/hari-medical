import HomeBlog from "@/components/Home/HomeBlog";
import HomeFaq from "@/components/Home/HomeFaq";
import HeroBanner from "@/components/services/HeroBanner";
import { heroBannerContent } from "@/static/services";
import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";

const MittiShirodhara = () => {
  const { title, breadcrumbTitle, bgImg } = heroBannerContent.mittiShirodhara;
  return (
    <>
      <section className="servicesContent suryaChikitsa">
        <HeroBanner
          title={title}
          breadcrumbTitle={breadcrumbTitle}
          bgImg={bgImg}
        />
        <div className="container">
          <h2>Benefits of Mitti Shirodhara Therapie</h2>
          <p>
            Naturopathy is a natural healing technique using the healing powers
            Of nature. The Principle Of Naturopathy is that the accumulation Of
            toxins is the root cause Of all diseases, hence prevention of such
            accumulation and elimination of existing toxins is the route to
            health, This multidisciplinary approach uses the healing power of
            natural resources like foods, herbs, earth, water, air, sun and even
            magnets to allow the body to heal itself. Most treatments are based
            on the 5 great elements of nature that have immense healing
            properties.
          </p>
          <p>
            <b>
              The Five great elements of nature, and the treatments based on
              them, are:
            </b>
          </p>
          <ul>
            <li>
              <b>Earth</b> — Mud baths, Mud packs. Body wraps
            </li>
            <li>
              <b>Water</b> — Hydrotherapeutic methods in the form of Baths,
              Jets, Douches. Packs, Compresses, Immersions and Colonic
              Irrigations
            </li>
            <li>
              <b>Air</b> — Breathing exercises, Outdoor walking, Open air baths
            </li>
            <li>
              <b>Fire</b> — Sun baths, Thermoleum baths, magnetised water,
              colour charged oils/water
            </li>
            <li>
              <b>Ether</b> - Fasting therapy
            </li>
          </ul>
          <div className="imgContent">
            <div className="imgContentData">
              <p>
                Sometimes, natural is the best way to go! It holds the power to
                solve so many problems from the root without carrying the
                side-effects which medications often leave behind. Earth is rich
                in so many minerals and nutrients which can heal our body
                holistically and help you lead a better lifestyle.
              </p>
              <p>
                <b>Mud therapy</b> is one such wonderful cure which you can use
                to solve so many ailments, Slowly gaining popularity globally,
                mud therapy can help you in a lot of ways- from improving your
                skin, getting rid of rashes as well keep you disease-free during
                monsoons
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
                src="/images/services/mitti-shirodhara/mitti-shirodhara.jpg"
                fill
                alt="Benfit of Mitti Shirodhara Massage"
              />
            </div>
          </div>
          <p>
            Of the five elements of nature, mud represents Earth and has a
            tremendous impact on the maintenance of health and prevention of
            diseases. Minerals and trace elements present in mud make it known
            for its renowned effects and healing properties. Mud also has the
            remarkable property of holding moisture for a long time, which has a
            cooling effect on the part of the body applied.
          </p>
          <ul>
            <li>Helps improve circulation and relax the muscles</li>
            <li>
              Improves the digestive activity and sets right the metabolism
            </li>
            <li>
              Local application helps relieve inflammations, swellings and
              reduces pain
            </li>
            <li>Excellent in skin conditions without open lesions</li>
            <li>Helps bring down blood pressure</li>
            <li>Nourishes the skin</li>
            <li>Conditions the hair</li>
            <li>
              Specific kind of application relieves the stiffness of joints
            </li>
          </ul>
        </div>
      </section>
      <HomeFaq />
      <HomeBlog />
    </>
  );
};

export default MittiShirodhara;
