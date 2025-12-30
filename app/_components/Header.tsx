import Image from 'next/image'
import React from 'react'
import logo from "../../public/logo.png"
import { Button } from '@/components/ui/button'
import Navbar, { NavigationMenuDemo } from './Navbar'

function Header() {
  return (
    <div className='p-4 max-w-7xl flex justify-between items-center w-full'>

      <div className='flex gap-2 items-center' >

     <Image src={logo} alt='logo' width={30} height={30} />
      <h2 className='font-bold text-2xl font-game' >
        CodeBox
      </h2>
      </div>
      {/* {navbar} */}
       <Navbar/>
      <Button className='font-game ' variant={'outline'} >Sign Up</Button>

     
    </div>
  )
}

export default Header
