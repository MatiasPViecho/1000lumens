import Link from "next/link";

export const FavoriteSection = () => {
  return (
    <>
      <div className="py-4 lg:pt-6"></div>
      <ul className="flex w-full gap-8 overflow-x-scroll px-4 sm:px-8 md:px-40 lg:px-80 py-2 pb-4 snap-x no-scrollbar">
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
