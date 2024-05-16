import { Button } from "@/components/elements/button/button"
import Image from "next/image"
import Marquee from "react-fast-marquee"


export const Hero = () => {
    return(
        <section className="bg-secondary-950 h-fit py-48 flex flex-col gap-32">
            <div className="container">
                <div className="grid sm:grid-cols-2 grid-cols-1">
                    <div>
                        <h1 className="text-white text-hero leading-none">
                            The Future of Green Energy
                        </h1>
                    </div>
                    <div className="flex flex-col justify-between gap-6 sm:gap-0 mt-6 sm:mt-0">
                        <p className="text-white">
                            Our commitment to green energy is paving the way for a cleaner, healthier planet. Join us on a journey towards a future where clean, renewable energy sources transform the way we power our lives.
                        </p>
                        <Button variant="secondary">See our Solutions</Button>
                    </div>
                </div>
            </div>

            <div className="w-full col-span-2 h-1/2">
                    <Marquee autoFill speed={120}>
                        <div className="flex justify-center gap-8 items-start mx-4">
                            <Image 
                                src="/hero1.png"
                                alt="Hero Image"
                                width={450}
                                height={250}
                                className="rounded-2xl"
                            />
                             <Image 
                                src="/hero2.png"
                                alt="Hero Image"
                                width={450}
                                height={250}
                                className="rounded-2xl"
                            />
                             <Image 
                                src="/hero3.png"
                                alt="Hero Image"
                                width={450}
                                height={250}
                                className="rounded-2xl"
                            />
                             <Image 
                                src="/hero4.png"
                                alt="Hero Image"
                                width={450}
                                height={250}
                                className="rounded-2xl"
                            />
                             <Image 
                                src="/hero5.png"
                                alt="Hero Image"
                                width={450}
                                height={250}
                                className="rounded-2xl"
                            />
                        </div>  
                    </Marquee>
                </div>
        </section>
    )
}