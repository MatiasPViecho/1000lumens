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
    mm.add("(min-width: 1440px)", () => {
      gsap.to(ref.current, {
        scrollTrigger: {
          toggleActions: "play restart pause pause",
          start: "top top",
          end: () => innerWidth,
          trigger: ref.current,
          scrub: 1.5,
          pin: ".gsap-main-container",
        },
        xPercent: -300,
        y: -240,
        opacity: 1,
        duration: 1,
      });
    });
    mm.add("(min-width: 1024px) and (max-width: 1439px)", () => {
      gsap.to(ref.current, {
        scrollTrigger: {
          toggleActions: "play restart pause pause",
          start: "top top",
          end: () => innerWidth * 2,
          trigger: ref.current,
          scrub: 3,
          pin: ".gsap-main-container",
        },
        xPercent: -350,
        y: -240,
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
          trigger: ref.current,
          scrub: 1.5,
          pin: true,
        },
        xPercent: -200,
        opacity: 1,
        duration: 1,
      });
    });
  });
  return (
    <>
      <ul
        ref={ref}
        className="gsap-container z-40 lg:translate-x-[200%] flex md:flex-nowrap  gap-8 px-8 sm:px-8 md:px-40 lg:px-80 py-2 pb-4 no-scrollbar"
      >
        <li className="lg:translate-y-96 flex-none pointer-events-none max-h-[515px] snap-center">
          <img
            className="aspect-[7/10]  h-full max-h-[515px] w-auto snap-center md:snap-none"
            src="/photos/IMG_camino.webp"
            alt="Carretera apuntando en forma de triángulo a una montaña con un charco de agua embarrado a los pies"
          />
        </li>
        <li className="aspect-[7/10]  lg:translate-y-96 flex-none pointer-events-none max-h-[515px] snap-center">
          <img
            className="aspect-[7/10]  h-full max-h-[515px] "
            src="/photos/IMG_trabajo.webp"
            alt="Obrero realizando un trabajo de cerámica en barro, colores cálidos"
          />
        </li>
        <li className="aspect-[7/10]  lg:translate-y-96 flex-none pointer-events-none max-h-[515px] snap-center">
          <img
            className="aspect-[7/10]  h-full max-h-[515px] "
            src="/photos/IMG_tanque.webp"
            alt="Montaje de una estructura prendida fuego"
          />
        </li>
        <li className="lg:translate-y-96 flex-none pointer-events-none max-h-[515px] snap-center">
          <img
            className="aspect-[7/10]  h-full max-h-[515px] w-auto"
            src="/photos/IMG_5514.webp"
            alt="Patinadora realizando un truco"
          />
        </li>
        <li className="lg:translate-y-96 flex-none max-h-[515px] max-w-[350px] snap-center pointer-events-auto cursor-pointer">
          <div className="bg-black h-full w-full">
            <Link href="/photos">
              <p className="text-2xl text-white font-bold p-14 py-48 text-wrap">
                Te invito a ver las demás fotos ---&gt;{" "}
              </p>
            </Link>
          </div>
        </li>
      </ul>
    </>
  );
};
