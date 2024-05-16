import { Facebook } from "lucide-react"
import Logo from "../elements/icons/Logo"
import Link from "next/link"


export const Footer = () => {
    return(
        <div className="p-4">
            <footer className="bg-secondary-950 rounded-3xl py-24 sm:py-48">
                <div className="container">
                    <div className="grid sm:grid-cols-6 xl:grid-cols-12 gap-8">
                        <div className="col-span-3">
                            <Logo />
                        </div>

                        <div className="col-span-9 grid sm:grid-cols-9 gap-8">
                            <div className="col-span-3 w-full grid-cols-2 sm:grid-cols-3 sm:gap-0 gap-4 grid sm:col-span-6">
                                <ul className="list-none text-white grid gap-6">
                                    <label className="text-white font-semibold">Platform</label>
                                    <li>
                                        <Link href="/">Platform</Link>
                                    </li>
                                    <li>
                                        <Link href="/">Solutions</Link>
                                    </li>
                                    <li>
                                        <Link href="/">How it works</Link>
                                    </li>
                                    <li>
                                        <Link href="/">Pricing</Link>
                                    </li>
                                </ul>
                                <ul className="list-none text-white grid gap-6">
                                    <label className="text-white font-semibold">Platform</label>
                                    <li>
                                        <Link href="/">Platform</Link>
                                    </li>
                                    <li>
                                        <Link href="/">Solutions</Link>
                                    </li>
                                    <li>
                                        <Link href="/">How it works</Link>
                                        <span className="ml-2 p-1 bg-primary-300 text-black rounded-md">News</span>
                                    </li>
                                    <li>
                                        <Link href="/">Pricing</Link>
                                    </li>
                                </ul>
                                <ul className="list-none text-white grid gap-6">
                                    <label className="text-white font-semibold">Platform</label>
                                    <li>
                                        <Link href="/">Platform</Link>
                                    </li>
                                    <li>
                                        <Link href="/">Solutions</Link>
                                    </li>
                                    <li>
                                        <Link href="/">How it works</Link>
                                    </li>
                                    <li>
                                        <Link href="/">Pricing</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-span-3 grid gap-4 sm:col-end-10">
                                <div className="flex items-center gap-4 p-1 bg-white/25 rounded-full">
                                    <span className="bg-primary-300 h-[48px] w-[48px] flex items-center justify-center rounded-full">
                                        <Facebook />
                                    </span>
                                    <p className="text-white font-medium">
                                        Follow us on Facebook
                                    </p>
                                </div>
                                <div className="flex items-center gap-4 p-1 bg-white/25 rounded-full">
                                    <span className="bg-primary-300 h-[48px] w-[48px] flex items-center justify-center rounded-full">
                                        <Facebook />
                                    </span>
                                    <p className="text-white font-medium">
                                        Follow us on Facebook
                                    </p>
                                </div>
                                <div className="flex items-center gap-4 p-1 bg-white/25 rounded-full">
                                    <span className="bg-primary-300 h-[48px] w-[48px] flex items-center justify-center rounded-full">
                                        <Facebook />
                                    </span>
                                    <p className="text-white font-medium">
                                        Follow us on Facebook
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}