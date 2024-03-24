import { MouseIconContainer } from "@/components/MouseIconContainer";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Sobre mí | 1000Lumens",
};
export default function About() {
  return (
    <section>
      <MouseIconContainer classes="px-4 flex flex-col gap-12 pt-16 sm:pt-24 max-w-md sm:max-w-lg md:max-w-3xl lg:max-w-6xl mx-auto md:text-left md:px-8 relative h-screen">
        <div className="flex flex-col gap-8 sm:flex-row md:gap-0">
          <img
            className="mx-auto max-w-40 max-h-40 rounded-full md:clear-left md:order-2"
            alt="Creador de este sitio web, Matías"
            src="/photos/IMG_5240_FACE.webp"
          />
          <p className="text-md md:order-1 md:text-lg md:max-w-prose md:my-auto ">
            Soy Matías, tengo 22 años y desde que soy chico investigo y me
            encanta saber cómo funcionaban las cosas que me interesaban (juegos,
            webs, programas) internamente, cómo estaban programados, cómo
            estaban creados.
          </p>
        </div>
        <p className="text-md md:text-lg md:max-w-prose md:text-balance">
          Especialmente cree esta web ya que, además de eso, desde chico me
          dediqué a la fotografía, usé mi primera cámara a los 8 años y es un
          recuerdo que nunca olvidaré, espero que disfrutes de la selección de
          fotos que te dejo
        </p>
        <div className="absolute py-4 px-8 text-md left-0 right-0 bottom-24 bg-stone-500 mx-auto text-center text-white max-w-80 rounded-3xl shadow-xl hover:bg-stone-400 transition-all cursor-default">
          <span>WIP - Portfolio de dev!</span>
        </div>
      </MouseIconContainer>
    </section>
  );
}
