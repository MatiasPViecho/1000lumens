import { MouseIconContainer } from "@/components/MouseIconContainer";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Sobre mí | 1000Lumens",
};
export default function About() {
  return (
    <section>
      <MouseIconContainer classes="px-4 flex flex-col gap-12 pt-16 mb-16 sm:mb-32 sm:pt-24 max-w-md sm:max-w-lg md:max-w-3xl lg:max-w-6xl mx-auto md:text-left md:px-8 relative h-max">
        <div className="flex flex-col gap-8 sm:flex-row md:gap-0">
          <img
            className="mx-auto max-w-40 max-h-40 rounded-full md:clear-left md:order-2"
            alt="Creador de este sitio web, Matías"
            src="/photos/IMG_5240_FACE.webp"
          />
          <p className="text-md md:order-1 md:text-lg md:max-w-prose md:my-auto ">
            Mi nombre es Matías, tengo 22 años y la curiosidad siempre ha sido
            mi compañera de viaje. Desde que era niño, me he sentido atraído por
            entender cómo funcionan las cosas que me fascinan, ya sean juegos,
            sitios web o programas. Cómo estaban programados, cómo estaban
            creados.
          </p>
        </div>
        <p className="text-md md:text-lg md:max-w-prose md:text-balance">
          Pero mi vida no se limita solo a la tecnología; desde pequeño, también
          he tenido una pasión por la fotografía. A los 8 años, sostuve mi
          primera cámara y desde entonces, he estado capturando momentos
          especiales. Ahora, te invito a disfrutar de la selección de fotos que
          he preparado especialmente para ti.
        </p>
      </MouseIconContainer>
    </section>
  );
}
