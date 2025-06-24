"use client"

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { galleryCategoriesImages } from "@/constants";
import { AnimatedSection } from "@/components/shared/animated-section";
import { useSidebarStore } from "@/store/side-bar-store";
import ImageDisplay from "@/modals/image-display";
import { Counter } from "@/components/shared/Counter";
import { useLockScreenStore } from "@/store/screen-lock-store";
import { Button } from "@/components/ui/button";
import { useWindowWidth } from "@/hooks/use-width";

const stats = [
    { number: 600, label: "Children Reached" },
    { number: 9, label: "Outreach Events Organized" },
    { number: 5, label: "Reading Clubs Set" },
];

function Outreaches() {
    const [animate, setAnimate] = useState(false);
    const { isLocked, toggleLock } = useLockScreenStore()
    const [isLoading, setIsLoading] = useState(true)
    const { makeTransparent } = useSidebarStore()
    const width = useWindowWidth()
    const [visibleImagesLimit, setVisibleImagesLimit] = useState(4);
    const [focusedIndex, setFocusedIndex] = useState<number>(0);
    const imageContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (
            visibleImagesLimit !== galleryCategoriesImages.length &&
            imageContainerRef.current
        ) {
            imageContainerRef.current.scrollIntoView({
                block: "start",
                behavior: "smooth",
            });
        }
    }, [visibleImagesLimit]);

    useEffect(() => {
        document.body.style.overflow = isLocked ? "hidden" : "auto";

        return () => { document.body.style.overflow = "auto" };
    }, [isLocked]);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        if (width && width > 1024) {
            setVisibleImagesLimit(6);
        } else {
            setVisibleImagesLimit(4)
        }
    }, [width]);

    const revealPageContent = () => {
        setAnimate(true);
        makeTransparent(false)
        setTimeout(() => {
            toggleLock();
        }, 2000);
    };

    function loadFullImageList(desktopLimit: number, mobileLimit: number) {
        const limit = width > 1024 ? desktopLimit : mobileLimit;

        setVisibleImagesLimit((prevLimit) =>
            prevLimit === galleryCategoriesImages.length
                ? limit
                : galleryCategoriesImages.length
        );
    }

    return (
        <main className={"relative"}>
            <AnimatePresence mode="wait">
                {!animate && (
                    <motion.div
                        key="hero-section"
                        initial={{ y: 0 }}
                        exit={{ y: "-100%" }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        className={`w-full h-screen relative z-10 bg-gray-400`}
                    >
                        <video
                            loop
                            muted
                            autoPlay
                            playsInline
                            className="w-full h-full object-cover object-center absolute right-0 bottom-0 -z-20 background-video"
                        >
                            <source src="/outreaches/outreach-hero-video.mp4" type="video/mp4" />
                        </video>

                        <div className="bg-black h-full absolute top-0 left-0 opacity-50 w-full -z-10"></div>
                        <div className="w-[90%] mx-auto max-w-[1440px] z-30 flex flex-col justify-center items-center h-full">
                            <div className="relative text-center mb-10">
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 font-inter">
                                    Making a Difference Together
                                </h1>
                                <p className="text-xl sm:text-3xl lg:text-4xl text-white font-inter">
                                    Explore moments from our impactful community
                                    outreach programs.
                                </p>
                            </div>
                            {galleryCategoriesImages &&
                                galleryCategoriesImages.length > 0 && (
                                    <Button variant={"outline"}
                                        onClick={revealPageContent}
                                        className="border-white text-white hover:text-[#0020F1] lg:text-xl"
                                    >
                                        Explore
                                    </Button>
                                )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            {animate && (
                <div
                    key="main-content"
                    className={`relative w-full ${animate ? "h-auto" : "h-0"
                        } bg-white`}
                >
                    {/* Highlights Section */}
                    <section className="py-12 sm:py-20 bg-[#F7F9FC]">
                        <AnimatedSection>
                            <div className="max-w-7xl mx-auto px-4">
                                <h2 className="font-semibold text-2xl lg:text-4xl mb-12 lg:py-6 xl:text-[40px] text-center">
                                    Our Impact in Numbers
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    {stats.map((stat, index) => (
                                        <div
                                            key={index}
                                            className="text-center"
                                        >
                                            <div className="text-2xl font-bold text-[#0020F1] mb-2">
                                                <Counter number={stat.number} />
                                            </div>
                                            <div className="text-base text-[#555555]">
                                                {stat.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </AnimatedSection>
                    </section>

                    {/* Gallery Section */}
                    <section className="py-12 sm:py-20">
                        <AnimatedSection>
                            <div className="max-w-7xl mx-auto px-4">
                                <h2 className="font-semibold text-2xl lg:text-4xl lg:py-6 xl:text-[40px] mb-12 text-center">
                                    Gallery of Our Activities
                                </h2>
                                <div
                                    ref={imageContainerRef}
                                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
                                >
                                    <AnimatePresence>
                                        {galleryCategoriesImages
                                            .slice(0, visibleImagesLimit)
                                            .map((image, imageIndex) => {
                                                console.log(visibleImagesLimit, "limit")
                                                return <ImageDisplay
                                                    key={imageIndex}
                                                    setFocusedIndex={setFocusedIndex}
                                                    focusedIndex={focusedIndex}
                                                    image={image}
                                                    imageIndex={imageIndex}
                                                    isLoading={isLoading}
                                                    setIsLoading={setIsLoading}
                                                />
                                            })}
                                    </AnimatePresence>
                                </div>
                                {
                                    <div className="pt-10 flex justify-center">
                                        <motion.button
                                            onClick={() => loadFullImageList(6, 4)}
                                            initial={{ scale: 1 }}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="text-white cursor-pointer px-8 py-3 rounded-lg font-semibold text-lg w-fit bg-[#0020F1] transition ease-linear hover:bg-[#080E7F] duration-300"
                                        >
                                            {visibleImagesLimit ===
                                                galleryCategoriesImages.length
                                                ? "Collapse"
                                                : "Load More"}
                                        </motion.button>
                                    </div>
                                }
                            </div>
                        </AnimatedSection>
                    </section>

                    {/* Featured Story Section */}
                    <section className="relative h-[400px]">
                        <AnimatedSection className="h-full">
                            <div className="h-full">
                                <video
                                    loop
                                    muted
                                    autoPlay
                                    playsInline
                                    className="w-full h-full object-cover object-center -z-10 background-video"
                                >
                                    <source
                                        src={'/outreaches/outreach-section-video.mp4'}
                                        type="video/mp4"
                                    />
                                </video>
                                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10">
                                    <div className="max-w-7xl mx-auto px-4 h-full flex flex-col justify-end pb-16">
                                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                                            Be a Part of the Change
                                        </h2>
                                        <p className="text-lg sm:text-xl text-white mb-6">
                                            Join our mission to empower communities
                                            through impactful outreach.
                                        </p>

                                        <div className="flex flex-col sm:flex-row gap-4 items-center">
                                            <Button variant={"secondary"}>
                                                Volunteer With Us
                                            </Button>
                                            <Button>
                                                Donate Now
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    </section>
                </div>
            )}
        </main>
    );
}

export default Outreaches;
