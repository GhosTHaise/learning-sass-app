import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

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
                <p>Home</p>
                <p>Companions</p>
                <p>My journey</p>
                <p>Sign in</p>
            </div>
        </nav>
    )
}

export default Navbar