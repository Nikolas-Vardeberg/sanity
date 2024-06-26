import { Button } from "@/components/elements/button/button"
import { Heading } from "@/components/elements/heading/Heading"
import { Section } from "@/components/elements/sections/Section"
import { Container } from "@/components/layout/container/Container"
import NewsLetter from "@/components/sections/news-letter/NewsLetter"
import { Linkedin, LinkedinIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import React from "react"


const page = () => {
    return(
        <React.Fragment>
            <Section className="bg-white">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <Heading as="h1" className="text-hero">
                            About us
                        </Heading>
                        <div>
                            <p className="mb-4">
                                At flow, were commited to a substanible future. as a pionnering force in the green energy sector
                                At flow, were commited to a substanible future. as a pionnering force in the green energy sector
                                At flow, were commited to a substanible future. as a pionnering force in the green energy sector
                            </p>
                            <Button variant="secondary">Read More</Button>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-4 mt-4 md:grid-rows-4 gap-4">
                        <div className="col-span-2 gap-4 h-full grid grid-rows-4 grid-cols-2 row-span-4">
                            <div className="col-span-2 row-span-2 md:row-start-auto rounded-3xl overflow-hidden">
                                <Image 
                                    src="/hero1.png"
                                    alt="About us 1"
                                    width={450}
                                    height={320}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="col-span-2 md:col-span-1 row-span-2 grid grid-rows-2 gap-4">
                                <div className="bg-neutral-200 flex flex-col justify-between p-4 rounded-3xl">
                                    <Heading as="h3" className="text-title">
                                        100%
                                    </Heading>
                                    <div>
                                        <Heading as="h4" className="text-label font-bold">
                                            Dedication
                                        </Heading>
                                        <p className="">
                                            Lorem ipsum dolor sit amet, consectur adisipgin elit.
                                        </p>
                                    </div>
                                </div>
                                <div className="bg-neutral-200 flex flex-col justify-between p-4 rounded-3xl">
                                    <Heading as="h3" className="text-title">
                                        100%
                                    </Heading>
                                    <div>
                                        <Heading as="h4" className="text-label font-bold">
                                            Dedication
                                        </Heading>
                                        <p className="">
                                            Lorem ipsum dolor sit amet, consectur adisipgin elit.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-2 md:col-span-1 row-span-2 bg-black text-white flex flex-col justify-between p-4 rounded-3xl">
                                <Heading as="h3" className="text-title">
                                    100%
                                </Heading>
                                <div>
                                    <Heading as="h4" className="text-label font-bold">
                                        Dedication
                                    </Heading>
                                    <p className="text-neutral-900">
                                        Lorem ipsum dolor sit amet, consectur adisipgin elit.
                                        Lorem ipsum dolor sit amet, consectur adisipgin elit.
                                    </p>  
                                </div>
                            </div>
                        </div>

                    
                        <div className="col-span-2 gap-4 h-full grid grid-rows-4 grid-cols-2 row-span-4">
                            <div className="col-span-2 row-span-2 md:row-start-3 rounded-3xl overflow-hidden">
                                <Image 
                                    src="/hero1.png"
                                    alt="About us 1"
                                    width={450}
                                    height={320}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="col-span-2 md:col-span-1 row-span-2 grid grid-rows-2 gap-4">
                                <div className="bg-neutral-200 flex flex-col justify-between p-4 rounded-3xl">
                                    <Heading as="h3" className="text-title">
                                        100%
                                    </Heading>
                                    <div>
                                        <Heading as="h4" className="text-label font-bold">
                                            Dedication
                                        </Heading>
                                        <p className="">
                                            Lorem ipsum dolor sit amet, consectur adisipgin elit.
                                        </p>
                                    </div>
                                </div>
                                <div className="bg-neutral-200 flex flex-col justify-between p-4 rounded-3xl">
                                    <Heading as="h3" className="text-title">
                                        100%
                                    </Heading>
                                    <div>
                                        <Heading as="h4" className="text-label font-bold">
                                            Dedication
                                        </Heading>
                                        <p className="">
                                            Lorem ipsum dolor sit amet, consectur adisipgin elit.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-2 md:col-span-1 row-span-2 bg-black text-white flex flex-col justify-between p-4 rounded-3xl">
                                <Heading as="h3" className="text-title">
                                    100%
                                </Heading>
                                <div>
                                    <Heading as="h4" className="text-label font-bold">
                                        Dedication
                                    </Heading>
                                    <p className="text-neutral-900">
                                        Lorem ipsum dolor sit amet, consectur adisipgin elit.
                                        Lorem ipsum dolor sit amet, consectur adisipgin elit.
                                    </p>  
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            <Section className="bg-white">
                <Container>
                    <Heading as="h2" className="text-section leading-none capitalize mb-24">
                        our work philisophy
                    </Heading>
                    <div className="grid gap-4">
                        <div className="grid gap-4 md:grid-cols-2 py-12 bg-primary-300 p-4 rounded-3xl">
                            <div>
                                <span>Culture</span>
                                <Heading as="h4" className="text-features leading-none">
                                    Curiosity & Creativity
                                </Heading>
                            </div>
                            <p>
                            At flow, we
                            re commited to a substanible future. as a pionnering force in the green energy sector
                            </p>
                        </div>
                        <div className="grid gap-4 md:grid-cols-2 py-12 bg-primary-300 p-4 rounded-3xl">
                            <div>
                                <span>Culture</span>
                                <Heading as="h4" className="text-features leading-none">
                                    Curiosity & Creativity
                                </Heading>
                            </div>
                            <p>
                            At flow, were commited to a substanible future. as a pionnering force in the green energy sector
                            </p>
                        </div>
                        <div className="grid gap-4 md:grid-cols-2 py-12 bg-primary-300 p-4 rounded-3xl">
                            <div>
                                <span>Culture</span>
                                <Heading as="h4" className="text-features leading-none">
                                    Curiosity & Creativity
                                </Heading>
                            </div>
                            <p>
                            At flow, were commited to a substanible future. as a pionnering force in the green energy sector
                            </p>
                        </div>
                    </div>
                </Container>

            </Section>

            <div className="p-2 sm:p-4 bg-secondary-950">
                <NewsLetter />
            </div>

            <Section className="bg-white">
                <Container>
                    <Heading as="h2" className="text-section leading-none capitalize mb-24">
                        A Team of Energy Experts
                    </Heading>

                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="col-span-1 relative h-[600px] rounded-xl overflow-hidden">
                            <Image 
                                src="/bruno.jpg"
                                alt="Member"
                                width={320}
                                height={450}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute group bottom-2 overflow-hidden px-2 backdrop-blur-2xl w-full">
                                <div className="bg-primary-300 flex-col group-hover:h-[240px] min-h-10 h-0 duration-300 px-6 py-2 flex justify-between rounded-xl">
                                    <div className="flex justify-between items-center">
                                        <Heading as="h4" className="text-label font-semibold leading-none">
                                            Nikolas Vardeberg
                                        </Heading>
                                        <span>STO</span>
                                        <Link href="/">
                                            <Linkedin />
                                        </Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </Container>
            </Section>
        </React.Fragment>
    )
}

export default page