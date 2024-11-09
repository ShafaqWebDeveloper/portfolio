import React from "react";
import { Spotlight } from "./ui/Spotlight";

export  default function Hero() {
  return (
    (<div
      className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1
          className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Code with passion, design with purpose, and deliver with precision.
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">Hi, I’m  Shafaq Areej ,a Full Stack Developer Creating Scalable & Engaging Web Solutions.</p>
        <p
          className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
       Turning ideas into powerful digital experiences with a focus on user-centric design, cutting-edge technology, and efficient solutions for real-world impact.
        </p>
       
      </div>
    </div>)
  );
}
