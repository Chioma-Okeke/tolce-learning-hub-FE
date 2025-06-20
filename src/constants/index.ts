import {
    BookCheckIcon,
    CalendarDaysIcon,
    ChartColumn,
    GraduationCap,
    Heart,
    HeartHandshakeIcon,
    Instagram,
    Linkedin,
    ShieldCheck,
    TimerReset,
    Trophy,
    User,
    User2,
    Users,
} from "lucide-react";

export const PAGE_URLS = {
    HOME: "/",
    ABOUT_US: "/about-us",
    OUR_SERVICES: "/our-services",
    CONTACT_US: "/contact-us",
    OUTREACHES: "/outreaches",
    SKILL_ACQUISITION: "/skill-acquisition",
    NEWSLETTER_SUBSCRIPTION: "https://tolce.substack.com/subscribe?utm_source=menu&simple=true&next=https%3A%2F%2Ftolce.substack.com%2Fp%2Fwelcome-on-board"
}

export const FOOTER_LINKS = [
    {
        name: "Services",
        link: "/our-services",
    },
    {
        name: "About Us",
        link: "/about-us",
    },
    {
        name: "Contact",
        link: "/contact-us",
    },
];

export const CONTACT_LINKS = [
    {
        Icon: Instagram,
        link: "https://www.instagram.com/p/DFhm9cAtRSV/",
    },
    {
        Icon: Linkedin,
        link: "https://www.linkedin.com/posts/ace-learning-hub_tolcelearninghub ",
    },
];

export const HEADER_LINKS = [
    { path: "/", label: "Home" },
    { path: "/about-us", label: "About Us" },
    { path: "/our-services", label: "Our Services" },
    { path: "/contact-us", label: "Contact Us" },
];

export const FEATURES = [
    {
        icon: TimerReset,
        title: "Flexible Learning",
        description:
            "Learn at your own pace with our flexible scheduling options",
    },
    {
        icon: User2,
        title: "Expert Instructors",
        description:
            "Learn from industry professionals with years of experience",
    },
    {
        icon: Users,
        title: "10,000+ Children Reached",
        description:
            "Our programs have inspired thousands of children worldwide",
        isCounter: true,
        count: 10000,
    },
    {
        icon: Trophy,
        title: "5,000+ Students Trained",
        description:
            "Equipping learners with the skills to thrive in their careers",
        isCounter: true,
        count: 5000,
    },
];

export const FOCUS_AREAS = [
    { 
        path: "/skill-acquisition",
        imgSrc: "/skill-acquisition-1.jpg",
        label: "Skill Acquisition",
        description: "Empowering students with technical expertise and essential soft skills to excel in data-driven decision-making and thrive in dynamic workplace environments." 
    },
    { 
        path: "/outreaches",
        imgSrc: "https://res.cloudinary.com/djrp3aaq9/image/upload/v1739048056/outreach-1.jpg",
        label: "Outreaches",
        description: "Empowering students with technical expertise and essential soft skills to excel in data-driven decision-making and thrive in dynamic workplace environments." 
    },
    
];

export const COMPANY_VALUES = [
    {
        id: 1,
        Icon: ChartColumn,
        value: "Personal Development",
        description:
            "We believe that investing in oneself is the greatest form of investment. We are BIG on continuous self-improvement and growth, encouraging lifelong learning and self-awareness to reach one's full potential.",
    },
    {
        id: 2,
        Icon: ShieldCheck,
        value: "Integrity",
        description:
            "We are honest and uphold strong moral principles. We do what is right even when no one is watching and are truthful in our actions and words.",
    },
    {
        id: 3,
        Icon: GraduationCap,
        value: "Continuous Professional Development",
        description:
            "We actively seek opportunities to learn and grow, staying current with industry trends to enhance our skills and adapt to new challenges.",
    },
    {
        id: 4,
        Icon: HeartHandshakeIcon,
        value: "Service",
        description:
            "We believe we rise by serving. As students get equipped, they use acquired skills to solve problems in local communities through outreaches.",
    },
];

export const SELLING_POINTS = [
    {
        Icon: BookCheckIcon,
        title: "Holistic Approach to Learning",
        message:
            "Our programs cover both digital and soft skills, ensuring well-rounded personal and professional development.",
    },
    {
        Icon: CalendarDaysIcon,
        title: "Flexible Learning",
        message:
            "Catering to various learning styles and schedules with self-paced modules, live sessions, and mentoring.",
    },
    {
        Icon: User,
        title: "Expert Instructors",
        message:
            "Learn from industry experts with real-world experience and a passion for teaching.",
    },
    {
        Icon: Heart,
        title: "Corporate Social Responsibility",
        message:
            " Solving global problems through various community projects which tend to build problem solving skills of students.",
    },
];

export const galleryCategoriesImages = [
    {
        id: 1,
        imageLink:
            "https://res.cloudinary.com/djrp3aaq9/image/upload/v1739048056/outreach-1.jpg",
    },
    {
        id: 2,
        imageLink:
            "https://res.cloudinary.com/djrp3aaq9/image/upload/v1739048056/outreach-2.jpg",
    },
    {
        id: 3,
        imageLink:
            "https://res.cloudinary.com/djrp3aaq9/image/upload/v1739048056/outreach-3.jpg",
    },
    {
        id: 4,
        imageLink:
            "https://res.cloudinary.com/djrp3aaq9/image/upload/v1739048057/outreach-4.jpg",
    },
    {
        id: 5,
        imageLink:
            "https://res.cloudinary.com/djrp3aaq9/image/upload/v1739048058/outreach-5.jpg",
    },
    {
        id: 6,
        imageLink:
            "https://res.cloudinary.com/djrp3aaq9/image/upload/v1739048058/outreach-6.jpg",
    },
    {
        id: 7,
        imageLink:
            "https://res.cloudinary.com/djrp3aaq9/image/upload/v1739048058/outreach-7.jpg",
    },
    {
        id: 8,
        imageLink:
            "https://res.cloudinary.com/djrp3aaq9/image/upload/v1739048059/outreach-8.jpg",
    },
];

export const HERO_DATA = [
    {
        id: 1,
        image: "https://res.cloudinary.com/djrp3aaq9/image/upload/v1738848578/vld0qs3b6x5vpgccvfae.jpg",
        text: "Bridging the gap between the Classroom and Corporate environment",
    },
    {
        id: 2,
        image: "https://res.cloudinary.com/djrp3aaq9/image/upload/v1738848638/stbc01fq8i8043ulxqw6.jpg",
        text: "Empowering students with real-world skills ",
    },
    {
        id: 3,
        image: "https://res.cloudinary.com/djrp3aaq9/image/upload/v1738848590/o5yw9l2f0ru6jer47tcu.jpg",
        text: "Building Intellectually sound and exceptionally skillful youths.",
    },
];

export const TEAM_MEMBERS = [
    {
        id: "123",
        name: "Tolu",
        message:
            "We are raising a new generation of intellectually sound youths who are well equipped with the required skills to solve global problems and make massive impact in their communities.",
        role: "Founder",
        imgSrc: "/ceo/ceo-portrait.jpg",
    },
];

export const TEAM_MEMBERS_IMAGES = [
    {
        name: "Tolu",
        imgSrc: "/ceo/ceo-portrait.jpg",
    },
];

export const SKILLS_HIGHLIGHT = [
    {
        title: "Technical Skills",
        skills: ["Excel", "Power BI", "Data Analysis", "Presentation Tools"],
    },
    {
        title: "Soft Skills",
        skills: [
            "Communication",
            "Teamwork",
            "Problem-Solving",
            "Critical Thinking",
        ],
    },
];

export const PROGRAM_BENEFITS = [
    {
        icon: "🎯",
        title: "Competitive Edge",
        description:
            "Comprehensive skill development for modern workplace demands",
    },
    {
        icon: "💼",
        title: "Career Readiness",
        description:
            "Balanced approach to technical and interpersonal skill growth",
    },
    {
        icon: "🚀",
        title: "Professional Development",
        description:
            "Preparing students for dynamic and evolving work environments",
    },
];
