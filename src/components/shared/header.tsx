"use client"

import { useEffect, useState, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { HEADER_LINKS, PAGE_URLS } from "@/constants";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useSidebarStore } from "@/store/side-bar-store";
import { Logo } from "./logo";
import FocusAreaDropdown from "@/components/shared/header/focus-area-dropdown"
import { useWindowWidth } from "@/hooks/use-width";

export const Header = () => {
    const { isOpen, close, toggle } = useSidebarStore()
    const [showNavItems, setShowNavItems] = useState(false);
    const pathname = usePathname();
    const width = useWindowWidth()
    const headerRef = useRef<HTMLDivElement | null>(null)
    const router = useRouter()

    const handleNavigation = () => {
        router.push("/")
        if (width < 1024 && isOpen) {
            close()
        }
    }

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (isOpen) { setShowNavItems(true) } else { setShowNavItems(false) };
        }, 300);

        return () => clearTimeout(timeoutId);
    }, [isOpen]);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (!showNavItems) close();
        }, 2000);

        return () => clearTimeout(timeoutId);
    }, [showNavItems, close]);

    useEffect(() => {
        const handleScroll = () => {
            if (headerRef.current) {
                if (window.scrollY > 30) {
                    if (width > 1024) {

                        headerRef.current.style.backgroundColor = "white";
                    }
                    headerRef.current.style.position = "relative";
                } else {
                    if (width > 1024) {
                        headerRef.current.style.backgroundColor = "#00000054";
                    }
                    headerRef.current.style.position = "fixed";
                }
            }
        }
        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)
    }, [width])

    return (
        <header
            ref={headerRef}
            className={`w-full px-8 pl-3 sm:px-20 z-40 fixed top-0 transition-all ease-in-out duration-500 bg-transparent lg:bg-black/30 text-white`}
        >
            <div
                className={`w-full flex flex-row items-center justify-between max-w-[1440px] mx-auto`}
            >
                <Link href="/">
                    <Logo />
                </Link>
                <nav className="hidden lg:flex">
                    <ul className="list-style-none flex gap-5">
                        {HEADER_LINKS.map(({ path, label }) => {
                            return (
                                <li key={path} className="p-2">
                                    <Link
                                        className={cn("transition-color ease-in-out duration-300 border-b pb-1 border-b-transparent hover:border-b-white", {
                                            "font-semibold border-b-white": pathname === path
                                        })}
                                        href={path}
                                    >
                                        {label}
                                    </Link>
                                </li>
                            );
                        })}
                        <li
                            className="p-2 relative"
                        >
                            <FocusAreaDropdown />
                        </li>
                    </ul>
                </nav>

                {/* mobile-view start from here */}
                <div onClick={toggle} className="block lg:hidden">
                    <Menu
                        size={20}
                        cursor={"pointer"}
                        className="hover:scale-110"
                        color={pathname === PAGE_URLS.ABOUT_US || pathname === PAGE_URLS.OUTREACHES ? "black" : "white"}
                    />
                </div>
                <AnimatePresence>
                    <div
                        className={`overflow-auto z-50 fixed top-0 w-full h-full bg-black py-2 transition-all ease-in-out duration-1000 
                    ${isOpen ? "left-0" : "left-[-100%]"}
                `}
                    >
                        <div className="flex justify-between items-center pr-4 mb-8">
                            <button onClick={handleNavigation}>
                                <Logo />
                            </button>
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
                                        className="relative w-fit py-3"
                                    >
                                        <FocusAreaDropdown />
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
