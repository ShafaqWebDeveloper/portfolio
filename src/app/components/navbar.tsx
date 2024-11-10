"use client";
import React from 'react';
import { Button } from './ui/moving-border';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-transparent mt-4 p-4 text-white">
      <div className="max-w-4xl mx-auto flex flex-wrap justify-center md:justify-center items-center space-x-4 md:space-x-6 text-center">
        <Link href="/" className="font-bold text-lg md:text-2xl">Home</Link>
        <Link href="/about" className="font-bold text-lg md:text-2xl">About</Link>
        <Link href="/Experience" className="font-bold text-lg md:text-2xl">Experience</Link>
        <Link href="/projects">
          <Button className="font-bold text-lg md:text-2xl p-2 md:p-4">
            Projects
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
