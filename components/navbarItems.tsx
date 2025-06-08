"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
    { label: "Home", href: "/" },
    { label: "Companions", href: "/companions" },
    { label: "My journey", href: "/my-journey" },
]

const NavbarItems = () => {
    const pathName = usePathname()

    return (
        <nav className="flex items-center gap-4">
            {
                navItems.map(({ label, href }) => (
                    <Link
                        key={label}
                        href={href}
                        className={cn({"text-primary font-semibold" : pathName === href})}
                    >
                        {label}
                    </Link>
                ))
            }
        </nav>
    )
}

export default NavbarItems
