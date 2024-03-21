import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='border-t'>
      <div className='flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row'>
        <Link href='/'>
          {/* <Image 
            src="/assets/images/Eventlio.png"
            alt="logo"
            width={28}
            height={38}
          /> */}
          <h1 className='text-[25px] font-extrabold grad'>Eventlio </h1>
        </Link>


        <p className='grad'> Created by meezumi. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer