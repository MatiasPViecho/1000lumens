export const Middle = () => {
  return (
    <div className="relative h-[400px] sm:h-[450px] md:h-[500px] overflow-hidden">
      <div className="absolute left-4 top-6 sm:top-12 md:top-24 z-10 font-bold text-2xl sm:text-3xl max-w-[30ch] text-white tracking-wide pr-8 pl-2 text-balance flex flex-col gap-32 lg:text-right">
        <h4>Comencé mi carrera en el mundo del desarrollo web hace +5 años</h4>
        <h5>Aunque antes de eso ya sacaba fotos :)</h5>
      </div>
      <div className="block relative h-[400px] sm:h-[450px] md:h-[500px] clip-scroll">
        <img
          className="brightness-[.25] object-cover fixed top-0 left-0 w-full h-full"
          src="/photos/IMG_sendero.webp"
        />
      </div>
    </div>
  );
};