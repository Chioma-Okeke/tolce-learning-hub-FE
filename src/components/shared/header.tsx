"use client"

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FOCUS_AREAS, HEADER_LINKS } from "@/constants";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, Menu, X } from "lucide-react";
import { useSidebarStore } from "@/store/side-bar-store";
import { Logo } from "./logo";

export const Header = () => {
    const { isOpen, close, toggle, isTransparent } = useSidebarStore()
    const [showSubMenus, setShowSubMenus] = useState(false);
    const [showNavItems, setShowNavItems] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (isOpen) { setShowNavItems(true)} else {setShowNavItems(false)};
        }, 300);

        return () => clearTimeout(timeoutId);
    }, [isOpen]);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
           if (!showNavItems) close();
        }, 2000);

        return () => clearTimeout(timeoutId);
    }, [showNavItems, close]);

    console.log(isTransparent, "status nav");

    return (
        <header
            className={`w-full px-8 pl-3 sm:px-20 z-40 transition-all ease-in-out duration-500 ${isTransparent
                ? "text-white fixed top-0 bg-transparent"
                : "text-[#141414] relative bg-white"
                }`}
        >
            <div
                className={`w-full flex flex-row items-center justify-between max-w-[1440px] mx-auto`}
            >
                <Link href="/">
                    <Logo/>
                </Link>
                <nav className="hidden lg:flex font-medium">
                    <ul className="list-style-none flex gap-5">
                        {HEADER_LINKS.map(({ path, label }) => {
                            return (
                                <li key={path} className="p-2">
                                    <Link
                                        className={cn("no-underline transition-all ease-in-out duration-100  hover:border-b-2", {
                                            "hover:border-b-white": isTransparent,
                                            "hover:border-b-[#0020f1] hover:text-[#0020f1]": !isTransparent,
                                            "font-bold": pathname === path
                                        })}
                                        href={path}
                                    >
                                        {label}
                                    </Link>
                                </li>
                            );
                        })}
                        <li
                            onMouseEnter={() => setShowSubMenus(true)}
                            onMouseLeave={() => setShowSubMenus(false)}
                            className="p-2 relative"
                        >
                            <div
                                className={`flex items-center gap-2 no-underline
                                            ${pathname ===
                                        "/skillacquisition" ||
                                        pathname === "/outreaches"
                                        ? " font-bold"
                                        : ` transition-all ease-in-out duration-100  hover:border-b-2  ${isTransparent
                                            ? "hover:border-b-white"
                                            : "hover:border-b-[#0020f1] hover:text-[#0020f1]"
                                        }`
                                    }
                                    `}
                            >
                                <span>Focus Areas</span>
                                <ChevronDown
                                    size={18}
                                    className={`transition-transform ease-in-out duration-100 ${showSubMenus ? "-rotate-180" : ""
                                        }`}
                                />
                            </div>
                            <div>
                                {showSubMenus && (
                                    <ul
                                        className={`absolute top-full left-0 bg-white shadow-lg w-fit ${isTransparent
                                            ? "text-[#141414]"
                                            : ""
                                            }`}
                                    >
                                        {FOCUS_AREAS.map(
                                            ({ path, label }) => {
                                                return (
                                                    <li
                                                        key={path}
                                                        className="p-2"
                                                    >
                                                        <Link
                                                            className={cn("flex items-center gap-2 no-underline transition-all ease-in-out duration-100 hover:border-b-[#0020f1] hover:border-b-2 hover:text-[#0020f1]", {
                                                                "font-bold": pathname === path
                                                            })}
                                                            href={path}
                                                        >
                                                            {label}
                                                        </Link>
                                                    </li>
                                                );
                                            }
                                        )}
                                    </ul>
                                )}
                            </div>
                        </li>
                    </ul>
                </nav>

                {/* mobile-view start from here */}
                <div onClick={toggle} className="block lg:hidden">
                    <Menu
                        size={20}
                        cursor={"pointer"}
                        className="hover:scale-110"
                    />
                </div>
                <AnimatePresence>
                    <div
                        className={`overflow-auto fixed top-0 w-full h-full bg-black py-2 transition-all ease-in-out duration-1000 
                    ${isOpen ? "left-0" : "left-[-100%]"}
                `}
                    >
                        <div className="flex justify-between items-center pr-4 mb-8">
                            <Link href="/">
                                <Logo />
                            </Link>
                            <div
                                onClick={() => close()}
                                className="block lg:hidden"
                            >
                                <X
                                    size={20}
                                    cursor={"pointer"}
                                    className="hover:scale-110"
                                    color="white"
                                />
                            </div>
                        </div>
                        <AnimatePresence>
                            {showNavItems && (
                                <ul className="px-4 text-white">
                                    {HEADER_LINKS.map(({ path, label }, index) => {
                                        return (
                                            <motion.li
                                                initial={{
                                                    opacity: 0,
                                                    x: "-100%",
                                                }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{
                                                    duration: 1,
                                                    ease: "easeInOut",
                                                    delay: index * 0.2,
                                                }}
                                                key={path}
                                                className="py-3"
                                            >
                                                <Link
                                                    onClick={() =>
                                                        close()
                                                    }
                                                    className={cn("hover:border-b-white hover:border-b-2 no-underline text-xl", {
                                                        "font-bold": pathname === path
                                                    })}
                                                    href={path}
                                                >
                                                    {label}
                                                </Link>
                                            </motion.li>
                                        );
                                    })}
                                    <motion.li
                                        initial={{
                                            opacity: 0,
                                            x: "-100%",
                                        }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                            duration: 1,
                                            ease: "easeInOut",
                                            delay: 0.8,
                                        }}
                                        onClick={() =>
                                            setShowSubMenus(
                                                (prevState) => !prevState
                                            )
                                        }
                                        className="relative w-fit py-3"
                                    >
                                        <div
                                            className={`flex items-center gap-2 text-xl no-underline " 
                                            ${pathname ===
                                                    "/skillacquisition" ||
                                                    pathname === "/outreaches"
                                                    ? "font-bold"
                                                    : "transition-all ease-in-out duration-100 hover:border-b-white hover:border-b-2"
                                                }
                                    `}
                                        >
                                            <span>Focus Areas</span>
                                            <ChevronDown
                                                size={18}
                                                className={`transition-transform ease-in-out duration-100 ${showSubMenus
                                                    ? "-rotate-180"
                                                    : ""
                                                    }`}
                                            />
                                        </div>
                                        <div>
                                            {showSubMenus && (
                                                <ul
                                                    className={`absolute top-full left-0 bg-white shadow-lg w-fit text-[#141414]`}
                                                >
                                                    {FOCUS_AREAS.map(
                                                        ({ path, label }) => {
                                                            return (
                                                                <li
                                                                    key={path}
                                                                    className="p-2"
                                                                >
                                                                    <Link
                                                                        onClick={() =>
                                                                            close()
                                                                        }
                                                                        className={cn("flex items-center gap-2 no-underline transition-all ease-in-out duration-100 hover:border-b-[#0020f1] hover:border-b-2 hover:text-[#0020f1]", {
                                                                            "font-bold": pathname === path
                                                                        })}
                                                                        href={
                                                                            path
                                                                        }
                                                                    >
                                                                        {label}
                                                                    </Link>
                                                                </li>
                                                            );
                                                        }
                                                    )}
                                                </ul>
                                            )}
                                        </div>
                                    </motion.li>
                                </ul>
                            )}
                        </AnimatePresence>
                    </div>
                </AnimatePresence>
            </div>
        </header>
    );
}
