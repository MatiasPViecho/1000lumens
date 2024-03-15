"use client";
import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export const FavoriteSection = () => {
  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    if (typeof ref.current === "undefined") return;
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {
      gsap.to(ref.current, {
        scrollTrigger: {
          toggleActions: "play restart pause pause",
          start: "center center",
          end: () => innerWidth,
          trigger: ref.current,
          scrub: 1.5,
          pin: true,
        },
        xPercent: -150,
        opacity: 1,
        duration: 1,
      });
    });
    mm.add("(min-width: 768px) and (max-width: 1023px)", () => {
      gsap.to(ref.current, {
        scrollTrigger: {
          toggleActions: "play restart pause pause",
          start: "bottom 75%",
          end: () => innerWidth * 4,
          markers: true,
          trigger: ref.current,
          scrub: 1.5,
          pin: true,
        },
        xPercent: -200,
        opacity: 1,
        duration: 1,
      });
    });
    mm.add("(max-width: 767px)", () => {
      gsap.to(ref.current, {
        scrollTrigger: {
          toggleActions: "play restart pause pause",
          start: "bottom 75%",
          end: () => innerWidth * 5,
          markers: true,
          trigger: ref.current,
          scrub: 1.5,
          pin: true,
        },
        xPercent: () => -400,
        opacity: 1,
        duration: 1,
      });
    });
  });
  return (
    <>
      <ul
        ref={ref}
        className="gsap-container z-40 translate-x-[96] flex flex-nowrap w-[full] gap-8 px-4 sm:px-8 md:px-40 lg:px-80 py-2 pb-4 no-scrollbar"
      >
        <li
          className="flex-none pointer-events-none max-h-[515px] snap-center"
          tabIndex={9}
        >
          <img
            className="h-full max-h-[515px] w-auto snap-center md:snap-none"
            src="/photos/IMG_camino.webp"
          />
        </li>
        <li
          className="flex-none pointer-events-none max-h-[515px] snap-center"
          tabIndex={10}
        >
          <img
            className="h-full max-h-[515px] "
            src="/photos/IMG_trabajo.webp"
          />
        </li>
        <li
          className="flex-none pointer-events-none max-h-[515px] snap-center"
          tabIndex={11}
        >
          <img
            className="h-full max-h-[515px] "
            src="/photos/IMG_tanque.webp"
          />
        </li>
        <li
          className="flex-none pointer-events-none max-h-[515px] snap-center"
          tabIndex={12}
        >
          <img
            className="h-full max-h-[515px] w-auto"
            src="/photos/IMG_5514.webp"
          />
        </li>
        <li
          className="flex-none max-h-[515px] max-w-[350px] snap-center"
          tabIndex={13}
        >
          <div className="bg-black h-full w-full">
            <Link href="/photos">
              <p
                className="text-2xl text-white font-bold p-14 py-48 text-wrap"
                tabIndex={14}
              >
                Te invito a ver las demás fotos ---&gt;{" "}
              </p>
            </Link>
          </div>
        </li>
      </ul>
    </>
  );
};
