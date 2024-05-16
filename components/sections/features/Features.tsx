import { Heading } from "@/components/elements/heading/Heading"
import Ev from "@/components/elements/icons/Ev"
import Logo from "@/components/elements/icons/Logo"
import { Section } from "@/components/elements/sections/Section"
import { SubTitle } from "@/components/elements/sub-title/SubTitle"
import { Container } from "@/components/layout/container/Container"

const Features = () => {
  return (
    <Section className="bg-[#fff7ed] rounded-3xl">
        <Container>
            <SubTitle subTitle="Solutions" className="text-primary-950" />

            <div>
                <div className="mb-12 sm:mb-24">
                    <Heading as="h2" className="text-section leading-none">Key to clean future</Heading>
                </div>

                <div className="grid md:grid-cols-2 gap-8 xl:grid-cols-4">
                    <div className="flex flex-col gap-6 items-start">
                        <Logo />
                        <div>
                            <h3 className="text-sub-title leading-none mb-4">Ev charging</h3>
                            <p className="text-neutral-800">
                                Evs use electricty as a power source, which can be generated from renewable energy sources. Our solutions help reducing greenhouse gas emissions in the transport sections.
                            </p>
                        </div>
                        <button className="text-primary-950">Read More</button>
                    </div>

                    <div className="flex flex-col gap-6 items-start">
                    <Logo />
                        <div>
                            <h3 className="text-sub-title leading-none mb-4">Ev charging</h3>
                            <p className="text-neutral-800">
                                Evs use electricty as a power source, which can be generated from renewable energy sources. Our solutions help reducing greenhouse gas emissions in the transport sections.
                            </p>
                        </div>
                        <button className="text-primary-950">Read More</button>
                    </div>

                    <div className="flex flex-col gap-6 items-start">
                    <Logo />
                        <div>
                            <h3 className="text-sub-title leading-none mb-4">Ev charging</h3>
                            <p className="text-neutral-800">
                                Evs use electricty as a power source, which can be generated from renewable energy sources. Our solutions help reducing greenhouse gas emissions in the transport sections.
                            </p>
                        </div>
                        <button className="text-primary-950">Read More</button>
                    </div>

                    <div className="flex flex-col gap-6 items-start">
                        <Logo />
                        <div>
                            <h3 className="text-sub-title leading-none mb-4">Ev charging</h3>
                            <p className="text-neutral-800">
                                Evs use electricty as a power source, which can be generated from renewable energy sources. Our solutions help reducing greenhouse gas emissions in the transport sections.
                            </p>
                        </div>
                        <button className="text-primary-950">Read More</button>
                    </div>

                </div>
            </div>
        </Container>
    </Section>
  )
}

export default Features
