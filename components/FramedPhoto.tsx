interface FramedPhotoProps {
  alt: string;
  src: string;
  horizontal?: boolean;
}
export const FramedPhoto = ({
  alt,
  src,
  horizontal = false,
}: FramedPhotoProps) => {
  return (
    <div
      className={`bg-slate-200 shadow-sm ${
        horizontal ? "aspect-video" : "aspect-[9/16]"
      }`}
    >
      <img className="object-cover w-auto h-full p-2" src={src} alt={alt} />
    </div>
  );
};
