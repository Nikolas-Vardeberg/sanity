import Image from "next/image"



const Blog = () => {
    return(
        <section className="py-48 bg-secondary-950">
            <div className="container">
                <div className="flex text-white items-center gap-2 border-b border-neutral-300 mb-12 sm:mb-14 pb-4">
                    <span className="h-3 w-3 bg-primary-300 block rounded-full"/>
                    <span>Blog</span>
                </div>

                <div>
                    <div className="w-full flex justify-between items-center">
                        <h2 className="text-features leading-none text-white">Blog</h2>
                        <button className="border px-6 py-3 rounded-full text-white">
                            See all
                        </button>
                    </div>

                    <div className="grid mt-12 sm:mt-24 grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex cursor-pointer group flex-col gap-8">
                            <div className="aspect-video rounded-3xl overflow-hidden h-[360px]">
                                <Image 
                                    src="/hero1.png"
                                    alt="Hero"
                                    width={330}
                                    height={330}
                                    className="w-full h-full group-hover:scale-110 duration-300 object-cover"
                                />
                            </div>

                            <div>
                                <div>
                                    <h3 className="text-white text-sub-title mb-4">
                                        Harnassing the Power of the sun: exploring the world of solar energy
                                    </h3>
                                    <p className="text-neutral-400">
                                        Solar enrergy is revoauto the way we power our world. in this blog post substantib enery soirce for a rbri fufu
                                    </p>
                                </div>
                                <div className="flex items-center gap-6 mt-6">
                                    <div className="flex items-center gap-3">
                                        <Image 
                                            src="/bruno.jpg"
                                            alt="Bruno"
                                            height={40}
                                            width={40}
                                            className="h-[40px] object-cover rounded-full"
                                        />
                                        <span className="text-white">Leslie Alexander</span>
                                    </div>  
                                    <span className="text-white">9 min read</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex cursor-pointer group flex-col gap-8">
                            <div className="aspect-video rounded-3xl overflow-hidden h-[360px]">
                                <Image 
                                    src="/hero1.png"
                                    alt="Hero"
                                    width={330}
                                    height={330}
                                    className="w-full h-full group-hover:scale-110 duration-300 object-cover"
                                />
                            </div>

                            <div>
                                <div>
                                    <h3 className="text-white text-sub-title mb-4">
                                        Harnassing the Power of the sun: exploring the world of solar energy
                                    </h3>
                                    <p className="text-neutral-400">
                                        Solar enrergy is revoauto the way we power our world. in this blog post substantib enery soirce for a rbri fufu
                                    </p>
                                </div>
                                <div className="flex items-center gap-6 mt-6">
                                    <div className="flex items-center gap-3">
                                        <Image 
                                            src="/bruno.jpg"
                                            alt="Bruno"
                                            height={40}
                                            width={40}
                                            className="h-[40px] object-cover rounded-full"
                                        />
                                        <span className="text-white">Leslie Alexander</span>
                                    </div>  
                                    <span className="text-white">9 min read</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog