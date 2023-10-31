import Link from 'next/link'
import React from 'react'
import { Separator } from '~/ui/separator'

function Navbar() {
  return (
    <div>
        <div className="flex space-x-5">
            <Link href="/" className='text-5xl'>glassyPDM</Link>
            <div className='flex flex-row place-items-center space-x-5'>
                <Link href="/files" className='text-xl'>Project Files</Link>      
                <Link href="/about" className='text-xl'>About</Link>      
                <Link href="/login" className='text-xl'>Login</Link>     
            </div> 
        </div>
        <Separator />
    </div>
  )
}

export default Navbar