"use client"

import { FAQ_DATA } from "@/components/utils/faqs";
import { useState } from "react";
import { FaqItems } from "./faq-items";

export const Questions = ({scrollToServices}: {scrollToServices: () => void}) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    
    return (
        <div className="h-fit w-[90%] sm:w-[80%] mx-auto flex items-center justify-center">
            <div className={`w-full sm:w-[80%] mx-auto ${currentIndex !== null ? "min-h-[630px]" : ""}`}>
                <h1 className="font-semibold text-2xl lg:text-4xl pb-[10px] lg:py-6 xl:text-[40px] text-center">
                    Frequently Asked Questions
                </h1>
                <p className="text-base xl:text-lg text-center mb-8">
                    Everything you need to know about the product and billing
                </p>
                {FAQ_DATA.map(({ id, question, answer }) => {
                    return (
                        <FaqItems
                            key={id}
                            question={question}
                            answer={answer}
                            index={id}
                            currentIndex={currentIndex}
                            scrollToServices={scrollToServices}
                            setCurrentIndex={setCurrentIndex}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Questions;
