"use client"

import { useState } from "react";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { AnimatePresence, motion } from "motion/react";
import { useLockScreenStore } from "@/store/screen-lock-store";
import { Button } from "@/components/ui/button";

export const EnrollmentFormModal = ({children}: {children: React.ReactNode}) => {
    const [showEnrollForm, setShowEnrollForm] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const { toggleLock } = useLockScreenStore()

    return (
        <Dialog open={isOpen} onOpenChange={(open) => {
            setIsOpen(open);
            toggleLock()
            if (open) {
                setShowEnrollForm(false)
            }
        }}>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent>
                <AnimatePresence>
                    <div
                        // initial={{ x: "100%", opacity: 0 }}
                        // animate={{ x: 0, opacity: 1 }}
                        // exit={{ x: "-100%", opacity: 0 }}
                        // transition={{ duration: 0.5 }}
                    >
                        {/* <X
                            onClick={() => {
                                setShowEnrollModal(false);
                                dispatch(setIsLocked(false));
                                setShowEnrollForm(false)
                            }}
                            size={25}
                            cursor={"pointer"}
                            className="absolute right-2 top-2 mb-11 transition ease-out hover:text-[#0020F1]"
                        /> */}
                        {!showEnrollForm ? (
                            <div
                                className="space-y-6"
                            >
                                <h2 className="font-semibold text-2xl text-center">
                                    Select a Package
                                </h2>
                                <div className="flex items-center justify-center gap-2">
                                    <Button variant="outline" onClick={() => setShowEnrollForm(true)} className=" px-8 py-3">
                                        Student Package
                                    </Button>
                                    <Button variant="outline" onClick={() => setShowEnrollForm(true)} className=" px-8 py-3">
                                        Professional Package
                                    </Button>
                                </div>
                            </div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="flex items-center justify-center w-full max-w-full"
                            >
                                <iframe
                                    src="https://docs.google.com/forms/d/e/1FAIpQLSf1f1A-nd8tE0fDzLi7tqBKbXg4Zxz6KcokHkj1JRaQhXp8Mw/viewform?embedded=true"
                                    className="w-full max-w-full"
                                    height="500"
                                    frameBorder="0"
                                    marginHeight={0}
                                    marginWidth={0}
                                >
                                    <div className="w-14 animate-pulse h-14 rounded-full"></div>
                                </iframe>
                            </motion.div>
                        )}
                    </div>
                </AnimatePresence>
            </DialogContent>
        </Dialog>
    )
}