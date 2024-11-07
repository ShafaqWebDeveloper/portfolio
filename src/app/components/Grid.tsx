
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export function Grid() {
  return (
    <div className="" id="about">
      <h1 className="text-white text-5xl font-bold mb-5 text-center">About Me</h1>
    <BentoGrid className="max-w-7xl mx-auto" >
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          icon={item.icon}
          backgroundImage={item.backgroundImage} // Pass the backgroundImage prop
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
    </div>
  );
}


// Adding backgroundImage property for each item
const items = [
  {
    title: "Client-Focused Collaboration",
    description: "I believe in building strong client relationships by making communication a priority. I ensure that my clients are consistently updated and involved at every stage, from planning to deployment, which builds trust and makes for smooth project completion.",
    
    icon: <IconClipboardCopy className="h-4 w-4 text-white text-bold text-2xl" />,
    backgroundImage: "/img/1.avif", // Specify background image
  },
  {
    title: "Commitment to Best Coding Practices",
    description: "My code follows industry best practices, ensuring modularity, readability, and maintainability. From clean architecture patterns to secure coding standards, I’m dedicated to delivering work that’s not only functional but scalable and future-proof.",
    icon: <IconFileBroken className="h-4 w-4 text-white text-bold text-2xl" />,
    backgroundImage: "/img/9.avif",
  },
  {
    title: "Full Stack Expertise Across Technologies",
    description: "With proficiency across the stack, I handle everything from responsive front-end designs with HTML, CSS,Bootstrap,tailwindcss and React, Nextjs to robust back-end functionality with Node.js, Express,PHP,Laravel and database like MySQL. My skills span from RESTful API design to optimizing website performance.",
    icon: <IconSignature className="h-4 w-4 text-white text-bold text-2xl" />,
    backgroundImage: "/img/4.webp",
  },
  {
    title: "Agile, Flexible Development Process",
    description: "I follow an agile development process, which means my projects are iterative and adaptable to client feedback. I break projects into manageable sprints, focusing on incremental improvements and adjusting priorities to align with evolving project goals.",
    icon: <IconTableColumn className="h-4 w-4 text-white text-bold text-2xl" />,
    backgroundImage: "/img/5.webp",
  },
  {
    title: "User Experience at the Core",
    description: "A positive user experience is at the heart of my work. I prioritize accessibility, ease of navigation, and responsiveness, ensuring that users enjoy a seamless experience regardless of device or browser.",
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-white text-bold text-2xl" />,
    backgroundImage: "/img/6.webp",
  },
  {
    title: "Driven by Problem Solving",
    description: "Each project presents unique challenges, and I’m driven by finding efficient, innovative solutions. I analyze issues deeply to solve root problems, not just symptoms, creating solutions that are both effective and sustainable for the long term.",
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-white text-bold text-2xl" />,
    backgroundImage: "/img/7.webp",
  },
  {
    title: "Professionalism and Deadline Commitment",
    description: "Timeliness is essential, and I’m dedicated to meeting project deadlines without sacrificing quality. I prioritize efficient workflows, set realistic timelines, and am always transparent about progress to ensure on-time delivery.",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-white text-bold text-2xl" />,
    backgroundImage: "/img/8.webp",
  },
];
