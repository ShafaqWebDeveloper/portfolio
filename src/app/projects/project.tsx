"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../hooks/use-outside-click";

export function Project() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }
  
    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);
  
  useOutsideClick(ref, () => setActive(null));
  
  return (
    <>
      <div className="text-center py-4 mt-10">
        <h1 className="text-white text-5xl font-semibold">My Recent Projects</h1>
      </div>
  
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white text-black rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white hover:text-black dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>
  
              <div>
                <div className="flex justify-between items-start p-4">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className={`font-bold ${active ? "text-black" : "text-white"} dark:${active ? "text-neutral-200" : "text-neutral-400"} hover:text-black`}
                      >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className={`${
                        active ? "text-black" : "text-white"
                      } dark:${active ? "text-neutral-400" : "text-neutral-500"} hover:text-black`}
                    >
                                    {active.description}
                    </motion.p>
                  </div>
  
                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-white text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
  
      <ul className="max-w-2xl mx-auto w-full gap-4 hover:text-black">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="hover:text-black p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col md:flex-row">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="hover:text-black">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="hover:text-black font-medium text-white dark:text-neutral-200 text-center md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="hover:text-black text-white dark:text-neutral-400 text-center md:text-left"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black mt-4 md:mt-0"
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </>
  );

}
export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "For the hiring process and job oppertunities",
    title: "Recruitersnexus.com",
    src: "/img/pro3.png",
    ctaText: "Visit",
    ctaLink: "https://www.recruitersnexus.com/",
    content: () => {
      return (
        <p className="text-black">
           This website is to unlock the full potential of your hiring 
           efforts with our unified platform, offering intuitive tools
            to streamline interviews, meetings, and evaluations,
             empowering HR professionals and candidates to focus on what
              matters most.
        </p>
      );
    },
  },
  {
    description: "Latest Technical Skills. Yours For The Taking.",
    title: "Courssins",
    src: "/img/pro2.png",
    ctaText: "Visit",
    ctaLink: "https://courssins.netlify.app/",
    content: () => {
      return (
        <p className="text-black">
         Sharpen your edge with the best project-based online courses 
         and expert feedback you would find on any other platform
</p>
      );
    },
  },

  {
    description: "Web based Chatbot",
    title: "ChatBot",
    src: "/img/pro4.png",
    ctaText: "Visit",
    ctaLink: "/Chatbot",
    content: () => {
      return (
        <p className="text-black">
         This is a web based AI chatbot. It accepts both Voice and
          written inputs.Stickers and emojies are also there to make 
          chatting interactive.It indicated typing indicator while 
          chatbot is generating response.


        </p>
      );
    },
  },
  {
    description: "Website for the online shopping",
    title: " Ecommerce webiste",
    src: "/img/pro5.png",
    ctaText: "Visit",
    ctaLink: "/Ecommerce",
    content: () => {
      return (
        <p className="text-black">
           This is an e-commerce website. For the front end of this
            website, I used HTML, CSS, and JavaScript technologies. 
            To store our products’ details and data I used the MYSQL 
            database and the backend is managed by PHP and its framework 
            Laravel.AJAX and jQuery are used to minimize the loading time
             of the website.

</p>
      );
    },
  },
  {
    description: "Ecommerce Web App",
    title: "Web App for Ecommerce store",
    src: "/img/ewebapp.png",
    ctaText: "Visit",
    ctaLink: "/Ewebapp",
    content: () => {
      return (
        <p className="text-black">
          This is a web app to manage an Ecommerce store. It has the login functionality.
          Admin can add, view, edit or delete categories, subcategories and product related information.
          It has POS option to manage the physicall store.It generates Invoices    </p>
      );
    },
  },
];
