import HomeBlog from "@/components/Home/HomeBlog";
import HomeFaq from "@/components/Home/HomeFaq";
import HeroBanner from "@/components/services/HeroBanner";
import { heroBannerContent } from "@/static/services";
import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";

const Shirodhara = () => {
  const { title, breadcrumbTitle, bgImg } = heroBannerContent.shirodhara;
  return (
    <>
      <section className="servicesContent shirodhara">
        <HeroBanner
          title={title}
          breadcrumbTitle={breadcrumbTitle}
          bgImg={bgImg}
        />
        <div className="container">
          <h2>What Is Shirodhara Scalp Massage?</h2>
          <p>
            Shirodhara is a traditional ayurvedic method of healing, that has
            been in use since ancient times to bring the minde body and soul to
            a harmonious level. Touted as one of the most purifying and
            rejuvenating treatments, this therapy is designed in such a way that
            it not only eliminates the harmful AMA toxins from the body but also
            relieves stress, gets rid of mental exhaustion and treat a host of
            disorders,
          </p>
          <p>
            The term 'Shirodhara' comes from two Sanskrit words, where Shiro'
            means 'head' and 'dhara' implies to 'pouring or sprinkling
            something', together it infers to dripping or pouring of warm herbal
            ayurvedic oils on the forehead from a specific height, for a
            specific time period in a continuous stream, allowing the oil to run
            through the scalp and down into the hair. While there are different
            types of massage techniques that work only on the external surface
            and help in relieving muscle pain and stress, Shirodhara, on the
            other hand, works on multiple layers Of the being. Be it exfoliating
            dead skin cells, transporting lymphatic fluids, mitigating stress,
            expunging muscular tension, balancing doshic elements, or
            obliterating toxins, this divine process does it all. It even
            enhances the function of the central nervous system. treats diseases
            like anxiety, depression, and mental fatigue and bestows a whole new
            experience to the mind and body.
          </p>
          <div className="imgRelative">
            <Image
              src="/images/services/shirodhara/shirodhara.jpg"
              alt="Benfit of Potli Massage"
              fill
            />
          </div>
          <Button
            variant="contained"
            sx={{
              borderRadius: "2rem",
              margin: "1rem 0",
            }}
          >
            <a href="tel:+91 98115 73361">Book Your Appointment</a>
          </Button>
          <h3>How Does Shirodhara Work?</h3>
          <p>
            The infusion of oils or other liquids when poured onto the head and
            scalp produces a soothing and calming sensation on the muscles of
            the head, which in turn passes via the superficial peripheral nerves
            of the forehead to the brain. By soothing the hypothalamus, it
            regulates the activity of the pituitary gland and treats conditions
            like insomnia by inducing sleep. Shirodhara also stimulates the
            various vital points all around the head and improves blood
            circulation. The warm herbal Oils used for this process causes
            vasodilatation Of all the blood vessels and thus improves the blood
            circulation in the brain.
          </p>
          <p>
            The massage brings down the elevated serotonin levels, a
            neurotransmitter that stabilizes our mood, feelings Of well-being,
            and happiness, Shirodhara also reduces the level Of stress hormones
            such as adrenaline and noradrenaline and thus relaxes the mind and
            thereby helps in relieving stress and tension, It also helps in
            alleviating different types Of psychosomatic ailments like stress,
            tension, depression, anxiety,
          </p>
          <h3>Points To Note:</h3>
          <ul>
            <li>
              The treatment is usually done either in the morning or in the
              evening to get the maximum results.
            </li>
            <li>
              In some particular health conditions, apart from the head and
              scalp, a whole-body massage i.e. Abhayanga is done using the
              herbinfused oils.
            </li>
            <li>
              The patient should take bath using medicated water or warm water
              after 30 minutes, once the procedure reaches completion.
            </li>
            <li>Use medicated shampoos to remove the oil from the hair.</li>
            <li>
              Avoid intake Of caffeinated products for a few days as this may
              negate the benefits Of the treatment.
            </li>
            <li>Go for a Vata pacifying diet.</li>
          </ul>
          <h3>Why Is The Shirodhara Oil Poured Onto The Forehead?</h3>
          <p>
            The oils infused with various herbs or herbal ingredients are
            generally sprinkled onto the forehead and head since this iS the
            only part of the body that has numerous sensitive nerve endings or
            vital points that are directly connected to the brain. According to
            several spiritual texts, the centre of the forehead is said to be
            the 'third eye', which is connected to the pineal gland via several
            blood vessels and capillaries.
          </p>
          <p>
            Yogic tradition refers to this third eye as the 'Agnya Chakra'-
            Focussing on the Agnya chakra during meditation with closed eyes
            leads to psychosomatic harmony. AS the Oil drips on the agnya
            chakra, it begets a meditation-like effect, Which is a consequence
            Of stillness Of mind leading to the adaptive response to the basal
            stress. The Oil infiltrates into the nervous system after dousing
            the forehead and scalp. The entire procedure empowers the mind and
            body to experience a state of deep rest, similar to the state, a
            person attains right after meditation, Also Read: Modern Meditation
            Techniques For Mental And Emotional Well-Being
          </p>
        </div>
      </section>
      <HomeFaq />
      <HomeBlog />
    </>
  );
};

export default Shirodhara;
