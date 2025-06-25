"use client"

// import { useEffect } from "react";

import { AnimatedSection } from "@/components/shared/animated-section";
import { MissionAndValues } from "@/components/about-us/mission-and-values";
import { TeamMembers } from "@/components/about-us/team-members";
import Image from "next/image";
import { useWindowWidth } from "@/hooks/use-width";

const About = () => {
    const width = useWindowWidth()

    const isSmallScreen = width < 1024

    // useEffect(() => {
    //     window.scrollTo({
    //         top: 0,
    //         behavior: "smooth",
    //     });
    // }, []);

    return (
        <>
            <div className="relative">
                <AnimatedSection className="w-[90%] mx-auto py-20 md:py-20">
                    <div className="w-full flex flex-col lg:flex-row lg:items-center">
                        <h1 className="text-[28px] lg:text-4xl xl:text-5xl font-bold lg:w-[40%] lg:pl-10">
                            Why we exist?
                        </h1>
                        <p className="text-base font-medium text-[#475467] xl:text-lg text-justify lg:w-[60%]">
                            There is a wide skill gap between the Classroom and
                            Corporate environment. We believe in the
                            transformative power of acquiring marketable skills
                            to solve pressing global challenges in the 21st
                            century. By exposing students to the required
                            knowledge, tools and skills, they become empowered
                            to be valuable to organizations and the world at
                            large.
                        </p>
                    </div>
                </AnimatedSection>

                <section
                    className="bg-[#F6F9FE] lg:bg-none"
                    style={{
                        backgroundImage: !isSmallScreen
                            ? `url("/backgroundpattern.svg")`
                            : "none",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                    }}
                >
                    <AnimatedSection
                        className={`max-w-[1800px] py-12 sm:py-20 flex flex-col-reverse md:flex-row items-center w-[90%] lg:w-full h-[450px] 2xl:h-[550px] mx-auto relative ${isSmallScreen
                            ? "bg-none h-fit gap-5"
                            : "bg-cover h-fit"
                            }`}
                    >
                        <div className="flex-1 lg:py-12 lg:pl-16 sm:pr-4 sm:bg-white">
                            <p className="text-base font-medium text-[#475467] xl:text-lg text-justify">
                                <span className="font-semibold text-xl lg:text-2xl ">
                                    TOLCE Learning Hub
                                </span>{" "}
                                is deeply committed to being a key player in
                                solving Africa’s Human Capital crisis. Through
                                innovative learning initiatives, we aim to equip
                                youths with the skills, knowledge, confidence,
                                and opportunities needed to thrive in today’s
                                rapidly evolving world. Founded in 2023 by
                                Tolulope Esan, TOLCE helps to bridge the wide
                                skill gap between classroom and corporate world.
                            </p>
                        </div>
                        <div className="md:flex-1 bg-white w-full h-[300px] mx-auto lg:h-[350px] xl:h-[400px] 2xl:h-[450px] shadow-lg relative overflow-hidden">
                            <Image
                                src="https://res.cloudinary.com/djrp3aaq9/image/upload/v1739046329/core-values-3.jpg"
                                alt="Our Team"
                                fill
                                sizes="100vw"
                                className="object-cover object-center"
                            />
                        </div>
                    </AnimatedSection>
                </section>

                <section>
                    <MissionAndValues />
                </section>

                <div className="bg-gradient-to-r from-[#080E7F] to-[#0020F1] text-white">
                    <AnimatedSection>
                        <TeamMembers />
                    </AnimatedSection>
                </div>
            </div>
        </>
    );
}

export default About
