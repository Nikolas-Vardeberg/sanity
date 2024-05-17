"use client"

import { useWindScreenowSize } from "@/hooks/useWindowSize"
import Image from "next/image"
import React from "react"
import { Carousel } from "react-responsive-carousel"

const Testomonialscarousel = () => {
    const size = useWindScreenowSize();
  return (
    <Carousel
    swipeable
    stopOnHover
    showThumbs={false}
    showStatus={false}
    interval={2000}
    showArrows={false}
    autoPlay
    emulateTouch
    showIndicators={false}
    centerMode
    centerSlidePercentage={
        (size.width < 640 && 85) || (size.width < 1024 && 40) || 33
    }
    infiniteLoop
    useKeyboardArrows
    className="cursor-grabbing max-w-md md:max-w-fit duration-300"
>
    <div className="carousel-item px-2">
        <div className="w-full shrink-0 sm:col-span-1 p-10 rounded-3xl bg-primary-300">
            <p className="text-left text-sub-title min-h-[180px]">
                "Flow transformed my energy use. Efficient, green tech, outstanding service."
            </p>
            <div className="flex gap-6 items-center sm:flex-row flex-col">
                <div className="h-[56px] w-[56px] shrink-0 relative">
                    <Image 
                        src="/bruno.jpg"
                        alt="Expert"
                        width={90}
                        height={90}
                        className="w-full h-full object-cover rounded-full"
                    />
                </div>
                <div className="flex flex-col gap-2 sm:flex-row justify-between w-full">
                    <div className="text-black flex flex-col">
                        <h3 className="">Jenny Wilson</h3>
                        <p className="text-black text-sm opacity-90">
                            Solar energy service
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="carousel-item px-2">
        <div className="w-full shrink-0 sm:col-span-1 p-10 rounded-3xl bg-primary-300">
            <p className="text-left text-sub-title min-h-[180px]">
                "Flow transformed my energy use. Efficient, green tech, outstanding service."
            </p>
            <div className="flex gap-6 items-center sm:flex-row flex-col">
                <div className="h-[56px] w-[56px] shrink-0 relative">
                    <Image 
                        src="/bruno.jpg"
                        alt="Expert"
                        width={90}
                        height={90}
                        className="w-full h-full object-cover rounded-full"
                    />
                </div>
                <div className="flex flex-col gap-2 sm:flex-row justify-between w-full">
                    <div className="text-black flex flex-col">
                        <h3 className="">Jenny Wilson</h3>
                        <p className="text-black text-sm opacity-90">
                            Solar energy service
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="carousel-item px-2">
        <div className="w-full shrink-0 sm:col-span-1 p-10 rounded-3xl bg-primary-300">
            <p className="text-left text-sub-title min-h-[180px]">
                "Flow transformed my energy use. Efficient, green tech, outstanding service."
            </p>
            <div className="flex gap-6 items-center sm:flex-row flex-col">
                <div className="h-[56px] w-[56px] shrink-0 relative">
                    <Image 
                        src="/bruno.jpg"
                        alt="Expert"
                        width={90}
                        height={90}
                        className="w-full h-full object-cover rounded-full"
                    />
                </div>
                <div className="flex flex-col gap-2 sm:flex-row justify-between w-full">
                    <div className="text-black flex flex-col">
                        <h3 className="">Jenny Wilson</h3>
                        <p className="text-black text-sm opacity-90">
                            Solar energy service
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="carousel-item px-2">
        <div className="w-full shrink-0 sm:col-span-1 p-10 rounded-3xl bg-primary-300">
            <p className="text-left text-sub-title min-h-[180px]">
                "Flow transformed my energy use. Efficient, green tech, outstanding service."
            </p>
            <div className="flex gap-6 items-center sm:flex-row flex-col">
                <div className="h-[56px] w-[56px] shrink-0 relative">
                    <Image 
                        src="/bruno.jpg"
                        alt="Expert"
                        width={90}
                        height={90}
                        className="w-full h-full object-cover rounded-full"
                    />
                </div>
                <div className="flex flex-col gap-2 sm:flex-row justify-between w-full">
                    <div className="text-black flex flex-col">
                        <h3 className="">Jenny Wilson</h3>
                        <p className="text-black text-sm opacity-90">
                            Solar energy service
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="carousel-item px-2">
        <div className="w-full shrink-0 sm:col-span-1 p-10 rounded-3xl bg-primary-300">
            <p className="text-left text-sub-title min-h-[180px]">
                "Flow transformed my energy use. Efficient, green tech, outstanding service."
            </p>
            <div className="flex gap-6 items-center sm:flex-row flex-col">
                <div className="h-[56px] w-[56px] shrink-0 relative">
                    <Image 
                        src="/bruno.jpg"
                        alt="Expert"
                        width={90}
                        height={90}
                        className="w-full h-full object-cover rounded-full"
                    />
                </div>
                <div className="flex flex-col gap-2 sm:flex-row justify-between w-full">
                    <div className="text-black flex flex-col">
                        <h3 className="">Jenny Wilson</h3>
                        <p className="text-black text-sm opacity-90">
                            Solar energy service
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="carousel-item px-2">
        <div className="w-full shrink-0 sm:col-span-1 p-10 rounded-3xl bg-primary-300">
            <p className="text-left text-sub-title min-h-[180px]">
                "Flow transformed my energy use. Efficient, green tech, outstanding service."
            </p>
            <div className="flex gap-6 items-center sm:flex-row flex-col">
                <div className="h-[56px] w-[56px] shrink-0 relative">
                    <Image 
                        src="/bruno.jpg"
                        alt="Expert"
                        width={90}
                        height={90}
                        className="w-full h-full object-cover rounded-full"
                    />
                </div>
                <div className="flex flex-col gap-2 sm:flex-row justify-between w-full">
                    <div className="text-black flex flex-col">
                        <h3 className="">Jenny Wilson</h3>
                        <p className="text-black text-sm opacity-90">
                            Solar energy service
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="carousel-item px-2">
        <div className="w-full shrink-0 sm:col-span-1 p-10 rounded-3xl bg-primary-300">
            <p className="text-left text-sub-title min-h-[180px]">
                "Flow transformed my energy use. Efficient, green tech, outstanding service."
            </p>
            <div className="flex gap-6 items-center sm:flex-row flex-col">
                <div className="h-[56px] w-[56px] shrink-0 relative">
                    <Image 
                        src="/bruno.jpg"
                        alt="Expert"
                        width={90}
                        height={90}
                        className="w-full h-full object-cover rounded-full"
                    />
                </div>
                <div className="flex flex-col gap-2 sm:flex-row justify-between w-full">
                    <div className="text-black flex flex-col">
                        <h3 className="">Jenny Wilson</h3>
                        <p className="text-black text-sm opacity-90">
                            Solar energy service
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="carousel-item px-2">
        <div className="w-full shrink-0 sm:col-span-1 p-10 rounded-3xl bg-primary-300">
            <p className="text-left text-sub-title min-h-[180px]">
                "Flow transformed my energy use. Efficient, green tech, outstanding service."
            </p>
            <div className="flex gap-6 items-center sm:flex-row flex-col">
                <div className="h-[56px] w-[56px] shrink-0 relative">
                    <Image 
                        src="/bruno.jpg"
                        alt="Expert"
                        width={90}
                        height={90}
                        className="w-full h-full object-cover rounded-full"
                    />
                </div>
                <div className="flex flex-col gap-2 sm:flex-row justify-between w-full">
                    <div className="text-black flex flex-col">
                        <h3 className="">Jenny Wilson</h3>
                        <p className="text-black text-sm opacity-90">
                            Solar energy service
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</Carousel>
  )
}

export default Testomonialscarousel
