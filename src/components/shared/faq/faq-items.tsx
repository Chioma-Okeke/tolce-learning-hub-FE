import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { CheckCircle, Minus, Plus } from "lucide-react";

type FaqItemsProp = {
    faqs: {
        id: string,
        question: string,
        answer: string,
        isLink: boolean,
    }[]
    containerClass?: string
    scrollToServices: () => void
}

export const FaqItems = ({
    faqs,
    containerClass,
    scrollToServices
}: FaqItemsProp) => {

    const convertAnswer = (answer: string) => {
        const hasList = answer.includes("*")
        const isClickable = answer.includes("Click me")
        if (!hasList && !isClickable) return <span>{answer}</span>;

        if (isClickable) {
            const clickableText = "Click me"
            const remainder = answer.slice(clickableText.length)
            return (
                <p>
                    <span
                        className="text-blue-500 cursor-pointer underline font-medium"
                        onClick={scrollToServices}
                    >
                        {clickableText}
                    </span>
                    {remainder}
                </p>
            );
        }

        const [intro, ...listItems] = answer.split("*");

        return (
            <div>
                <p className="mb-5">{intro}</p>
                <ul className="space-y-1 lg:space-y-3">
                    {listItems.slice(1).map((item, index) => {
                        return (
                            <li
                                key={index}
                                className="flex gap-3 "
                            >
                                <CheckCircle
                                    size={18}
                                    className=" flex-shrink-0 mt-1"
                                />
                                <span className="">{item.trim()}</span>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    };

    return (
        <Accordion
            type="single"
            collapsible
            className={cn("border-b border-gray-200 py-4 pb-3 w-full h-fit", containerClass)}
        >
            {faqs.map((faq) => (
                <AccordionItem
                    key={faq.id}
                    value={faq.id}
                    className="border-b border-transparent p-2 transition-colors duration-300 ease-in-out [&[data-state=open]]:border-greyscale-border-default"
                >
                    <AccordionTrigger
                        showDropdownIcon={false}
                        className="cursor-pointer group flex w-full items-center hover:font-semibold transition-all ease-in-out duration-500 hover:no-underline justify-between border-none py-2 text-left text-xl font-normal text-greyscale-text-title [&[data-state=open]]:font-semibold"
                    >
                        <span>{faq.question}</span>
                        <span className="flex size-8 items-center justify-center cursor-pointer">
                            <Plus className="text-semantics-surface-default hover:scale-110 group-[&[data-state=open]]:hidden" />
                            <Minus className="hidden text-semantics-surface-default hover:scale-110 group-[&[data-state=open]]:block" />
                        </span>
                    </AccordionTrigger>

                    <AccordionContent className="text-base max-w-[817px] pb-4 text-greyscale-text-body">
                        {convertAnswer(faq.answer)}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
};
