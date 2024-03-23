import { FramedPhoto } from "@/components/FramedPhoto";

export default function PhotosPage() {
  return (
    <section className="flex flex-col gap-6 md:grid md:grid-cols-2 lg:grid-cols-3 lg:max-w-5xl lg:mx-auto py-16 px-4 lg:px-0 overflow-hidden">
      <div className="flex flex-col gap-6">
        <FramedPhoto
          src="/photos/my-photos-page/20240321-IMG_5709.webp"
          alt="Sendero sinuodal por un serro en Jujuy"
        />
        <FramedPhoto
          src="/photos/my-photos-page/20240321-IMG_5710.webp"
          alt="Sendero sinuodal por un serro en Jujuy"
        />

        <FramedPhoto
          src="/photos/my-photos-page/20240321-IMG_5714.webp"
          alt="Sendero sinuodal por un serro en Jujuy"
        />
      </div>
      <div className="flex flex-col gap-6">
        <FramedPhoto
          src="/photos/my-photos-page/20240321-IMG_5748-2.webp"
          alt="Sendero sinuodal por un serro en Jujuy"
        />
        <FramedPhoto
          horizontal
          src="/photos/my-photos-page/20240321-IMG_5759.webp"
          alt="Sendero sinuodal por un serro en Jujuy"
        />
        <FramedPhoto
          src="/photos/my-photos-page/20240321-IMG_5756.webp"
          alt="Sendero sinuodal por un serro en Jujuy"
        />
      </div>
      <div className="flex flex-col gap-6">
        <FramedPhoto
          horizontal
          src="/photos/my-photos-page/20190107-IMG_2696.webp"
          alt="Sendero sinuodal por un serro en Jujuy"
        />
        <FramedPhoto
          src="/photos/my-photos-page/20190107-IMG_2719-2.webp"
          alt="Sendero sinuodal por un serro en Jujuy"
        />

        <FramedPhoto
          src="/photos/my-photos-page/20240321-IMG_5797.webp"
          alt="Sendero sinuodal por un serro en Jujuy"
        />

        <FramedPhoto
          src="/photos/my-photos-page/20240321-IMG_5717.webp"
          alt="Sendero sinuodal por un serro en Jujuy"
        />
      </div>
    </section>
  );
}
