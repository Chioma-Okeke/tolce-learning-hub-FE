"use client"

import React from "react";
import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button";
import { Counter } from "@/components/shared/Counter";
import HeroSection from "@/components/home/hero-section";
import Testimonials from "@/components/home/testimonials";
import { FEATURES, FOCUS_AREAS, PAGE_URLS } from "@/constants";
import { AnimatedSection } from "@/components/shared/animated-section";

const LandingPage = () => {

    return (
        <div className="w-full">
            {/* Hero Section */}
            <section>
                <HeroSection />
            </section>

            {/* About Us Section */}
            <div className="bg-[#F7F9FC] py-20">
                <AnimatedSection>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                        }}
                        className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center "
                    >
                        <div>
                            <h2 className="text-4xl font-bold text-[#333333] leading-tight">
                                Who We Are
                            </h2>
                            <p className="mt-6 text-lg text-[#555555] leading-relaxed">
                                TOLCE Learning Hub is dedicated to equipping
                                individuals with the skills they need to
                                thrive in a digital world. Our comprehensive
                                programs combine practical knowledge with
                                hands-on experience, ensuring our learners
                                are prepared for real-world challenges.
                            </p>
                            <Link href={PAGE_URLS.ABOUT_US}>
                                <Button
                                    className="mt-8 w-fit"
                                >
                                    Learn More About Us
                                </Button>
                            </Link>
                        </div>
                        <div className="relative w-full h-[400px] rounded-2xl shadow-lg bg-white overflow-hidden">
                            <Image
                                src="https://res.cloudinary.com/djrp3aaq9/image/upload/v1739046329/core-values-3.jpg"
                                alt="Team collaboration"
                                fill
                                sizes="100vw"
                                className="object-cover object-center"
                            />
                        </div>
                    </motion.div>
                </AnimatedSection>
            </div>

            {/* Services Overview */}
            <div className="py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-[#333333] text-center mb-12 leading-tight">
                        What We Offer
                    </h2>
                    <div className="grid md:grid-cols-2 gap-10">
                        {FOCUS_AREAS.map((program) => (
                            <motion.div
                                key={program.label}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                    duration: 0.8,
                                }}
                                className="bg-white rounded-xl shadow-lg relative h-fit flex flex-col justify-between"
                            >
                                <div className="bg-white w-full h-[402px] max-h-[402px] rounded-xl relative overflow-hidden">
                                    <Image
                                        src={program.imgSrc}
                                        alt={program.label}
                                        fill
                                        sizes="100vw"
                                        className="object-cover object-center"
                                    />
                                </div>
                                <div className="py-8 px-4 flex flex-col">
                                    <h3 className="text-xl font-bold text-[#333333] mb-4">
                                        {program.label
                                            .charAt(0)
                                            .toUpperCase() +
                                            program.label.slice(1)}
                                    </h3>
                                    <p className="text-[#555555] mb-6">
                                        {program.description}
                                    </p>
                                    <Link href={program.path}>
                                        <Button>
                                            Learn More
                                        </Button>
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Why Choose Us with Counters */}
            <AnimatedSection className="bg-white py-20 border-t border-[#E5E7EB]">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-[#333333] text-center mb-12">
                        Why Choose Us?
                    </h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        {FEATURES.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                }}
                                className="text-center p-6"
                            >
                                <div className="inline-block p-4 bg-[#EAF6F2] rounded-full mb-4">
                                    <feature.icon className="w-12 h-12 text-[#0020F1]" />
                                </div>
                                <h3 className="text-xl font-bold text-[#333333] mb-2">
                                    {feature.isCounter ? (
                                        <Counter number={feature.count} />
                                    ) : (
                                        feature.title
                                    )}
                                </h3>
                                <p className="text-[#555555]">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </AnimatedSection>

            {/* Testimonials */}
            <AnimatedSection className="py-20 h-fit">
                <div className="mx-auto px-4">
                    <h2 className="text-4xl font-bold text-[#333333] text-center mb-12">
                        What Our Students Say
                    </h2>
                    <div>
                        <Testimonials />
                    </div>
                </div>
            </AnimatedSection>

            {/* Call-to-Action */}
            <div className="bg-gradient-to-r from-[#0020F1] to-[#080E7F] py-20">
                <AnimatedSection className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Ready to Start Your Learning Journey?
                    </h2>
                    <p className="text-xl text-white mb-8">
                        Join thousands of learners who have transformed
                        their careers with us.
                    </p>
                    <Link href={PAGE_URLS.OUR_SERVICES}>
                        <Button variant="secondary" className="px-8 py-4 ">
                            Get Started Today
                        </Button>
                    </Link>
                </AnimatedSection>
            </div>
        </div>
    );
};

export default LandingPage;
