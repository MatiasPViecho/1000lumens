import { FramedPhoto } from "@/components/FramedPhoto";
import { MouseIconContainer } from "@/components/MouseIconContainer";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Fotos | 1000Lumens ",
};
export default function PhotosPage() {
  return (
    <section>
      <MouseIconContainer classes="flex flex-col gap-6 md:grid md:grid-cols-2 lg:grid-cols-3 lg:max-w-5xl lg:mx-auto py-16 px-4 lg:px-0 overflow-hidden">
        <div className="flex flex-col gap-6">
          <FramedPhoto
            src="/photos/my-photos-page/20240321-IMG_5709.webp"
            alt="Capilla de una iglesia ante un cielo nublado"
          />
          <FramedPhoto
            src="/photos/my-photos-page/20240321-IMG_5780.webp"
            alt="Camino angosto con un charco de agua reflejando en el medio del mismo"
          />

          <FramedPhoto
            src="/photos/my-photos-page/20240321-IMG_5714.webp"
            alt="Estatua de una mujer con una estrella en la cabeza"
          />
        </div>
        <div className="flex flex-col gap-6">
          <FramedPhoto
            src="/photos/my-photos-page/20240321-IMG_5748-2.webp"
            alt="Camino de gravilla con un cielo claro de fondo"
          />
          <FramedPhoto
            horizontal
            src="/photos/my-photos-page/20240321-IMG_5759.webp"
            alt="Barro"
          />
          <FramedPhoto
            src="/photos/my-photos-page/20240321-IMG_5756.webp"
            alt="Jeans y borcegos marrones en un piso de gravilla"
          />
        </div>
        <div className="flex flex-col gap-6">
          <FramedPhoto
            horizontal
            src="/photos/my-photos-page/20190107-IMG_2696.webp"
            alt="Nubes vistas desde arriba del cielo"
          />
          <FramedPhoto
            src="/photos/my-photos-page/20190107-IMG_2719-2.webp"
            alt="Campos de cultivo iluminados por un rayo del sol vistos desde el cielo"
          />

          <FramedPhoto
            src="/photos/my-photos-page/20240321-IMG_5797.webp"
            alt="Calle 'Libertad' señalando a la izquierda, a la derecha una construcción de departamentos con obreros en cada piso"
          />

          <FramedPhoto
            src="/photos/my-photos-page/20240321-IMG_5717.webp"
            alt="Calle con un pedestal de frente y una rotonda con una fuente al fondo"
          />
        </div>
      </MouseIconContainer>
    </section>
  );
}
