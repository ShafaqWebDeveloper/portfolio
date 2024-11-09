import React from 'react'
import {workExperience} from '../data'
import { Button } from '../components/ui/moving-border'
import Image from 'next/image';

function Experience() {
  return (
    <>
      <div className="flex flex-col antialiased bg-black items-center justify-center relative overflow-hidden" id="experience">
<h1 className='text-5xl font-bold mb-5 text-white'>My Work Experience</h1>
<div className="w-full grid lg:grid-cols-2 sm:grid-cols-1 gap-10">
{workExperience.map((card) => (
          <Button
            key={card.id}
            //   random duration will be fun , I think , may be not
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            
            // remove bg-white dark:bg-slate-900
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <Image
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-32 md:w-20 w-16"
              
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold text-white">
                  {card.title}
                </h1>
                <p className="text-start text-white mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
    ))}
</div>
      </div>
    </>
  );
};

export default Experience
