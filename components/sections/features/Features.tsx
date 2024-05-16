import Ev from "@/components/elements/icons/Ev"

const Features = () => {
  return (
    <section>
        <div className="container">
            <div className="flex items-center gap-2 border-b border-neutral-60  pb-4">
                <span className="rounded-full bg-primary-300 h-2 w-2"/>
                <span>Solutions</span>
            </div>

            <div>
                <div>
                    <h2 className="text-section leading-none">Key to clean future</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 xl:grid-cols-4">
                    <div className="flex flex-col gap-6 items-start">
                        <Ev />
                        <div>
                            <h3 className="text-title leading-none mb-4">Ev charging</h3>
                            <p className="text-neutral-800">
                                Evs use electricty as a power source, which can be generated from renewable energy sources. Our solutions help reducing greenhouse gas emissions in the transport sections.
                            </p>
                        </div>
                        <button className="text-primary-950">Read More</button>
                    </div>

                    <div className="flex flex-col gap-6 items-start">
                        <Ev />
                        <div>
                            <h3 className="text-title leading-none mb-4">Ev charging</h3>
                            <p className="text-neutral-800">
                                Evs use electricty as a power source, which can be generated from renewable energy sources. Our solutions help reducing greenhouse gas emissions in the transport sections.
                            </p>
                        </div>
                        <button className="text-primary-950">Read More</button>
                    </div>

                    <div className="flex flex-col gap-6 items-start">
                        <Ev />
                        <div>
                            <h3 className="text-title leading-none mb-4">Ev charging</h3>
                            <p className="text-neutral-800">
                                Evs use electricty as a power source, which can be generated from renewable energy sources. Our solutions help reducing greenhouse gas emissions in the transport sections.
                            </p>
                        </div>
                        <button className="text-primary-950">Read More</button>
                    </div>

                    <div className="flex flex-col gap-6 items-start">
                        <Ev />
                        <div>
                            <h3 className="text-title leading-none mb-4">Ev charging</h3>
                            <p className="text-neutral-800">
                                Evs use electricty as a power source, which can be generated from renewable energy sources. Our solutions help reducing greenhouse gas emissions in the transport sections.
                            </p>
                        </div>
                        <button className="text-primary-950">Read More</button>
                    </div>

                </div>
            </div>
        </div>
    </section>
  )
}

export default Features
