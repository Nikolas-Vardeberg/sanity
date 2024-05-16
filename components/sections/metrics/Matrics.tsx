import { Heading } from "@/components/elements/heading/Heading"
import Logo from "@/components/elements/icons/Logo"
import { Section } from "@/components/elements/sections/Section"
import { SubTitle } from "@/components/elements/sub-title/SubTitle"
import { Container } from "@/components/layout/container/Container"


const Matrics = () => {
    return(
        <Section className="bg-beige-primary rounded-3xl">
            <Container>
                <SubTitle subTitle="Metrics" className="text-primary-950"/>

                <div>
                    <div className="mb-12 sm:mb-24">
                        <Heading as="h2" className="text-section leading-none">Key to clean future</Heading>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div className="flex h-full flex-col gap-6 items-start p-10 bg-primary-300 rounded-3xl">
                            <Logo />
                            <div className="flex flex-col gap-6">
                                <h3 className="text-title leading-none">5,000 Mwh</h3>
                                <h4 className="text-sub-title">Renewable Energy Generated</h4>
                                <p className="text-neutral-800">
                                Evs use electricty as a power source, which can be generated from renewable energy sources. Our solutions help reducing greenhouse gas emissions in the transport sections.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col justify-between gap-8">
                            <div className="flex gap-6 p-8 bg-primary-300 rounded-3xl">
                                <Logo />
                                <div>
                                    <h3 className="text-title leading-none">5,000 MWH</h3>
                                    <h4 className="leading-none mt-4 sm:mt-6">
                                        Renawable Energy Generated
                                    </h4>
                                </div>
                            </div>
                            <div className="flex gap-6 p-8 bg-primary-300 rounded-3xl">
                                <Logo />
                                <div>
                                    <h3 className="text-title leading-none">5,000 MWH</h3>
                                    <h4 className="leading-none mt-4 sm:mt-6">
                                        Renawable Energy Generated
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    )
}

export default Matrics