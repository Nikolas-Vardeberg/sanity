"use client"

import Image from "next/image"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"


function AboutUsCarousel() {
    return(
        <Carousel
            autoPlay
            infiniteLoop
            showStatus={false}
            showArrows={false}
            swipeable
            transitionTime={300}
            useKeyboardArrows
            showThumbs={false}
            interval={3000}
            className="h-full"
        >
            <div className="w-full h-[450px] sm:h-[700px]">
                <Image 
                    src="/hero1.png"
                    alt="About us page"
                    width={420}
                    className="w-full h-full object-cover rounded-3xl"
                    height={520}
                />
            </div>
            <div className="w-full h-[450px] sm:h-[700px]">
                <Image 
                    src="/hero1.png"
                    alt="About us page"
                    width={420}
                    className="w-full h-full object-cover rounded-3xl"
                    height={520}
                />
            </div>
            <div className="w-full h-[450px] sm:h-[700px]">
                <Image 
                    src="/hero1.png"
                    alt="About us page"
                    width={420}
                    className="w-full h-full object-cover rounded-3xl"
                    height={520}
                />
            </div>
            <div className="w-full h-[450px] sm:h-[700px]">
                <Image 
                    src="/hero1.png"
                    alt="About us page"
                    width={420}
                    className="w-full h-full object-cover rounded-3xl"
                    height={520}
                />
            </div>
            <div className="w-full h-[450px] sm:h-[700px]">
                <Image 
                    src="/hero1.png"
                    alt="About us page"
                    width={420}
                    className="w-full h-full object-cover rounded-3xl"
                    height={520}
                />
            </div>
        </Carousel>
    )
}

export default AboutUsCarousel