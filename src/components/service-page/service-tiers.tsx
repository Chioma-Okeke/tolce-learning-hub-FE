"use client"

import React, { useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { PROGRAM_DATA, SUMMARIZED_PROGRAM_DATA } from "../utils/program-data";
import { PricingCard } from "../pricing/pricing-card";
import { cn, splitSentence } from "@/lib/utils";
import { CheckCircle } from "lucide-react";

const ServiceTiers = () => {
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [ref, inView] = useInView();
    const [activeTab, setActiveTab] = useState("beginners");

    const mainControls = useAnimation();

    React.useEffect(() => {
        if (inView) {
            mainControls.start("visible");
        }
    }, [inView, mainControls]);

    return (
        <div className="py-12 sm:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-center mb-12 border-b relative overflow-auto">
                    {Object.keys(SUMMARIZED_PROGRAM_DATA).map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={cn('relative cursor-pointer px-8 py-4 sm:text-lg font-semibold transition-all ease-linear duration-300 hover:text-[#0020F1] text-[#555555]', {
                                "text-[#0020F1]": activeTab === tab
                            })}
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)} Program
                            <div
                                className={cn("absolute bg-[#0020F1] h-[2px] w-full bottom-0 left-0 transition-transform ease-in-out duration-300 transform scale-x-0", {
                                    "transform scale-x-100": activeTab === tab
                                })}
                            ></div>
                        </button>
                    ))}
                </div>

                <motion.div
                    ref={ref}
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: {
                            opacity: 1,
                            transition: { duration: 0.4, delay: 0.1 },
                            y: 0,
                        },
                    }}
                    initial="hidden"
                    animate={mainControls}
                    className={`${SUMMARIZED_PROGRAM_DATA[activeTab as keyof typeof SUMMARIZED_PROGRAM_DATA].packages.length > 1
                        ? "grid"
                        : ""
                        } md:grid-cols-2 gap-8 pb-10`}
                >
                    {SUMMARIZED_PROGRAM_DATA[activeTab as keyof typeof SUMMARIZED_PROGRAM_DATA].packages.map(
                        (package_, index) => (
                            <div
                                key={package_.id}
                                ref={(el) => {
                                    if (cardRefs.current) {
                                        cardRefs.current[index] = el;
                                    }
                                }}
                                className="lg:max-w-2xl lg:mx-auto"
                            >
                                <PricingCard
                                    index={index}
                                    title={package_.title}
                                    price={package_.price}
                                    features={package_.features ?? []}
                                />
                            </div>
                        )
                    )}
                </motion.div>
                <div className=" space-y-3">
                    <h3 className="text-2xl lg:text-3xl font-semibold text-[#333333] lg:mb-2">
                        Additional Features{" "}
                    </h3>
                    <ul className="space-y-3 pl-3 text-base xl:text-lg">
                        {PROGRAM_DATA[activeTab as keyof typeof PROGRAM_DATA].additionalFeatures?.map(
                            (item, index) => {
                                const { topic, rest } = splitSentence(
                                    item,
                                    ":"
                                );
                                return (
                                    <li
                                        key={index}
                                        className="flex items-start gap-3"
                                    >
                                        <CheckCircle
                                            size={20}
                                            className="text-[#0020F1] flex-shrink-0 mt-1"
                                        />
                                        <span className="text-[#555555]">
                                            <b>{topic}</b>: {rest}
                                        </span>
                                    </li>
                                );
                            }
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ServiceTiers;
