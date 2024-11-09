"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import { TbArrowBigRightFilled } from "react-icons/tb";
import Link from "next/link";

export function Projects() {
  return (
    <>
    <div id="projects">
    <div className="flex items-center justify-center mt-10"><h1 className="text-center text-5xl font-bold text-white">My Recent Projects</h1></div>
<div className="flex">
    <div className="ml-7">
    <CardContainer className="inter-var">
    <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
      <CardItem
        translateZ="50"
        className="text-xl font-bold text-neutral-600 dark:text-white"
      >
        For the hiring process
      </CardItem>
      <CardItem
        as="p"
        translateZ="60"
        className="text-neutral-500 text-sm max-w-sm mt-1 dark:text-neutral-300"
      >
        This website is to unlock the full potential of your hiring efforts with our unified platform, offering intuitive tools to streamline interviews, meetings, and evaluations, empowering HR professionals and candidates to focus on what matters most.


      </CardItem>
      <CardItem translateZ="100" className="w-full mt-4">
        <Image
          src="/img/pro3.png"
          height="1000"
          width="1000"
          className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
          alt="thumbnail"
        />
      </CardItem>
      <div className="flex justify-center items-center mt-3">
        
        <CardItem
          translateZ={20}
          as={Link}
          href="https://www.recruitersnexus.com/"
          target="__blank"
          className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold flex"
        >
          Check Live site <TbArrowBigRightFilled className="ml-2 mt-1"/>
        </CardItem>
      </div>
    </CardBody>
  </CardContainer>
  </div>
  <div className="ml-7">
    <CardContainer className="inter-var">
    <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
      <CardItem
        translateZ="50"
        className="text-xl font-bold text-neutral-600 dark:text-white"
      >
        Latest Technical Skills. Yours For The Taking.
      </CardItem>
      <CardItem
        as="p"
        translateZ="60"
        className="text-neutral-500 text-sm max-w-sm mt-1 dark:text-neutral-300"
      >
        Sharpen your edge with the best project-based online courses and expert feedback you would find on any other platform


      </CardItem>
      <CardItem translateZ="100" className="w-full mt-4">
        <Image
          src="/img/pro2.png"
          height="1000"
          width="1000"
          className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
          alt="thumbnail"
        />
      </CardItem>
      <div className="flex justify-center items-center mt-3">
        
        <CardItem
          translateZ={20}
          as={Link}
          href="https://courssins.netlify.app/"
          target="__blank"
          className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold flex"
        >
          Check Live site  <TbArrowBigRightFilled className="ml-2 mt-1"/>
        </CardItem>
      </div>
    </CardBody>
  </CardContainer>
  </div>

  <div className="ml-7">
    <CardContainer className="inter-var">
    <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
      <CardItem
        translateZ="50"
        className="text-xl font-bold text-neutral-600 dark:text-white"
      >
        ChatBot
      </CardItem>
      <CardItem
        as="p"
        translateZ="60"
        className="text-neutral-500 text-sm max-w-sm mt-1 dark:text-neutral-300"
      >
       This is a web based AI chatbot. It accepts both Voice and written inputs.Stickers and emojies are also there to make chatting interactive.It indicated typing indicator while chatbot is generating response.


      </CardItem>
      <CardItem translateZ="100" className="w-full mt-4">
        <Image
          src="/img/pro4.png"
          height="1000"
          width="1000"
          className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
          alt="thumbnail"
        />
      </CardItem>
      <div className="flex justify-center items-center mt-3">
        
        <CardItem
          translateZ={20}
          as={Link}
          href="/Chatbot"
          target="__blank"
          className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold flex"
        >
          Check Live site  <TbArrowBigRightFilled className="ml-2 mt-1"/>
        </CardItem>
      </div>
    </CardBody>
  </CardContainer>
  </div>
  </div>
  <div className="flex">
    <div className="ml-7">
    <CardContainer className="inter-var">
    <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
      <CardItem
        translateZ="50"
        className="text-xl font-bold text-neutral-600 dark:text-white"
      >
        Ecommerce webiste
      </CardItem>
      <CardItem
        as="p"
        translateZ="60"
        className="text-neutral-500 text-sm max-w-sm mt-1 dark:text-neutral-300"
      >
        This is an e-commerce website. For the front end of this website, I used HTML, CSS, and JavaScript technologies. To store our products’ details and data I used the MYSQL database and the backend is managed by PHP and its framework Laravel.AJAX and jQuery are used to minimize the loading time of the website.


      </CardItem>
      <CardItem translateZ="100" className="w-full mt-4">
        <Image
          src="/img/pro5.png"
          height="1000"
          width="1000"
          className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
          alt="thumbnail"
        />
      </CardItem>
      <div className="flex justify-center items-center mt-3">
        
        <CardItem
          translateZ={20}
          as={Link}
          href="/Ecommerce"
          target="__blank"
          className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold flex"
        >
          Check Live site <TbArrowBigRightFilled className="ml-2 mt-1"/>
        </CardItem>
      </div>
    </CardBody>
  </CardContainer>
  </div>
  <div className="ml-7">
    <CardContainer className="inter-var">
    <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
      <CardItem
        translateZ="50"
        className="text-xl font-bold text-neutral-600 dark:text-white"
      >
       Web App for Ecommerce store
      </CardItem>
      <CardItem
        as="p"
        translateZ="60"
        className="text-neutral-500 text-sm max-w-sm mt-1 dark:text-neutral-300"
      >
        This is an Web App that will manage Ecommerce business.Categories , subcategories, products of store and their details can be added, edited , viewed and deleted here.It can manage POS system also. Admin can specify role and access of other member who can acess which page of software. 


      </CardItem>
      <CardItem translateZ="100" className="w-full mt-4">
        <Image
          src="/img/ewebapp.png"
          height="1000"
          width="1000"
          className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
          alt="thumbnail"
        />
      </CardItem>
      <div className="flex justify-center items-center mt-3">
        
        <CardItem
          translateZ={20}
          as={Link}
          href="/Ewebapp"
          target="__blank"
          className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold flex"
        >
          Check Live site <TbArrowBigRightFilled className="ml-2 mt-1"/>
        </CardItem>
      </div>
    </CardBody>
  </CardContainer>
  </div>

  <div className="ml-7">
    <CardContainer className="inter-var">
    <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
      <CardItem
        translateZ="50"
        className="text-xl font-bold text-neutral-600 dark:text-white"
      >
        For the hiring process
      </CardItem>
      <CardItem
        as="p"
        translateZ="60"
        className="text-neutral-500 text-sm max-w-sm mt-1 dark:text-neutral-300"
      >
        This website is to unlock the full potential of your hiring efforts with our unified platform, offering intuitive tools to streamline interviews, meetings, and evaluations, empowering HR professionals and candidates to focus on what matters most.


      </CardItem>
      <CardItem translateZ="100" className="w-full mt-4">
        <Image
          src="/img/pro3.png"
          height="1000"
          width="1000"
          className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
          alt="thumbnail"
        />
      </CardItem>
      <div className="flex justify-center items-center mt-3">
        
        <CardItem
          translateZ={20}
          as={Link}
          href="https://www.recruitersnexus.com/"
          target="__blank"
          className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold flex"
        >
          Check Live site <TbArrowBigRightFilled className="ml-2 mt-1"/>
        </CardItem>
      </div>
    </CardBody>
  </CardContainer>
  </div>
  </div>
  </div>
    </>
    
  );
}
