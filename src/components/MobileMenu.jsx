export const MobileMenu = ( {menuOpen, setMenuOpen} ) => {
    return (
        <div className={`fixed top-0 left-0 right-0 w-full bg-[#163564] z-40 flex flex-col items-center justify-center
                        transition-all duration-300 ease-in-out

                        ${menuOpen 
                            ? "h-screen opacity-100 pointer-events-auto" 
                            : "h-0 opacity-0 pointer-events-none"
                        }
        `}>

            <button onClick={() => setMenuOpen(false)} 
                className="absolute top-3 right-6 text-[#c1d8f6] hover:text-emerald-400 text-3xl focus:outline-none cursor-pointer"
                aria-label="Close Menu"
            >
                &times;
            </button>

            <a 
                href="#" 
                onClick={()=> setMenuOpen(false)}
                className={`text-2xl font-semibold text-[#c1d8f6] my-4 transform transition-transform duration-300
                    ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
                    hover:text-emerald-400 hover:-translate-y-2
                    focus:text-emerald-400 focus:-translate-y-2
                    active:text-emerald-400 active:-translate-y-2
                `}>
                    Home
            </a>
            <a 
                href="#about" 
                onClick={()=> setMenuOpen(false)}
                className={`text-2xl font-semibold text-[#c1d8f6] my-4 transform transition-transform duration-300
                    ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
                    hover:text-emerald-400 hover:-translate-y-2
                    focus:text-emerald-400 focus:-translate-y-2
                    active:text-emerald-400 active:-translate-y-2
                `}>
                    About
            </a>
            <a 
                href="#projects" 
                onClick={()=> setMenuOpen(false)}
                className={`text-2xl font-semibold text-[#c1d8f6] my-4 transform transition-transform duration-300
                    ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
                    hover:text-emerald-400 hover:-translate-y-2
                    focus:text-emerald-400 focus:-translate-y-2
                    active:text-emerald-400 active:-translate-y-2
                `}>
                    Projects
            </a>
            <a 
                href="#contact" 
                onClick={()=> setMenuOpen(false)}
                className={`text-2xl font-semibold text-[#c1d8f6] my-4 transform transition-transform duration-300
                    ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
                    hover:text-emerald-400 hover:-translate-y-2
                    focus:text-emerald-400 focus:-translate-y-2
                    active:text-emerald-400 active:-translate-y-2
                `}>
                    Contact
            </a>
        </div>
    );
}