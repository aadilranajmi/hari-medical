import Image from 'next/image';

const WhyAyurveda = () => {
    return (
        <section className="whyAyurveda">
            <div className="container">
                <div className="whyAyurvedaMain">
                    <div className="whyAyurvedaMainContent">
                        <h3>Why Ayurveda ?</h3>
                        <p className="defaultPara">
                            Ayurveda Is More Practiced Like A Ritual And
                            Business Rather Then An Ancient Medical Science.
                            Modern Ayurveda Is High Commercialized And
                            Traditional Ayurveda Is Slow Disappearing. Several
                            Renowned Ayurvedic Centers Specialize In The
                            Practice
                        </p>
                        <h3 className='lastHeading'>
                            Best Ayurvedic Doctors In Faridabad
                        </h3>
                        <p className="defaultPara">
                            Shree Hari Medical Center Doctors Are Vastly
                            Experienced, Highly Qualified & Best Ayurvedic
                            Doctors In Faridabad. All Of Our Ayurveda Treatments
                            Are Supervised And Monitored By Our Highly Talented
                            Ayurveda Doctors In Faridabad. Shree Hari Medical
                            Center Doctors Are The Members Of Ayurveda Medical
                            Association Of India.
                        </p>
                    </div>
                    <div className="whyAyurvedaMainImage">
                        <Image
                            src="/images/why_ayurveda.png"
                            width={440}
                            height={360}
                            alt='Best Ayurvedic Doctors In Faridabad'
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyAyurveda;
