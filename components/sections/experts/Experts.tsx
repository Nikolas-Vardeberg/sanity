import { SubTitle } from "@/components/elements/sub-title/SubTitle"
import { Linkedin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"


const Experts = () => {
    return(
        <section className="py-48 bg-secondary-950">
            <div className="container">

                <SubTitle subTitle="Our experts" />

                <div>
                    <div className="flex flex-col gap-4">
                        <h2 className="text-features leading-none text-white">
                            Meet our experts{" "}
                        </h2>
                        <p className="text-neutral-400">
                            Our team boats top green energy experts, driving innovation in substanibility{" "}
                        </p>
                    </div>
                </div>

                <div className="mt-20">
                    <div className="py-8 border-b flex items-center border-neutral-600 gap-12">
                        <div className="h-[90px] shrink-0 mt-12 w-[90px] relative">
                            <Image 
                                src="/bruno.jpg"
                                alt="Expert"
                                width={90}
                                height={90}
                                className="w-full h-full object-cover rounded-xl"

                            />
                        </div>
                        <div className="flex flex-col gap-2 sm:flex-row justify-between w-full  items-center">
                            <div className="text-white flex flex-col sm:flex-row sm:gap-32 items-center">
                                <h3 className="text-sub-title">Sebastian Nybegert</h3>
                                <p className="text-neutral-600 ">
                                    Senior nigga expert
                                </p>
                            </div>
                            <Link href="/" className="text-white">
                                <Linkedin />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experts