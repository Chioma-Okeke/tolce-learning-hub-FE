"use client"

import { useForm, FormProvider } from "react-hook-form";
import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatedSection } from "@/components/shared/animated-section";
import { Mail, Phone } from "lucide-react";
import ContactForm from "@/forms/contact-form";

const contactInfo = [
    {
        title: "Email Support",
        description: "Our team can respond in real time.",
        Icon: Mail,
        contact: "tolcelearninghub@gmail.com",
    },
    {
        title: "Call Us Directly",
        description: "Available during work hours",
        Icon: Phone,
        contact: "+234 814 627 3427",
    },
];

function ContactUs() {
    const methods = useForm();
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShowSuccessModal(false);
        }, 3000);

        return () => clearTimeout(timeoutId);
    }, [showSuccessModal]);

    return (
        <AnimatedSection className="w-[90%] max-w-[1100px] md:w-[95%] mx-auto my-2">
            <div className="flex flex-col md:flex-row gap-4 lg:gap-10 max-w-[1440px] mx-auto py-12 sm:py-20 sm:pb-10">
                <div className="flex-1">
                    <Image
                        src="https://res.cloudinary.com/djrp3aaq9/image/upload/v1739046489/contact-page.jpg"
                        alt=""
                        width={100}
                        height={100}
                        className="h-[250px] w-full object-cover object-center md:h-full"
                    />
                </div>
                <div className="flex-1">
                    <FormProvider {...methods}>
                        <ContactForm />
                    </FormProvider>
                </div>
            </div>
            <div className="py-12 sm:py-20 text-base lg:text-lg flex flex-col gap-20 md:flex-row md:items-center">
                {contactInfo.map(
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
