"use client"

import { Button } from "@/components/elements/button/button";
import { Heading } from "@/components/elements/heading/Heading";
import Logo from "@/components/elements/icons/Logo";
import { Section } from "@/components/elements/sections/Section";
import { Container } from "@/components/layout/container/Container";
import cx from "clsx"
import { Check } from "lucide-react";
import Link from "next/link";
import { useState } from "react";


const page = () => {
    const [recommended, setRecommended] = useState<boolean>(true);

    return(
        <Section className="bg-white">
            <Container>
                <div>
                    <Heading as="h1" className="text-hero">Pricing</Heading>
                    <p className="max-w-xl">
                        Our pricing plans are simple and designed to cater to household and companies of various sizes. Choose a plan that suits your needs and buget.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-1 xl:grid-cols-3 my-12 sm:my-24 gap-8">
                    <div className={cx(
                        "px-8 col-span-2 shadow-xl md:col-span-1 relative overflow-hidden pb-8 pt-14 rounded-3xl",
                        recommended === true
                        ? "border-none bg-secondary-950 text-white"
                        : "bordert-t-4 border-primary-300"
                    )}>
                        {recommended === true && (
                            <p className="absolute top-0 bg-primary-300 text-black text-center py-2 w-full right-0">
                                Recommendd
                            </p>
                        )}
                        <span className="mb-4 text-sub-title">Basic</span>
                        <Heading as="h2" className="text-features flex items-center gap-4">
                            $59 <span className="text-label text-neutral-500">per month</span>
                        </Heading>
                        <p className="mt-6">
                            For small households or buisness with moderate energy consuptioms
                        </p>
                        <Button
                            variant={recommended === true ? "tetriary-reversed": "tetriary"}
                            className="w-full mt-8 py-4"
                        >
                            <Link href="/">Get Started</Link>
                        </Button>
                        <div>
                            <Heading as="h4" className="my-4">
                                What's included
                            </Heading>
                            <ul className="grid gap-2">
                                <li className="flex gap-2 items-center">
                                    <Check /> Fixed amount of renawable energy supply
                                </li>
                                <li className="flex gap-2 items-center">
                                    <Check /> Fixed amount of renawable energy supply
                                </li>
                                <li className="flex gap-2 items-center">
                                    <Check /> Fixed amount of renawable energy supply
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className={cx(
                        "px-8 col-span-2 shadow-xl md:col-span-1 relative overflow-hidden pb-8 pt-14 rounded-3xl",
                        recommended === false
                        ? "border-none bg-secondary-950 text-white"
                        : "border-t-4 border-primary-300"
                    )}>
                        {recommended === false && (
                            <p className="absolute top-0 bg-primary-300 text-black text-center py-2 w-full right-0">
                                Recommendd
                            </p>
                        )}
                        <span className="mb-4 text-sub-title">Basic</span>
                        <Heading as="h2" className="text-features flex items-center gap-4">
                            $59 <span className="text-label text-neutral-500">per month</span>
                        </Heading>
                        <p className="mt-6">
                            For small households or buisness with moderate energy consuptioms
                        </p>
                        <Button
                            variant={recommended === false ? "tetriary-reversed": "tetriary"}
                            className="w-full mt-8 py-4"
                        >
                            <Link href="/">Get Started</Link>
                        </Button>
                        <div>
                            <Heading as="h4" className="my-4">
                                What's included
                            </Heading>
                            <ul className="grid gap-2">
                                <li className="flex gap-2 items-center">
                                    <Check /> Fixed amount of renawable energy supply
                                </li>
                                <li className="flex gap-2 items-center">
                                    <Check /> Fixed amount of renawable energy supply
                                </li>
                                <li className="flex gap-2 items-center">
                                    <Check /> Fixed amount of renawable energy supply
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className={cx(
                        "px-8 col-span-2 shadow-xl md:col-span-1 relative overflow-hidden pb-8 pt-14 rounded-3xl",
                        recommended === false
                        ? "border-none bg-secondary-950 text-white"
                        : "border-t-4 border-primary-300"
                    )}>
                        {recommended === false && (
                            <p className="absolute top-0 bg-primary-300 text-black text-center py-2 w-full right-0">
                                Recommendd
                            </p>
                        )}
                        <span className="mb-4 text-sub-title">Basic</span>
                        <Heading as="h2" className="text-features flex items-center gap-4">
                            $59 <span className="text-label text-neutral-500">per month</span>
                        </Heading>
                        <p className="mt-6">
                            For small households or buisness with moderate energy consuptioms
                        </p>
                        <Button
                            variant={recommended === false ? "tetriary-reversed": "tetriary"}
                            className="w-full mt-8 py-4"
                        >
                            <Link href="/">Get Started</Link>
                        </Button>
                        <div>
                            <Heading as="h4" className="my-4">
                                What's included
                            </Heading>
                            <ul className="grid gap-2">
                                <li className="flex gap-2 items-center">
                                    <Check /> Fixed amount of renawable energy supply
                                </li>
                                <li className="flex gap-2 items-center">
                                    <Check /> Fixed amount of renawable energy supply
                                </li>
                                <li className="flex gap-2 items-center">
                                    <Check /> Fixed amount of renawable energy supply
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="p-10 shadow-xl bg-primary-300 rounded-3xl flex items-center sm:flex-row md:flex-row gap-4">
                        <div>
                            <Logo />
                        </div>

                        <div className="">
                            <Heading as="h3" className="font-medium text-label mb-2">
                                Not sure which plan to choose?
                            </Heading>
                            <p className="text-primary-950">
                                For assistance, please visit our Contact Us page or call our customer support hotline at (+47 40899925). Our dedicated team is ready to help you on your journey to a greener, more substanible future.
                            </p>
                        </div>
                        <Button variant="primary" className="shrink-0 bg-white h-fit">
                            Book a free consultation
                        </Button>
                    </div>
            </Container>
        </Section>
    )
}

export default page;