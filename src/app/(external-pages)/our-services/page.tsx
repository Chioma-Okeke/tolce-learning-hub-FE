"use client"

import Link from "next/link";
import { useRef } from "react";

import { PAGE_URLS } from "@/constants";
import { Button } from "@/components/ui/button";
import Questions from "@/components/shared/faq/FAQ";
import SellingPoint from "@/components/service-page/selling-point";
import ServiceTiers from "@/components/service-page/service-tiers";
import { AnimatedSection } from "@/components/shared/animated-section";

const ServicePage = () => {
    const serviceTierRef = useRef<HTMLDivElement>(null);

    const scrollToServices = () => {
        if (serviceTierRef.current) {
            serviceTierRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <div className="w-full">
            {/* Hero Section */}
            <div className="relative py-20 sm:py-20 w-full bg-gradient-to-r from-[#0020F1] to-[#080E7F] flex items-center justify-center">
                <div className="absolute inset-0 bg-black/30" />{" "}
                {/* Overlay */}
                <AnimatedSection className="relative z-10 text-center max-w-4xl mx-auto px-4">
                    <h1 className="font-bold text-center text-4xl sm:text-4xl md:text-5xl lg:text-6xl text-white w-full mb-5 md:mb-9 leading-12">
                        Empowering the Next Generation of Leaders with
                        Digital and Soft Skills
                    </h1>
                    <p className="mt-6 text-xl md:text-2xl text-white leading-[1.5]">
                        Simplified, engaging, and self-paced learning for
                        today&apos;s digital world.
                    </p>
                    <div className="mt-10 flex flex-col md:flex-row gap-4 items-center justify-center">
                        <Link target="_blank" href={PAGE_URLS.ENROLLMENT_FORM}>
                            <Button
                                variant="secondary"
                                className="px-8 text-lg w-[135px]"
                            >
                                Join Now
                            </Button>
                        </Link>
                        <Button
                            variant={"outline"}
                            onClick={scrollToServices}
                            className="px-8 border-white text-white hover:text-[#0020F1] w-[135px]"
                        >
                            Learn More
                        </Button>
                    </div>
                </AnimatedSection>
            </div>

            {/* Why Choose Us Section */}
            <div className="bg-[#F7F9FC] py-12 sm:py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <AnimatedSection>
                        <h2 className="font-semibold text-2xl lg:text-4xl pb-[10px] lg:py-6 xl:text-[40px] text-center">
                            Why Choose TOLCE Learning Hub?
                        </h2>
                        <SellingPoint />
                    </AnimatedSection>
                </div>
            </div>

            {/* Service Tiers Section */}
            <AnimatedSection>
                <div ref={serviceTierRef}>
                    <ServiceTiers />
                </div>
            </AnimatedSection>

            {/* frequently asked questions */}
            <AnimatedSection className="py-12 sm:py-20">
                <Questions scrollToServices={scrollToServices} />
            </AnimatedSection>
        </div>
    );
};

export default ServicePage;
