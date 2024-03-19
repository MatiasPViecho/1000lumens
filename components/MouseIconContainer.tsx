"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
export const MouseIconContainer = ({
  children,
  classes,
}: Readonly<{ children: React.ReactNode; classes: string }>) => {
  const xTo: any = useRef(null);
  const yTo: any = useRef(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { context, contextSafe } = useGSAP(
    () => {
      (xTo.current = gsap.quickTo(`.mouseFlair`, "x", {
        duration: 0.8,
        ease: "power3",
      })),
        (yTo.current = gsap.quickTo(`.mouseFlair`, "y", {
          duration: 0.8,
          ease: "power3",
        }));
    },
    { scope: containerRef }
  );

  const handleMouseEvent = (e: React.MouseEvent) => {
    if (!e || !e.clientX || !e.clientY || !xTo.current || !yTo.current) return;
    xTo.current(e.clientX);
    yTo.current(e.clientY);
  };
  return (
    <div
      ref={containerRef}
      onMouseMove={(e: React.MouseEvent) => handleMouseEvent(e)}
      className={`${classes}`}
    >
      <div
        className={`mouseFlair fixed shadow-2xl w-72 h-72 rounded-full z-50 pointer-events-none  -translate-x-1/2 -translate-y-1/2 -top-24 -left-56 backdrop-brightness-[2.75]`}
      ></div>
      {children}
    </div>
  );
};
