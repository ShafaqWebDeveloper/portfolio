"use client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function Happyclients() {
  return (
    <div id="testimonial" className="h-[40rem] rounded-md flex flex-col antialiased bg-black dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <h1 className="text-5xl font-bold mb-5 text-white">Happy Clients</h1>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Working with Shafaq was a fantastic experience. She transformed our outdated website into a modern, user-friendly platform that has brought in more traffic and leads. Her attention to detail and innovative approach set her apart. Highly recommend her expertise!"

,
    name: "Uzair Khan",
  },
  {
    quote:
     "Shafaq's skill in both front-end and back-end development is remarkable. She quickly understood our needs and delivered a seamless, high-performing site ahead of schedule. Her responsiveness and commitment made the whole process smooth and enjoyable."

,
    name: "Asim Munir",
  },
  {
    quote: "Our e-commerce site needed a fresh look, and Shafaq exceeded our expectations. From design to deployment, she was professional, efficient, and meticulous. The results have been amazing, and our sales have noticeably increased. Truly a pleasure to work with!"

,
    name: "Edgar Allan Poe",
  
  },
  {
    quote:
      "Shafaq has an exceptional talent for taking complex ideas and turning them into functional, beautiful websites. She patiently listened to all my requirements and provided valuable insights along the way. I'm thrilled with the outcome and look forward to working with her again!"

,
    name: "Jane Austen",
  
  },
  {
    quote:
      "As a startup founder, finding someone who can bring our vision to life online is essential. Shafaq did just that and more. Her creative flair and technical expertise are top-notch, and she communicated every step of the way. Our site looks amazing and runs flawlessly!"

,
    name: "Ishmal Abeer",

  },
];
