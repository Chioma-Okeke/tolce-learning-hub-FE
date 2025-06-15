"use client"

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TEAM_MEMBERS, TEAM_MEMBERS_IMAGES } from "@/constants";
import Image from "next/image";

export const TeamMembers = () => {
    const [focusedIndex, setFocusedIndex] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout>(null);

    const handlePrevious = () => {
        resetAutoTransition();
        setFocusedIndex((prev) =>
            prev === 0 ? TEAM_MEMBERS.length - 1 : prev - 1
        );
    };

    const handleNext = () => {
        resetAutoTransition();
        setFocusedIndex((prev) =>
            prev === TEAM_MEMBERS.length - 1 ? 0 : prev + 1
        );
    };

    const startAutoTransition = () => {
        stopAutoTransition();
        intervalRef.current = setInterval(() => {
            setFocusedIndex((prev) =>
                prev === TEAM_MEMBERS.length - 1 ? 0 : prev + 1
            );
        }, 5000);
    };

    const stopAutoTransition = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    const resetAutoTransition = () => {
        stopAutoTransition();
        startAutoTransition();
    };

    useEffect(() => {
        startAutoTransition();

        return () => stopAutoTransition();
    });

    const focusedMember = TEAM_MEMBERS[focusedIndex];

    return (
        <section
            className="w-[90%] max-w-[650px] md:max-w-[1170px] mx-auto text-base md:text-lg overflow-hidden py-12 sm:py-20"
            onMouseEnter={stopAutoTransition}
            onMouseLeave={startAutoTransition}
        >
            <h4 className="font-semibold text-white text-2xl lg:text-4xl xl:text-[40px] text-center border-b-2 pb-16 mb-8">
                We’re a community of collaborators who dare to think bigger and
                do more together
            </h4>
            <div className="flex flex-col md:flex-row items-center gap-8 md:h-[451px]">
                {/* Previous Button */}
                {TEAM_MEMBERS.length > 1 && (
                    <button
                        onClick={handlePrevious}
                        aria-label="Previous Member"
                        className="hidden lg:block"
                    >
                        <ChevronLeft size={24} />
                    </button>
                )}

                {/* Team Member Details */}
                <div className="flex-1 flex flex-col items-center md:items-start gap-6">
                    {/* <p className="text-lg font-semibold text-center md:text-left">
                        Meet the people behind our mission
                    </p> */}
                    {/* Team Leaders */}
                    {TEAM_MEMBERS.length > 1 && (
                        <div className="flex items-center gap-3">
                            {TEAM_MEMBERS_IMAGES.map((leader, index) => (
                                <Image
                                    key={index}
                                    src={leader.imgSrc}
                                    alt={leader.name}
                                    onClick={() => setFocusedIndex(index)}
                                    className={`rounded-full w-[55px] lg:w-[70px] h-[55px] lg:h-[70px] object-center object-cover transition-opacity duration-300 hover:opacity-70 ${
                                        leader.name === focusedMember.name
                                            ? "opacity-100"
                                            : "opacity-50"
                                    }`}
                                />
                            ))}
                        </div>
                    )}

                    {/* Member Message & Details */}
                    <div
                        className={`max-w-[515px]  md:w-full ${
                            TEAM_MEMBERS.length > 1 ? "min-h-[270px]" : ""
                        }`}
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={focusedIndex}
                                initial={{ opacity: 0.5 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0.5 }}
                                transition={{
                                    ease: "easeInOut",
                                    duration: 0.5,
                                }}
                                className="text-center md:text-left"
                            >
                                <p className="mb-4 ">
                                    &quot;{focusedMember.message}&quot;
                                </p>
                                <p className="font-bold mb-1">
                                    - {focusedMember.name}
                                </p>
                                <p>{focusedMember.role}</p>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Member Image */}
                <div className="flex-1">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={focusedIndex}
                            src={focusedMember.imgSrc}
                            alt={focusedMember.name}
                            initial={{ opacity: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0.5 }}
                            transition={{ ease: "easeInOut", duration: 0.5 }}
                            className="rounded-lg w-[515px] h-[370px] md:max-h-[370px] aspect-[4/3] object-cover object-top"
                        />
                    </AnimatePresence>
                </div>

                {/* Next Button */}
                {TEAM_MEMBERS.length > 1 && (
                    <button
                        onClick={handleNext}
                        aria-label="Next Member"
                        className="hidden lg:block"
                    >
                        <ChevronRight size={24} />
                    </button>
                )}

                {/* combined buttons */}
                {TEAM_MEMBERS.length > 1 && (
                    <div className="md:hidden flex items-center justify-center">
                        <button
                            onClick={handlePrevious}
                            aria-label="Previous Member"
                            className=""
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={handleNext}
                            aria-label="Next Member"
                            className=""
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
