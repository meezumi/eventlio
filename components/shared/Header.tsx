import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { Button } from '../ui/button'
import NavItems from './NavItems'
import MobileNav from './MobileNav'

const Header = () => {
  return (
    <header className='w-full border-b'>
      <div className="wrapper flex items-center justify-between">
        {/* wrapper class is added in the global class css. */}
        <Link href='/' className='w-36'>
          {/* <Image 
            src='/assets/images/' width={128} height={38}
            alt = 'Eventlio logo'
          /> */}
          <h1 className='text-[25px] font-extrabold grad'>Eventlio </h1>
        </Link>

        {/* for desktop devices */}
        <SignedIn> 
          <nav className='md:flex-between hidden w-full max-w-xs'>
            {/* this is going to hide it in mobile devices and show in desktop */}
            <NavItems />
          </nav>
        </SignedIn>


        <div className='flex w-32 justify-end gap-3'>
          {/* for mobile devices */}
          <SignedIn>
            <UserButton afterSignOutUrl='/' />
            <MobileNav />
          </SignedIn>

          {/* we will add clerk here, which is used for authentication */}
          <SignedOut>
            {/* adding the shadcn component: button */}
              <Button asChild className='rounded-full' size='lg'> 
                <Link href='/sign-in'>
                  Login
                </Link>
              </Button>
            </SignedOut> 
          {/*  from clerk/nextjs */}
        </div>

      </div>
    </header>

  )
}

export default Header