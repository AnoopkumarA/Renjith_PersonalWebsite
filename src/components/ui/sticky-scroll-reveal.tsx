"use client";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: React.ReactNode;
    description: React.ReactNode;
    content?: React.ReactNode;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const [isMobile, setIsMobile] = React.useState(false);
  const ref = useRef(null);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  return (
    <motion.div
      className="h-[40rem] w-[26rem] md:w-full overflow-y-auto experience-section no-scrollbar flex justify-center relative space-x-16 rounded-md p-12"
      ref={ref}
    >
      <div className="div relative flex items-start px-6">
        <div className="max-w-3xl">
          {content.map((item, index) => (
            <div key={"item.title + index"} className="my-24 relative">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: isMobile ? 1 : (activeCard === index ? 1 : 0.3),
                }}
                className="text-3xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: isMobile ? 1 : (activeCard === index ? 1 : 0.3),
                }}
                className="text-lg text-slate-300 max-w-xl mt-12"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-48" />
        </div>
      </div>
      <div
        className={cn(
          "hidden lg:block h-96 w-[500px] rounded-xl sticky top-10 overflow-hidden",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};