import { homeData } from "@/static/homeData";
import Image from "next/image";
import Link from "next/link";

const ServiceHome = () => {
  const serviceData = homeData.services;
  return (
    <section className="serviceHome">
      <div className="container">
        <h2>
          Our <span>Services</span>
        </h2>
        <p className="defaultPara">
          We Have 30+ Man Years Of Experience In Ayurvedic Treatments And
          Therapies.
        </p>
        <p className="defaultPara">
          We Strive To Help You To Attain A Healthy Lifestyle And Prevent
          Recurrence Of The Diseases.
        </p>
        <div className="serviceHomeMain">
          {serviceData.map((item) => (
            <Link href={item.link} key={item.uid}>
              <div className="serviceHomeMainCard">
                <div className="serviceImg">
                  <Image src={item.imgUrl} fill alt={item.title} />
                </div>
                <p className="defaultPara">{item.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceHome;
