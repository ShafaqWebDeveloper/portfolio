import { cn } from "../../lib/utils";

interface BentoGridProps {
  className?: string;
  children?: React.ReactNode;
}

export const BentoGrid = ({ className, children }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

interface BentoGridItemProps {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  icon?: React.ReactNode;
  backgroundImage?: string; // add backgroundImage prop
}

export const BentoGridItem = ({
  className,
  title,
  description,
  icon,
  backgroundImage,
}: BentoGridItemProps) => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`, // add background image
        backgroundSize: "cover", // optional: make the image cover the entire div
        backgroundPosition: "center", // optional: center the background image
      }}
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >

      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans font-bold text-white  dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-white text-sm dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
