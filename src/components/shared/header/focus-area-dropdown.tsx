"use client"

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { FOCUS_AREAS } from '@/constants';
import { useWindowWidth } from '@/hooks/use-width';
import { cn } from '@/lib/utils';
import { useSidebarStore } from '@/store/side-bar-store';
import { ChevronDown } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation';
import React from 'react'

function FocusAreaDropdown() {
    const pathname = usePathname()
    const router = useRouter()
    const {close} = useSidebarStore()
    const width = useWindowWidth()

    const handleNavigation = (path: string) => {
        router.push(path)
        if (width < 1024) {
            close()
        }
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className={cn("group focus:outline-none flex items-center gap-2 border-b border-b-transparent transition-all ease-in-out duration-100 hover:border-b-white cursor-pointer", {
                "font-semibold border-b-white": pathname === "/skillacquisition" || pathname === "/outreaches"
            })}>
                Focus Areas
                <ChevronDown
                    size={18}
                    className='transition-transform ease-in-out duration-100 group-[&[data-state=open]]:-rotate-180'
                />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="text-[#141414]">
                {FOCUS_AREAS.map(
                    ({ path, label }) => {
                        return (
                            <DropdownMenuItem
                                key={path}
                                className="p-2"
                            >
                                <button
                                    className={cn("transition-all ease-in-out duration-300 text-[#141414] hover:border-b-[#0020f1] hover:border-b-2 hover:text-[#0020f1]", {
                                        "font-bold": pathname === path
                                    })}
                                    onClick={() => handleNavigation(path)}
                                >
                                    {label}
                                </button>
                            </DropdownMenuItem>
                        );
                    }
                )}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default FocusAreaDropdown