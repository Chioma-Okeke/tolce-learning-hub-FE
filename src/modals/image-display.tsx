import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { galleryCategoriesImages } from '@/constants';
import { useLockScreenStore } from '@/store/screen-lock-store';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react'

type ImageDisplayProps = {
    setFocusedIndex: (index: number) => void,
    focusedIndex: number,
    imageIndex: number
    image: {
        id: number;
        imageLink: string
    }
    isLoading?: boolean
    setIsLoading?: (val: boolean) => void
}

function ImageDisplay({
    setFocusedIndex,
    focusedIndex,
    imageIndex,
    image,
    isLoading,
    setIsLoading,
}: ImageDisplayProps) {
    const { isLocked, toggleLock } = useLockScreenStore()
    const [isOpen, setIsOpen] = useState(false)

    const expandedImage =
        focusedIndex !== null && galleryCategoriesImages[focusedIndex];

    function handlePrevious() {
        setFocusedIndex(
            focusedIndex > 0 ? focusedIndex - 1 : galleryCategoriesImages.length - 1
        );
    }

    function handleNext() {
        setFocusedIndex(
            focusedIndex < galleryCategoriesImages.length - 1 ? focusedIndex + 1 : 0
        );
    }
    return (
        <Dialog open={isOpen} onOpenChange={(open) => {
            setIsOpen(open)
            if (!open && isLocked) {
                console.log("I ran", isLocked)
                toggleLock()
            }
        }}>
            <DialogTrigger>
                <div
                    key={imageIndex}
                    className="relative group overflow-hidden rounded-lg w-full h-[225px]"
                >
                    {isLoading && <div className="animate-pulse bg-gray-200 w-full h-full"></div>}
                    <div className='relative overflow-hidden w-full h-full hover:scale-110'>
                        <Image
                            onClick={() => {
                                setFocusedIndex(
                                    imageIndex
                                );
                                toggleLock();
                            }}
                            src={image.imageLink}
                            alt={`image-${imageIndex + 1
                                }`}
                            fill
                            sizes='100vw'
                            className={`object-cover object-center transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100 group-hover:scale-110"}`}
                            onLoad={() => {
                                if (setIsLoading) setIsLoading(false)
                            }
                            }
                        />
                    </div>
                </div>
            </DialogTrigger>
            <DialogContent>
                <div className="relative bg-white rounded-lg shadow-lg p-4 w-[90%] max-w-5xl mx-auto h-[85vh] max-h-[85vh] flex flex-col justify-center items-center overflow-hidden">
                    {/* Image and Controls */}
                    <div className="relative flex items-center justify-between w-full h-full">
                        {/* Previous Button */}
                        <button
                            onClick={handlePrevious}
                            aria-label="Previous Member"
                            className="hidden lg:block absolute left-4 z-10 bg-gray-800 hover:bg-gray-600 text-white rounded-full p-2 transition duration-300"
                        >
                            <ChevronLeft size={28} />
                        </button>

                        {/* Image */}
                        {expandedImage && (
                            <div className='relative w-full max-w-3xl h-[80vh] max-h-[80vh] rounded-md mx-auto overflow-hidden'>
                                <Image
                                    onClick={() => {
                                        setFocusedIndex(0);
                                        toggleLock();
                                    }}
                                    src={expandedImage.imageLink}
                                    alt=""
                                    fill
                                    sizes='100vw'
                                    priority
                                    className="object-cover"
                                />
                            </div>
                        )}

                        {/* Next Button */}
                        <button
                            onClick={handleNext}
                            aria-label="Next Member"
                            className="hidden lg:block absolute right-4 z-10 bg-gray-800 hover:bg-gray-600 text-white rounded-full p-2 transition duration-300"
                        >
                            <ChevronRight size={28} />
                        </button>
                    </div>

                    {/* Mobile Controls */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4 lg:hidden">
                        <button
                            onClick={handlePrevious}
                            aria-label="Previous Member"
                            className="bg-gray-800 hover:bg-gray-600 text-white rounded-full p-3 transition duration-300"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={handleNext}
                            aria-label="Next Member"
                            className="bg-gray-800 hover:bg-gray-600 text-white rounded-full p-3 transition duration-300"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default ImageDisplay