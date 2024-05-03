import HomeBlog from "@/components/Home/HomeBlog";
import HomeFaq from "@/components/Home/HomeFaq";
import HeroBanner from "@/components/services/HeroBanner";
import { heroBannerContent } from "@/static/services";
import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";

const Acupressure = () => {
  const { title, breadcrumbTitle, bgImg } = heroBannerContent.acupressure;
  return (
    <>
      <section className="servicesContent suryaChikitsa">
        <HeroBanner
          title={title}
          breadcrumbTitle={breadcrumbTitle}
          bgImg={bgImg}
        />
        <div className="container">
          <h2>What Is the Theory Behind Acupressure?</h2>
          <p>
            Acupressure is just one of a number of Asian bodywork therapies
            (ABT) with roots in traditional Chinese medicine (TCM). Examples of
            other Asian bodywork therapies are medical qigong and Tuina. Shiatsu
            is a Japanese form of acupressure.
          </p>
          <div className="imgContent">
            <div className="imgContentData">
              <p>
                Traditional Chinese medical theory describes special acupoints,
                or acupressure points, that lie along meridians, or channels, in
                your body. These are the same energy meridians and acupoints as
                those targeted with acupuncture. It is believed that through
                these invisible channels flows vital energy — or a life force
                called qi (chi). It is also believed that these 12 major
                meridians connect specific organs or networks of organs,
                organizing a system of communication throughout your body. The
                meridians begin at your fingertips, connect to your brain, and
                then connect to an organ associated with a certain meridian.
              </p>
              <p>
                According to this theory, when one of these meridians is blocked
                or out of balance. illness can occur. Acupressure and
                acupuncture are among the types of TCM that are thought to help
                restore balance.
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
                src="/images/services/jal-chikitsa/jal-chikitsa.jpg"
                fill
                alt="Benfit of Kati Basti and Vasti Massage"
              />
            </div>
          </div>
          <h3>How Does Acupressure Work?</h3>
          <p>
            Acupressure practitioners use their fingers, palms, elbows or feet,
            or special devices to apply pressure to acupoints on the body's
            meridians. Sometimes, acupressure also involves stretching or
            acupressure massage, as well as other methods.
          </p>
          <p>
            During an acupressure sessiom you lie fully clothed on a soft
            massage table. The practitioner gently presses on acupressure points
            on your body. A session typically lasts about one hour. You may need
            several sessions for the best results.
          </p>
          <p>
            The goal of acupressure or other types of Asian bodywork is to
            restore health and balance to the body's channels of energy and to
            regulate opposing forces of yin (negative energy) and yang (positive
            energy). Some proponents claim acupressure not only treats the
            energy fields and body but also the mind, emotions, and spirit. Some
            even believe that therapists can transmit the vital energy (external
            qi) to another person.
          </p>
          <p>
            Not all Western practitioners believe that this is possible or even
            that these meridians exist. Instead, they attribute any results to
            other factors, such as reduced muscle tension, improved circulation,
            or stimulation of endorphins, which are natural pain relievers.
          </p>
          <h3>What Are Common Acupuncture Points?</h3>
          <p>
            There are literally hundreds of acupuncture points on the body too
            many to name. Here are three that are commonly used by
            acupuncturists and acupressure practitioners:
          </p>
          <ol>
            <li>
              <strong>Large intestine</strong> 4 (LI 4): This is in the soft.
              fleshy web between your thumb and forefinger.
            </li>
            <li>
              <strong>Liver 3</strong> (LR-3): Located on the top of your foot
              up from the space between your big toe and next toe.
            </li>
            <li>
              <strong>Spleen 6</strong> (SP-6): This is about three finger
              widths above your inner ankle bone.
            </li>
          </ol>
          <h3>Which Health Problems Benefit From Acupressure?</h3>
          <p>
            Research into the health benefits of acupressure is in its infancy.
            Many patient reports support its use for a number of health
            concerns. More well- designed research is needed, though. Here are a
            few health problems that appear to improve with acupressure:
          </p>
          <p>
            Nausea. Several studies support the use of wrist acupressure to
            prevent and treat nausea and vomiting:
          </p>
          <ol>
            <li>
              After <strong>surgery</strong>
            </li>
            <li>
              During <strong>spinal anesthesia</strong>
            </li>
            <li>
              After <strong>chemotherapy</strong>
            </li>
            <li>
              From <strong>motion sickness</strong>
            </li>
            <li>
              Related to <strong>pregnancy</strong>
            </li>
          </ol>
          <p>
            The PC 6 acupressure point is located in the groove between the two
            large tendons on the inside of the wrist that start at the base of
            the palm. There are special wristbands that are sold over the
            counter. These press on similar pressure points and work for some
            people.
          </p>
          <p>
            Cancer. In addition to relieving nausea right after chemotherapy,
            there are individual reports that acupressure also helps reduce
            stress, improve energy levels. relieve pain, and lessen other
            symptoms of cancer or its treatments. More research is needed to
            confirm these reports.
          </p>
          <p>
            Pain. Some preliminary evidence suggests that acupressure may help
            with low back pain, postoperative pain, or headache. Pain from other
            conditions may benefit, as well. To relieve headache, the LI 4
            pressure point is sometimes tried.
          </p>
          <p>
            Arthritis. Some studies suggest that acupressure releases endorphins
            and promotes anti-inflammatory effects, helping with certain types
            of arthritis-
          </p>
          <p>
            Depression and anxiety. More than one study suggests that fatigue
            and mood may improve from the use of acupressure. Better-designed
            trials are needed to be sure.
          </p>
          <h3>Are There Any Precautions With Acupressure?</h3>
          <p>
            In general, acupressure is very safe. If you have cancer, arthritis,
            heart disease. or a chronic condition, be sure to have a discussion
            with your doctor before trying any therapy that involves moving
            joints and muscles, such as acupressure. And, make sure your
            acupressure practitioner is licensed and certified.
          </p>
          <p>
            Deep tissue work such as acupressure may need to be avoided if any
            of the following conditions apply:
          </p>
          <ol>
            <li>
              The treatment is in the area of a cancerous tumor or if the cancer
              has spread to bones
            </li>
            <li>
              You have rheumatoid arthritis, a spinal injury, or a bone disease
              that could be made worse by physical manipulation
            </li>
            <li>You have varicose veins</li>
            <li>
              You are pregnant (because certain points may induce contractions)
            </li>
          </ol>
        </div>
      </section>
      <HomeFaq />
      <HomeBlog />
    </>
  );
};

export default Acupressure;
