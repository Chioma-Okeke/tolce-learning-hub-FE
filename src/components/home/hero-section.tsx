"use client"

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade, Mousewheel } from "swiper/modules";
import { HERO_DATA, PAGE_URLS } from "@/constants";
import type { Swiper as SwiperClass } from "swiper";
import { Button } from "../ui/button";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HeroSection = () => {
    const swiperRef = React.useRef<SwiperClass | null>(null);

    const handleSlideChange = (swiper: SwiperClass) => {
        if (swiper.activeIndex === HERO_DATA.length) {
            swiper.slideToLoop(0, 0);
        }
    };

    return (
        <div className="relative h-fit">
            <Swiper
                spaceBetween={0}
                speed={1000}
                autoplay={{ delay: 6000, disableOnInteraction: false }}
                effect={"fade"}
                modules={[Autoplay, EffectFade, Mousewheel]}
                loop={true}
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
            <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 z-50 flex items-center justify-between w-full px-5">
                <button onClick={() => swiperRef.current && swiperRef.current.slidePrev()}>
                    <ChevronLeft width={40} height={40} color="white" className=" hover:scale-110 cursor-pointer" />
                </button>
                <button onClick={() => swiperRef.current && swiperRef.current.slideNext()}>
                    <ChevronRight width={40} height={40} color="white" className=" hover:scale-110 cursor-pointer" />
                </button>
            </div>
        </div>
    );
}

export default HeroSection
