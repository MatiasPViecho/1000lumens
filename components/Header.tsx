import { HeaderLink } from "./Link";

export const Header = () => {
  return (
    <header className="fixed top-0 z-50 w-full ">
      <ul className="flex gap-4 justify-center pt-2 pb-3 shadow-lg backdrop-saturate-200 backdrop-brightness-[0.3] backdrop-grayscale backdrop-invert backdrop-blur-sm max-w-80 rounded-bl-3xl overflow-hidden text-white ml-auto lg:mx-auto lg:rounded-br-3xl">
        <li>
          <HeaderLink text="Inicio" href="/" />
        </li>
        <li>
          <HeaderLink text="Mis Fotos" href="/photos" />
        </li>
        <li>
          <HeaderLink text="Sobre Mí" href="/about" />
        </li>
      </ul>
    </header>
  );
};
