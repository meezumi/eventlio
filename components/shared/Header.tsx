import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { Button } from '../ui/button'

const Header = () => {
  return (
    <header className='w-full border-b'>
      <div className="wrapper flex items-center justify-between">
        {/* wrapper class is added in the global class css. */}
        <Link href='/' className='w-36'>
          <Image 
            src='/assets/images/logo.svg' width={128} height={38}
            alt = 'Eventlio logo'
          />
        </Link>

        <div className='flex w-32 justify-end gap-3'>
          <SignedIn>
            <UserButton afterSignOutUrl='/' />
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