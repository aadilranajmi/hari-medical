import HeroBanner from "@/components/services/HeroBanner";
import ReadMoreLess from "@/components/uiComponent/ReadMoreLess";
import { ayurvedicMassage, heroBannerContent } from "@/static/services";
import Image from "next/image";

const AyurvedicMassage = () => {
  const { title, breadcrumbTitle, bgImg } = heroBannerContent.ayurvedicMassage;
  const ayurvedicMassageContent = ayurvedicMassage;
  return (
    <>
      <section className="servicesContent ayurvedicMassage">
        <HeroBanner
          title={title}
          breadcrumbTitle={breadcrumbTitle}
          bgImg={bgImg}
        />
        <div className="container">
          <h2>Benefits of Ayurvedic Massage Treatments</h2>
          <p>
            Ayurveda offers a wide range of external treatments to compliment
            lifestyle recommendations and herbs to regain/maintain health, They
            have multidimensional effects on the well being of the individual.
            Apart from the specific effects, all of the Ayurvedic treatments are
            very relaxing and provide total wellness. Whenever using oil,
            herbalized oils which are made by processing around 10-40 sometimes
            even 80 herbs in sesame oil or coconut oil are used for the
            treatments. The oils are selected according to the body type and/ or
            health issues, Having 3-7 sessions of the treatment consecutively or
            periodically provides long lasting effects.
          </p>
          <div className="servicesContentMain">
            {ayurvedicMassage.map((item) => (
              <div key={item.id} className="servicesContentMainCard">
                <h3>{item.heading}</h3>
                <div className="servicesContentMainImg">
                  <Image src={item.imgUrl} fill alt={item.heading} />
                </div>
                <ReadMoreLess content={item.content} classes="readMoreLessmainContent" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AyurvedicMassage;
