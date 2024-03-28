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
            height={1920}
            width={1080}
            src="/photos/my-photos-page/20240325-IMG_5828.webp"
            alt="Carpincho saliendo del agua"
          />
          <FramedPhoto
            height={2048}
            width={1365}
            src="/photos/my-photos-page/20240321-IMG_5709.webp"
            alt="Capilla de una iglesia ante un cielo nublado"
          />
          <FramedPhoto
            height={2048}
            width={1638}
            src="/photos/my-photos-page/20240321-IMG_5780.webp"
            alt="Camino angosto con un charco de agua reflejando en el medio del mismo"
          />

          <FramedPhoto
            height={2048}
            width={1365}
            src="/photos/my-photos-page/20240321-IMG_5714.webp"
            alt="Estatua de una mujer con una estrella en la cabeza"
          />
        </div>
        <div className="flex flex-col gap-6">
          <FramedPhoto
            height={2048}
            width={1365}
            src="/photos/my-photos-page/20240321-IMG_5748-2.webp"
            alt="Camino de gravilla con un cielo claro de fondo"
          />
          <FramedPhoto
            height={2048}
            width={1365}
            horizontal
            src="/photos/my-photos-page/20240321-IMG_5759.webp"
            alt="Barro"
          />
          <FramedPhoto
            height={1536}
            width={1024}
            src="/photos/my-photos-page/20240321-IMG_5756.webp"
            alt="Jeans y borcegos marrones en un piso de gravilla"
          />
          <FramedPhoto
            height={1920}
            width={1080}
            src="/photos/my-photos-page/20240325-IMG_5908.webp"
            alt="Estatua a contraluz con estelas de avión de fondo en un cielo anaranjado"
          />
        </div>
        <div className="flex flex-col gap-6">
          <FramedPhoto
            height={2048}
            width={1365}
            horizontal
            src="/photos/my-photos-page/20190107-IMG_2696.webp"
            alt="Nubes vistas desde arriba del cielo"
          />
          <FramedPhoto
            height={2048}
            width={1365}
            src="/photos/my-photos-page/20190107-IMG_2719-2.webp"
            alt="Campos de cultivo iluminados por un rayo del sol vistos desde el cielo"
          />
          <FramedPhoto
            height={2048}
            width={1365}
            src="/photos/my-photos-page/20240321-IMG_5797.webp"
            alt="Calle 'Libertad' señalando a la izquierda, a la derecha una construcción de departamentos con obreros en cada piso"
          />
          <FramedPhoto
            height={1535}
            width={1023}
            src="/photos/my-photos-page/20240325-IMG_5836.webp"
            alt="Hoja de otoño sola en el agua"
          />
        </div>
      </MouseIconContainer>
    </section>
  );
}
