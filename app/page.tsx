
export default function Home() {
  return (
    <main>
      <div className="relative">
          <img className="brightness-[.25]" src="/photos/IMG_2450.webp" />
          <h1 className="absolute left-2 top-16 tracking-[0.75rem]  z-10 font-bold text-7xl text-white  text-orientation-left">HOLA!</h1>
      </div>
      <div className="flex flex-col gap-8 py-8 px-4 text-black text-wrap font-bold">
       <h2 className="text-5xl ">SOY MATÍAS </h2>
       <h3 className="text-4xl "><a rel="nofollow noopener noreferrer" href="https://github.com/MatiasPViecho" target="_blank" className="underline decoration-blue-600 text-blue-600 decoration-2 underline-offset-2 visited:decoration-violet-800 visited:text-violet-800">DEVELOPER</a> Y FOTÓGRAFO</h3>
      </div>
      <div className="relative">
          <img className="brightness-[.25]" src="/photos/IMG_sendero.webp" />
          <div className="absolute left-4 top-16 z-10 font-bold text-3xl text-white tracking-wide pr-8 pl-2 text-balance flex flex-col gap-32">
          <h4>Comencé mi carrera en el mundo del desarrollo web hace +5 años</h4>
          <h5>Aunque antes de eso ya sacaba fotos :)</h5>
          </div>
      </div>
      <div className="py-4">
        <h6 className="text-balance px-4 text-black font-bold text-3xl ">Te dejo mis favoritas!</h6>
      </div>
      <ul className="flex w-full gap-2 overflow-x-scroll px-4 py-2">
        <li className="w-full h-auto flex-none"><img  src="/photos/IMG_3705.webp" /></li>
        <li className="w-full h-auto flex-none"><img  src="/photos/IMG_trabajo.webp" /></li>
        <li className="w-full h-auto flex-none"><img  src="/photos/IMG_tanque.webp" /></li>
        <li className="w-full h-auto flex-none"><img  src="/photos/IMG_4173.webp" /></li>
      </ul>
    </main>
  );
}
