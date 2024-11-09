"use client"
import React from 'react'
import { Button } from './ui/moving-border'
import Link from 'next/link'

const navbar = () => {
  return (
    <>
      <nav className='text-center mt-8 bg-transparent'>
        <a href="/" className='mr-6 font-bold text-2xl'>Home</a>
        <a href="/about" className='mr-6 font-bold text-2xl'>About</a>
        <a href="/Experience" className='mr-6 font-bold text-2xl'>Experience</a>
       <Link href="/projects"><Button className='font-bold text-2xl p-6'>Projects  </Button></Link> 

      </nav>
    </>
  )
}

export default navbar
