import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import NavbarItems from './navbarItems'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <Link href="/">
                <figure className='flex items-center gap-2.5 cursor-pointer'>
                    <Image
                        src="/images/logo.svg"
                        alt='logo'
                        width={46}
                        height={44}
                    />
                </figure>
            </Link>
            <div className="flex items-center gap-8">
                <NavbarItems />
                <SignedOut>
                    <SignInButton>
                        <button className="btn-signin">Sign In</button>
                    </SignInButton>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </nav>
    )
}

export default Navbar