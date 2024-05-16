"use client"

import Link from "next/link"
import Logo from "../../elements/icons/Logo"
import { Menu } from "lucide-react"
import { useState } from "react"
import cx from "classnames"
import headerData from "@/data/header"

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
        setShowMenu((prev) => !prev);
    }

    return(
        <header className="fixed bg-secondary-950 z-10 w-full py-6 border-b sm:border-none">
            <div className="container flex justify-between">
                <div className="flex items-center gap-10">
                    <Link href="/" className="z-10">
                        <Logo />
                    </Link>
                    <nav className={cx("flex gap-8 list-none bg-secondary-950 sm:relative sm:translate-y-0 sm:h-fit sm:w-fit absolute h-screen w-screen right-0 top-0 text-white flex-col items-center transition-all justify-center sm:flex-row",
                        showMenu === true ? "translate-y-0": "-translate-y-full"
                    )}>
                        {headerData.header.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Link className="capitalize" href={item.href}>
                                        {item.label}
                                    </Link>
                                </li>
                            )
                        })}
                    </nav>
                </div>

                <div className="flex z-10 space-x-4">
                    <button onClick={toggleMenu} className="p-3 sm:hidden flex items-center justify-center border rounded-full text-white">
                        <Menu />
                    </button>
                    <button className="border hover:bg-white hover:text-black duration-300 py-3 px-5 rounded-full text-white">Get in Touch</button>
                </div>
            </div>
        </header>
    )
}

export default Header