import Image from "next/image";

interface FramedPhotoProps {
  alt: string;
  src: string;
  width: number;
  height: number;
  horizontal?: boolean;
}
export const FramedPhoto = ({
  alt,
  src,
  width,
  height,
  horizontal = false,
}: FramedPhotoProps) => {
  return (
    <div
      className={`bg-slate-200 shadow-sm ${
        horizontal ? "aspect-video" : "aspect-[9/16]"
      }`}
    >
      <Image
        width={width}
        height={height}
        className="object-cover w-auto h-full p-2"
        src={src}
        alt={alt}
      />
    </div>
  );
};
