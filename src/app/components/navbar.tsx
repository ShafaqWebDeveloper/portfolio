"use client"
import React from 'react'
import { Button } from './ui/moving-border'
import Link from 'next/link'

const navbar = () => {
  return (
    <>
      <nav className='text-center mt-8 bg-transparent'>
        <Link href="/" className='mr-6 font-bold text-2xl'>Home</Link>
        <Link href="/about" className='mr-6 font-bold text-2xl'>About</Link>
        <Link href="/Experience" className='mr-6 font-bold text-2xl'>Experience</Link>
       <Link href="/projects"><Button className='font-bold text-2xl p-6'>Projects  </Button></Link> 

      </nav>
    </>
  )
}

export default navbar
