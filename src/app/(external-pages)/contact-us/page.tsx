"use client"

import Image from "next/image";

import ContactForm from "@/forms/contact-form";
import { CONTACT_INFORMATION } from "@/constants";
import { AnimatedSection } from "@/components/shared/animated-section";

function ContactUs() {

    return (
        <AnimatedSection className="w-[90%] max-w-[1100px] md:w-[95%] mx-auto my-2">
            <div className="flex flex-col md:flex-row gap-4 lg:gap-10 max-w-[1440px] mx-auto py-12 sm:py-20 sm:pb-10">
                <div className="md:flex-1 h-[250px] w-full md:h-[550px] relative overflow-hidden">
                    <Image
                        src="https://res.cloudinary.com/djrp3aaq9/image/upload/v1739046489/contact-page.jpg"
                        alt=""
                        fill
                        sizes="100vw"
                        className="object-cover object-center"
                        priority
                    />
                </div>
                <div className="md:flex-1">
                    <ContactForm />
                </div>
            </div>
            <div className="py-12 sm:py-20 text-base lg:text-lg flex flex-col gap-20 md:flex-row md:items-center">
                {CONTACT_INFORMATION.map(
                    ({ title, description, Icon, contact }, index) => {
                        return (
                            <div
                                key={index}
                                className="flex flex-col gap-2"
                            >
                                <div className="bg-[#EAF6F2] rounded-full w-fit p-3">
                                    <Icon className="w-8 h-8 text-[#3A8DFF]" />
                                </div>
                                <p className="font-bold mt-2">{title}</p>
                                <p>{description}</p>
                                <p>{contact}</p>
                            </div>
                        );
                    }
                )}
            </div>
        </AnimatedSection>
    );
}

export default ContactUs;
