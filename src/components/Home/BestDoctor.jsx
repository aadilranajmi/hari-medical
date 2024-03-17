import { homeData } from '@/static/homeData';
import Image from 'next/image';
import React from 'react';

const BestDoctor = () => {
    const bestDoctorData = homeData.bestDoctor;
    return (
        <section className="bestDoctor">
            <div className="container">
                <div className="bestDoctorMain">
                    <div className="bestDoctorMainContent">
                        <h2>Best Ayurvedic Doctors <br /> In Faridabad </h2>
                        <p className='defaultPara'>
                            In The Last 33 Years, We Have Helped 15.3 Lakhs
                            Individuals To Improve Their Health And Reverse Many
                            Chronic Ailments By Treating With Ayurveda Therapies
                            With A Satisfaction Rate Of Over 93%
                        </p>
                    </div>
                    {bestDoctorData.map((item) => (
                        <div className="bestDoctorMainCard" key={item.uid}>
                            <div className="bestDoctorMainCardImg">
                                <Image src={item.imgUrl} alt='item.title' fill />
                            </div>
                            <p className='defaultPara'>{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BestDoctor;
