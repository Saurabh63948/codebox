import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function UpgradeToPro() {
  return (
    <div className='flex items-center flex-col p-5 border-2 rounded-2xl mt-8'>
     <Image src={"/logo.png"} alt='logo' height={70} width={70} />
     <h2 className='text=3xl font-game' >Upgrade to Pro</h2>
     <p className='font-game text-gray-500 text-xl text-center'>Join Pro Membership And Get All Course Access </p>
     <Link href={'/pricing'} >
     
     <Button className='font-game w-full' variant={'game'}>Upgrade</Button>
     </Link>
    </div>
  )
}

export default UpgradeToPro
