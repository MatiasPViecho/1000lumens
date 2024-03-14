export const Header = () => {
    return(
        <header className="fixed top-0 z-50 w-full ">
            <ul className="flex gap-4 justify-center pt-2 pb-3 shadow-lg backdrop-saturate-200 backdrop-brightness-[0.3] backdrop-grayscale backdrop-invert backdrop-blur-sm max-w-80 rounded-bl-3xl overflow-hidden text-white ml-auto">
                <li className="text-md tracking-widest text-black font-extralight uppercase">Inicio</li>
                <li className="text-md tracking-widest text-black font-extralight uppercase">Mis Fotos</li>
                <li className="text-md tracking-widest text-black font-extralight uppercase">Sobre Mí</li>
            </ul>
        </header>
        
    )
}