import { homeData } from '@/static/homeData';
import Image from 'next/image';

const ServiceHome = () => {
    const serviceData = homeData.services;
    return (
        <section className="serviceHome">
            <div className="container">
                <h2>
                    Our <span>Services</span>
                </h2>
                <p className='defaultPara'>
                    We Have 30+ Man Years Of Experience In Ayurvedic Treatments
                    And Therapies.
                </p>
                <p className='defaultPara'>
                    We Strive To Help You To Attain A Healthy Lifestyle And
                    Prevent Recurrence Of The Diseases.
                </p>
                <div className="serviceHomeMain">
                    {serviceData.map((item) => (
                        <div className="serviceHomeMainCard" key={item.uid}>
                            <div className="serviceImg">
                                <Image src={item.imgUrl} fill />
                            </div>
                            <p className='defaultPara'>{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceHome;
