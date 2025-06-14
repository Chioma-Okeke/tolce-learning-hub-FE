import { useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/effect-fade";
import { TESTIMONIALS } from "../utils/testimonials";
import { Banner } from "./Banner";
import Image from "next/image";

function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const testimonialRef = useRef<HTMLDivElement[]>([]);
    const intervalRef = useRef<NodeJS.Timeout>(null);

    function scrollToCard(index: number) {
        const container = containerRef.current;
        if (container) {
            const containerWidth = container.offsetWidth; 
            const cardWidth = container.scrollWidth / TESTIMONIALS.length;
            const scrollAmount =
                index * cardWidth - (containerWidth - cardWidth) / 2;

            container.scrollTo({
                left: scrollAmount,
                behavior: "smooth",
            });
        }
    }

    function startAutoScroll() {
        intervalRef.current = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex >= TESTIMONIALS.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);
    }

    function stopAutoScroll() {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    }

    useEffect(() => {
        if (!isPaused) {
            startAutoScroll();
        } else {
            stopAutoScroll();
        }

        return () => stopAutoScroll();
    }, [isPaused]);

    useEffect(() => {
        scrollToCard(currentIndex);
    }, [currentIndex]);

    return (
        <div className="mx-auto md:w-[90%] max-w-[1200px] overflow-hidden">
            <div
                ref={containerRef}
                className="hidden md:flex overflow-x-auto gap-10 items-center testimonial-carousel h-[400px]"
            >
                {TESTIMONIALS.map((testimonial, index) => (
                    <div
                        key={testimonial.id}
                        ref={(el) => {
                            if (el) {
                                testimonialRef.current[index] = el;
                            }
                        }}
                        className={`transition-opacity duration-500 ${
                            currentIndex === index
                                ? "opacity-100"
                                : "opacity-45"
                        }`}
                    >
                        <div
                            tabIndex={0}
                            onMouseEnter={() =>
                                currentIndex === index && setIsPaused(true)
                            }
                            onMouseLeave={() => setIsPaused(false)}
                            onClick={() => setCurrentIndex(index)}
                            className={`flex flex-col gap-4 text-lg p-6 rounded-lg shadow-lg border bg-white transition-opacity duration-500 ${
                                currentIndex === index
                                    ? "opacity-80 w-[610px] text-lg backdrop-blur-md"
                                    : "opacity-40 w-[505px] text-sm cursor-pointer hover:opacity-60"
                            }`}
                        >
                            <div className="flex items-center gap-5">
                                <Image
                                    width={100}
                                    height={100}
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    loading="lazy"
                                    className="rounded-full w-[60%] sm:w-[20%] bg-slate-100"
                                />
                                <div>
                                    <p className="font-bold">
                                        {testimonial.name}
                                    </p>
                                    <h2 className="font-semibold mb-4">
                                        {testimonial.cohort}
                                    </h2>
                                </div>
                            </div>
                            <p className="mb-2">{testimonial.message}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="md:hidden">
                <Banner testimonialData={TESTIMONIALS} />
            </div>
        </div>
    );
}

export default Testimonials;
