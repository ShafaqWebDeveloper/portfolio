"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";

export default function Navbar() {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Testimonails", link: "/testimonials" },
  ];

  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}

