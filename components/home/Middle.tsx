export const Middle = () => {
  return (
    <div className="relative h-[400px] sm:h-[450px] md:h-[500px] overflow-hidden pointer-events-none">
      <div
        tabIndex={7}
        className=" w-full lg:mx-0 absolute left-4 top-6 sm:top-12 md:top-24 z-30 font-bold text-2xl sm:text-3xl text-white tracking-wide pr-8 pl-2 text-balance flex flex-col gap-32 lg:text-right"
      >
        <h4 className="max-w-3xl lg:max-w-none mx-auto w-full">
          Comencé mi carrera en el mundo del desarrollo web hace +5 años
        </h4>
        <h5 className="max-w-3xl lg:max-w-none mx-auto w-full">
          Aunque antes de eso ya sacaba fotos :)
        </h5>
      </div>
      <div className="block relative h-[400px] sm:h-[450px] md:h-[500px] clip-scroll">
        <img
          className="brightness-[.25] object-cover fixed top-0 left-0 w-full h-full lg:w-2/3 lg:right-0 lg:left-auto lg:bottom-0"
          src="/photos/IMG_sendero.webp"
        />
      </div>
    </div>
  );
};
