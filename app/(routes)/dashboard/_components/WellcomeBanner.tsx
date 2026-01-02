"use client"


import React from 'react'

import Image from 'next/image'
import { useUser } from '@clerk/nextjs'
function WellcomeBanner() {
  const {user}=useUser();
  return (
    <div className='flex gap-3 items-center' >
      <Image src={'/coding.png'} alt='robo' width={120} height={120} />
      <h2 className='font-game text-2xl p-4 border bg-zink-800 rounded-lg rounded-bl-none' >Wellcome back, <span className='font-game text-yellow-400'>{user?.fullName}</span>,Start learning something new </h2>
    </div>
  )
}

export default WellcomeBanner
