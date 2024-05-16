import { Button } from "@/components/elements/button/button"
import { Heading } from "@/components/elements/heading/Heading"
import { Section } from "@/components/elements/sections/Section"
import { Container } from "@/components/layout/container/Container"
import { ArrowRight, ArrowUpRight, Clock, Map } from "lucide-react"

const page = () => {
    return(
        <Section className="bg-secondary-950">
            <Container>
                <div>
                    <Heading as="h1" className="text-hero text-white leading-none">Join Our Team</Heading>
                    <p className="text-neutral-300 mt-6">Our philospohy is simple - make the world a greener planet</p>
                </div>

                <div className="grid gap-16 mt-12 sm:mt-24">
                    
                    <div>
                        <Heading as="h3" className="text-white text-sub-title mb-8">
                            Research and Development (R&D)
                        </Heading>
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                            <div className="bg-primary-300 group hover:bg-white hover:border-primary-300 duration-300 px-8 py-6 rounded-3xl border-t-4">
                                <Heading as="h4" className="text-label font-medium">
                                    Renawble Energy Research
                                </Heading>

                                <div className="flex gap-2 mt-4">
                                    <span className="flex items-center gap-1 group-hover:bg-primary-300 duration-300 rounded-full px-2 py-1 border border-neutral-300 bg-white">
                                        <Map />
                                        Brumunddal, Innlandet
                                    </span>
                                    <span className="flex items-center gap-1 group-hover:bg-primary-300 duration-300 rounded-full px-2 py-1 border border-neutral-300 bg-white">
                                        <Clock />
                                        Fulltime
                                    </span>
                                </div>
                                <Button className="mt-6 flex items-center gap-6">
                                    Apply <ArrowUpRight />
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div>
                        <Heading as="h3" className="text-white text-sub-title mb-8">
                            Research and Development (R&D)
                        </Heading>
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                            <div className="bg-primary-300 group hover:bg-white hover:border-primary-300 duration-300 px-8 py-6 rounded-3xl border-t-4">
                                <Heading as="h4" className="text-label font-medium">
                                    Renawble Energy Research
                                </Heading>

                                <div className="flex gap-2 mt-4">
                                    <span className="flex items-center gap-1 group-hover:bg-primary-300 duration-300 rounded-full px-2 py-1 border border-neutral-300 bg-white">
                                        <Map />
                                        Brumunddal, Innlandet
                                    </span>
                                    <span className="flex items-center gap-1 group-hover:bg-primary-300 duration-300 rounded-full px-2 py-1 border border-neutral-300 bg-white">
                                        <Clock />
                                        Fulltime
                                    </span>
                                </div>
                                <Button className="mt-6 flex items-center gap-6">
                                    Apply <ArrowUpRight />
                                </Button>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </Container>
        </Section>
    )
}

export default page