import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { galleryCategoriesImages } from '@/constants';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

type ImageDisplayProps = {
    setFocusedIndex: (index: number) => void,
    focusedIndex: number,
    setIsLocked: (val: boolean) => void
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
    setIsLocked,
    imageIndex,
    image,
    isLoading,
    setIsLoading,
}: ImageDisplayProps) {

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
        <Dialog>
            <DialogTrigger>
                <div
                    key={imageIndex}
                    className="relative group overflow-hidden rounded-lg w-full h-[225px]"
                >
                    {isLoading && <div className="animate-pulse bg-gray-200 w-full h-full"></div>}
                    <Image
                        onClick={() => {
                            setFocusedIndex(
                                imageIndex
                            );
                            setIsLocked(true);
                        }}
                        src={image.imageLink}
                        alt={`image-${imageIndex + 1
                            }`}
                        loading="lazy"
                        width={100}
                        height={100}
                        className="w-full h-full object-cover transition-opacity duration-500 opacity-0 hover:scale-110"
                        onLoad={(e) => {
                            if (setIsLoading) setIsLoading(false)
                            e.currentTarget.classList.remove(
                                "opacity-0"
                            )
                        }
                        }
                    />
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
                            <Image
                                onClick={() => {
                                    setFocusedIndex(0);
                                    setIsLocked(false);
                                }}
                                src={expandedImage.imageLink}
                                alt=""
                                loading="lazy"
                                width={100}
                                height={100}
                                className="object-contain w-full max-w-3xl h-auto max-h-[80vh] rounded-md mx-auto"
                            />
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