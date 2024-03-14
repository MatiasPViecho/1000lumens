export const FavoriteSection = () => {
  return (
    <>
      <div className="py-4">
        <h6 className="text-balance px-4 text-black font-bold text-3xl ">
          Te dejo mis favoritas!
        </h6>
      </div>
      <ul className="flex w-full gap-8 overflow-x-scroll px-4 py-2 pb-4 snap-x">
        <li className="flex-none max-h-[515px] snap-center">
          <img
            className="h-full max-h-[515px] w-auto snap-center"
            src="/photos/IMG_3705.webp"
          />
        </li>
        <li className="flex-none max-h-[515px] snap-center">
          <img
            className="h-full max-h-[515px] "
            src="/photos/IMG_trabajo.webp"
          />
        </li>
        <li className="flex-none max-h-[515px] snap-center">
          <img
            className="h-full max-h-[515px] "
            src="/photos/IMG_tanque.webp"
          />
        </li>
        <li className="flex-none max-h-[515px] snap-center">
          <img
            className="h-full max-h-[515px] w-auto"
            src="/photos/IMG_4173.webp"
          />
        </li>
        <li className="flex-none max-h-[515px] max-w-[300px] snap-center">
          <div className="bg-black h-full w-full">
            <p className="text-2xl text-white font-bold p-14 py-48 text-wrap">
              Te invito a ver las demás fotos ---&gt;{" "}
            </p>
          </div>
        </li>
      </ul>
    </>
  );
};
