'use client'

import { headerLinks } from '@/constants'
import  Link  from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavItems = () => {
  // to figure out, which link is active from the items we use pathname hook to identify the path we are on.
  const pathname = usePathname();


  return (
    <ul className='md:flex-between flex w-full flex-col items-start gap-5 md:flex-row'>
      {headerLinks.map((link) => {
        const isActive = pathname === link.route;

        return (
          <li
            key={link.route}
            className={`${isActive && 'text-primary-500'
            } flex-center p-medium-16 whitespace-nowrap`}
          >
            <Link href={link.route}>{link.label}</Link>
          </li>
        )
      })}

    </ul>
  )
}

export default NavItems