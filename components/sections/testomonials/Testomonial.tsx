import { Heading } from "@/components/elements/heading/Heading"
import { Section } from "@/components/elements/sections/Section"
import { SubTitle } from "@/components/elements/sub-title/SubTitle"
import { Container } from "@/components/layout/container/Container"
import Testomonialscarousel from "./Testomonials-carousel"

const Testomonial = () => {
    
    return (
        <Section className="bg-secondary-950 rounded-3xl">
            <Container className="flex flex-col items-center w-full">
                <SubTitle subTitle="Testomonials"/>
                <Heading as="h2" className="text-section leading-none text-white text-left w-full">What our customers say</Heading>
                <div className="mt-24">
                    <Testomonialscarousel />
                </div>
            </Container>
        </Section>
    )
}

export default Testomonial
