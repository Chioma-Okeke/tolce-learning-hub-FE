"use client"

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";
import { HERO_DATA, PAGE_URLS } from "@/constants";
import type { Swiper as SwiperClass } from "swiper";
import { Button } from "../ui/button";
import Link from "next/link";

const HeroSection = () => {
    const swiperRef = React.useRef<SwiperClass | null>(null);

    const handleSlideChange = (swiper: SwiperClass) => {
        if (swiper.activeIndex === HERO_DATA.length) {
            swiper.slideToLoop(0, 0);
        }
    };

    // function handlePrev() {
    //     swipeInstance?.slidePrev();
    // }

    // function handleNext() {
    //     swipeInstance?.slideNext();
    // }

    return (
        <div className="relative h-fit">
            <Swiper
                spaceBetween={0}
                speed={4000}
                autoplay={{ delay: 6000, disableOnInteraction: false }}
                effect={"slide"}
                fadeEffect={{ crossFade: true }}
                modules={[Autoplay, EffectFade]}
                loop={true}
                className="mySwiper"
                onSlideChange={(swiper) => handleSlideChange(swiper)}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
                {HERO_DATA.map(({ id, image, text }) => (
                    <SwiperSlide key={id} className="relative w-full z-10">
                        <div
                            style={{ backgroundImage: `url(${image})` }}
                            className="w-full h-[800px]  md:h-screen bg-cover bg-no-repeat bg-center after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-t after:from-black/70 after:to-transparent"
                        >
                            <div className="w-[90%] mx-auto max-w-[1440px] z-20 flex items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <div className="ml-3 mt-5">
                                    <h1 className="font-bold text-center md:text-start text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white w-full lg:w-[80%] mb-5 md:mb-9 leading-12">
                                        {text}
                                    </h1>
                                    <div className="flex flex-col md:flex-row items-center gap-3 mt-10">
                                        <Link href={PAGE_URLS.OUR_SERVICES}>
                                            <Button variant={"outline"} className="border-white text-white hover:text-[#0020F1]">
                                                Join Us
                                            </Button>
                                        </Link>
                                        <Link href={PAGE_URLS.CONTACT_US}>
                                            <Button className="py-3 px-6">
                                                Contact Us
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default HeroSection
