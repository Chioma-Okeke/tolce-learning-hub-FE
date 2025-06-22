"use client"

import React, {useEffect, useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade, Mousewheel } from "swiper/modules";
import { HERO_DATA, PAGE_URLS } from "@/constants";
import type { Swiper as SwiperClass } from "swiper";
import { Button } from "../ui/button";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useWindowWidth } from "@/hooks/use-width";

const HeroSection = () => {
    const swiperRef = React.useRef<SwiperClass | null>(null);
    const width = useWindowWidth()
    const [currentIndex, setCurrentIndex] = useState<number | undefined>(0)

    const handleSlideChange = (swiper: SwiperClass) => {
        setCurrentIndex(swiper.realIndex);
    };

    useEffect(() => {
        console.log("Current Swiper Instance:", currentIndex);
    }, [currentIndex])

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
                onSwiper={(swiper) => {
                    swiperRef.current = swiper
                    }}
            >
                {HERO_DATA.map(({ id, image, text }) => (
                    <SwiperSlide key={id} className="relative w-full z-10">
                        <div
                            style={{ backgroundImage: `url(${image})` }}
                            className="w-full h-[800px] md:h-screen bg-cover bg-no-repeat bg-center after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-t after:from-black/80 after:to-transparent"
                        >
                            <div className="w-[90%] mx-auto max-w-[1440px] z-20 flex items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <div className="ml-3 mt-5">
                                    <h1 className="font-bold w-full max-w-[750px] text-center md:text-start text-4xl sm:text-4xl md:text-5xl lg:leading-14 text-white mb-5 md:mb-9">
                                        {text}
                                    </h1>
                                    <div className="flex flex-col md:flex-row items-center gap-3 mt-10">
                                        <Link href={PAGE_URLS.OUR_SERVICES}>
                                            <Button variant={"outline"} className="border-white text-white hover:text-[#0020F1] w-[135px]">
                                                Join Us
                                            </Button>
                                        </Link>
                                        <Link href={PAGE_URLS.CONTACT_US}>
                                            <Button className="py-3 px-6 w-[135px]">
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
            {width > 1024 && <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 z-50 flex items-center justify-between w-full px-5">
                <button onClick={() => swiperRef.current && swiperRef.current.slidePrev()}>
                    <ChevronLeft width={width < 1024 ? 20 : 40} height={width < 1024 ? 20 : 40} color="white" className=" hover:scale-110 cursor-pointer" />
                </button>
                <button onClick={() => swiperRef.current && swiperRef.current.slideNext()}>
                    <ChevronRight width={width < 1024 ? 20 : 40} height={width < 1024 ? 20 : 40} color="white" className=" hover:scale-110 cursor-pointer" />
                </button>
            </div>}
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center gap-2">
                { width < 1024 && (
                    HERO_DATA.map((_, index) => (
                        <Button onClick={() => {
                            swiperRef.current?.slideToLoop(index)
                        }} key={index} variant={currentIndex === index ? "default" : "outline"} className="size-4 rounded-full p-1"></Button>
                    ))
                )
                }
            </div>
        </div>
    );
}

export default HeroSection
