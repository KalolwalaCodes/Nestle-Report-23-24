import { cn } from "../../utils/cn";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  dataToFeed,
  direction = "right",
  speed = "slow",
  pauseOnHover = true,
  className,
  issec2
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);
  console.log(dataToFeed);
  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        `scroller relative z-20  ${!issec2?'max-w-7xl':'max-w-9xl'} overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]`,
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {dataToFeed.map((item, idx) => (
          
          <li
            className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0  px-8 py-6 md:w-[450px]"
            style={{
              background:'#fdf1e5'
                ,
            }}
            key={idx}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
               <div className=' flex align-middle justify-center'>
        <img className='h-40 w-40 object-cover rounded-full' src={item[0]} alt="" />
         </div>
              <div className="relative z-20 mt-2 flex flex-row items-center">
                <span className="flex flex-col gap-1">
                  <span className=" text-xl leading-[1.6] text-black font-bold text-center">
                    {item[1]}
                  </span>
                  <span className=" text-sm leading-[1.6] text-black font-normal text-center">
                    {item[2]}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
