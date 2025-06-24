import React from "react";
import { splitSentence } from "@/lib/utils";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { PAGE_URLS } from "@/constants";

type PricingCardProp = {
    index: number
    title: string
    price: string
    features: string[]
}

export const PricingCard = ({ index, title, price, features }: PricingCardProp) => {
    return (
        <div
            className={`relative md:h-[750px] lg:h-[675px] pb-10 md:pb-0 border lg:mx-auto  rounded-2xl shadow ${index === 1
                ? "text-white bg-gradient-to-r from-[#0020F1] to-[#080E7F]"
                : "bg-white text-black"
                }`}
        >
            <div className="px-5 lg:px-[31px] pt-10 flex flex-col gap-6 md:gap-4 lg:gap-10">
                <div>
                    <div className="text-lg lg:text-2xl font-bold">
                        <h2>{title}</h2>
                    </div>
                    <div className="py-2 lg:pt-5 lg:pb-4">
                        <p className="font-semibold text-2xl lg:text-4xl leading-[46px]">
                            {price}
                        </p>
                    </div>
                    <Link className="z-20 relative" target="_blank" href={PAGE_URLS.ENROLLMENT_FORM}>
                        <Button
                            variant={index === 1 ? "secondary" : "default"}
                            className={`px-6 py-3 `}
                        >
                            Enroll Now
                        </Button>
                    </Link>
                </div>
                <div>
                    {features.length > 1 && (
                        <ul className="space-y-1 lg:space-y-3">
                            {features.map((item, index) => {
                                const { topic, rest } = splitSentence(
                                    item,
                                    ":"
                                );
                                return (
                                    <li
                                        key={index}
                                        className="flex items-start gap-3 text-sm"
                                    >
                                        <CheckCircle
                                            size={20}
                                            className=" flex-shrink-0 mt-1"
                                        />
                                        <span className="">
                                            <b>{topic}</b>: {rest}
                                        </span>
                                    </li>
                                );
                            })}
                        </ul>
                    )}
                </div>
            </div>
            <div className="absolute top-0 right-0 z-0">
                <Image
                    src="/pentagon-design.svg"
                    alt=""
                    width={500}
                    height={500}
                    className="z-0 relative"
                />
            </div>
        </div>
    );
}
