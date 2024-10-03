"use client";

import clsx from "clsx";
import { PropsWithChildren, useEffect, useLayoutEffect, useRef, useState } from "react";
import { InView } from "react-intersection-observer";
import { animateScroll } from "react-scroll";

export type AutoScrollBoxProps = PropsWithChildren<{
  className?: string;
}>;

export default function AutoScrollBox(props: AutoScrollBoxProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [speed, setSpeed] = useState(100);

  useEffect(() => {
    let lastScrollTop = window.scrollY;
    let lastTimestamp = Date.now();

    const handleScroll = () => {
      const currentScrollTop = window.scrollY;
      const currentTimestamp = Date.now();
      const timeDiff = currentTimestamp - lastTimestamp;
      const scrollDiff = currentScrollTop - lastScrollTop;

      const currentSpeed = Math.abs(scrollDiff / timeDiff) * 1000;
      setSpeed(currentSpeed);

      lastScrollTop = currentScrollTop;
      lastTimestamp = currentTimestamp;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useLayoutEffect(() => {
    if (inView && containerRef.current) {
      animateScroll.scrollTo(containerRef.current.offsetTop, { duration: Math.max(100, 1000 - speed), smooth: true });
    }
  }, [inView]);

  return (
    <section ref={containerRef} className={clsx(["h-screen grid grid-cols-auto-1fr", props.className])}>
      <InView threshold={0.5} as="div" className={clsx(["h-full w-[1px]"])} onChange={setInView} />
      {props.children}
    </section>
  );
}
