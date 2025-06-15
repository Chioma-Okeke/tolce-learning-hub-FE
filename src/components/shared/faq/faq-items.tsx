import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle, Minus, Plus } from "lucide-react";

type FaqItemsProp = {
    question: string
    answer: string
    index: number
    currentIndex: number
    setCurrentIndex: (value: number) => void
    scrollToServices: () => void
}

export const FaqItems = ({
    question,
    answer,
    index,
    currentIndex,
    setCurrentIndex,
    scrollToServices
}: FaqItemsProp) => {
    const isOpen = currentIndex === index;

    const toggleOpen = (index: number) => {
        setCurrentIndex(isOpen ? 0 : index);
    };

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
        <div className="border-b border-gray-200 py-4 pb-3 w-full h-fit">
            <div
                tabIndex={0}
                className="flex justify-between items-center cursor-pointer bg-white"
                onClick={() => toggleOpen(index)}
            >
                <h3
                    className={`text-base text-[#141414] lg:text-lg transition-all ease-in-out duration-300 ${isOpen ? "font-bold" : "font-medium"
                        }`}
                >
                    {question}
                </h3>
                <button className="w-fit p-1 transition ease-out lg:hover:scale-150 duration-300 rounded-full border border-solid border-[#475467]">
                    {isOpen ? <Minus /> : <Plus />}
                </button>
            </div>
            <AnimatePresence mode="wait">
                {isOpen && (
                    <motion.div
                        initial={{ y: -20 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mt-4 lg:text-lg text-[#141414] bg-white"
                    >
                        {convertAnswer(answer)}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
