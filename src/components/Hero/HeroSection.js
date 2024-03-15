'use client';
import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import Image from 'next/image';

import style from '@/style/HeroSection.module.css';
import { Button } from '@mui/material';
import { homeData } from '@/static/homeData';

const HeroSection = () => {
    const heroData = homeData.heroData;
    return (
        <Swiper
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="mySwiper"
        >
            {heroData.map((item, index) => <SwiperSlide>
                <div className={style.heroContent}>
                    <Image src={item.imgUrl} fill />
                    <div className={style.heroContentMain}>
                        <h6>
                            {item.heading}
                        </h6>
                        <p>{item.para}</p>
                        <Button variant='contained'>Know More</Button>
                    </div>
                </div>
            </SwiperSlide>)}
            
        </Swiper>
    );
};

export default HeroSection;
