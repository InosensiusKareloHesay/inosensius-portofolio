import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative">
            <RevealOnScroll>
                <div className="text-center z-10 px-5">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-[#1452a3] bg-clip-text text-transparent loading-right">
                        Hi, I'm Ino
                    </h1>

                    <p className="text-[#c1d8f6] text-lg mb-8 max-w-2xl">
                        I'm a Fullstack Web Developer with over 4 years experience.
                        Have skills in Frontend, Backend, and managing Database.
                        Experienced in developing several applications to improve company business processes.
                    </p>

                    <div className="flex justify-center space-x-4">
                        <a href="#projects" className="bg-emerald-500 text-[#0f2242] py-2 px-5 rounded font-bold transition hover:text-[#e3ecfb] 
                            hover:-translate-y-0.5 hover:shadow-[0_0_10px_#14a376]/[80%] relative overflow-hidden">
                                View Projects
                        </a>
                        <a href="#contact" className="border border-[#1452a3] text-emerald-500 py-2 px-5 rounded font-bold transition-all duration-200
                            hover:text-[#c1d8f6] hover:-translate-y-0.5 hover:shadow-[0_0_10px_#14a376]/[30%] hover:bg-[#2475d3]/10">
                                Contact Me
                        </a>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
}