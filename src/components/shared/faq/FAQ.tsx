import { FAQ_DATA } from "@/components/utils/faqs";
import { FaqItems } from "./faq-items";

export const Questions = ({scrollToServices}: {scrollToServices: () => void}) => {
    
    return (
        <div className="h-fit w-[90%] sm:w-[80%] mx-auto flex items-center justify-center">
            <div className={`w-full sm:w-[80%] mx-auto`}>
                <h1 className="font-semibold text-2xl lg:text-4xl pb-[10px] lg:py-6 xl:text-[40px] text-center">
                    Frequently Asked Questions
                </h1>
                <p className="text-base xl:text-lg text-center mb-8">
                    Everything you need to know about the product and billing
                </p>
                <FaqItems faqs={FAQ_DATA} scrollToServices={scrollToServices}/>
            </div>
        </div>
    );
}

export default Questions;
