'use client'

import { IEvent } from '@/lib/database/models/event.model'
import { SignedIn, SignedOut, useUser } from '@clerk/nextjs'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import Checkout from './Checkout'

const CheckoutButton = ({event}: { event: IEvent}) => {
  // who is purchasing the event 
  const { user } = useUser();
  const userId = user?.publicMetadata.userId as string;

  // to check if the event has ended 
  const hasEventFinished = new Date(event.endDateTime) < new Date();

  return (
    <div className='flex items-center gap-3'>
      {/* we cannot by past events (checking it here) */}
      {hasEventFinished ? (
        <p className='p-2 text-red-400'>Sorry, tickets no longer available :(</p>
      ): (
        <>
          {/* if the user is signed out and wants to buy tickets */}
          <SignedOut>
            <Button asChild className='button rounded-full ' size="lg"> 
              <Link href="/sign-in"> 
                Get Tickets
              </Link>
            </Button>
          </SignedOut>

          {/* if the user is signed in and wants to buy the tickets  */}
          <SignedIn>
            {/* the checkout component comes in here  */}
            <Checkout 
              event={event}
              userId={userId}
            />
          </SignedIn>
        </>
      )} 
    </div>
  )
}

export default CheckoutButton