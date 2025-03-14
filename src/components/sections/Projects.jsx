import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
    return(
        <section id="projects"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#1452a3] to-emerald-400 bg-clip-text text-transparent text-center">
                        Projects
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="p-6 rounded-xl border border-white/20 border hover:-translate-y-0.5 hover:border-emerald-600
                            hover:shadow-[0_0_5px_#14a376]/[50%] transition-all
                        ">
                                <h3 className="text-[#ece66a] text-left font-bold text-xl mb-2">Cloud Platform</h3>
                                <p className="text-justify mb-4">
                                    loren issum bla bla bla bla bla bla xyz it itu abc kenapa begini ya
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {["React", "Node.Js", "PostgreSql"].map((tech, key) => (
                                        <span 
                                            key={key}
                                            className="bg-[#8ab7ef] text-[#0f2242] py-1 px-3 rounded-full text-sm font-semibold
                                            hover:bg-emerald-300 hover:shadow-[0_2px_5px_#14a376]/[10%] transition">
                                                {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex justify-between items-center">
                                    <a href="#"
                                        className="font-medium text-emerald-400 hover:text-[#ece46a] transition-colors my-4"
                                    >
                                            View Project &#8883;
                                    </a>
                                </div>
                        </div>
                        <div className="p-6 rounded-xl border border-white/20 border hover:-translate-y-0.5 hover:border-emerald-600
                            hover:shadow-[0_0_5px_#14a376]/[50%] transition-all
                        ">
                                <h3 className="text-[#ece66a] text-left font-bold text-xl mb-2">Cloud Platform</h3>
                                <p className="text-justify mb-4">
                                    loren issum bla bla bla bla bla bla xyz it itu abc kenapa begini ya
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {["React", "Node.Js", "PostgreSql"].map((tech, key) => (
                                        <span 
                                            key={key}
                                            className="bg-[#8ab7ef] text-[#0f2242] py-1 px-3 rounded-full text-sm font-semibold
                                            hover:bg-emerald-300 hover:shadow-[0_2px_5px_#14a376]/[10%] transition">
                                                {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex justify-between items-center">
                                    <a href="#"
                                        className="font-medium text-emerald-400 hover:text-[#ece46a] transition-colors my-4"
                                    >
                                            View Project &#8883;
                                    </a>
                                </div>
                        </div>
                        <div className="p-6 rounded-xl border border-white/20 border hover:-translate-y-0.5 hover:border-emerald-600
                            hover:shadow-[0_0_5px_#14a376]/[50%] transition-all
                        ">
                                <h3 className="text-[#ece66a] text-left font-bold text-xl mb-2">Cloud Platform</h3>
                                <p className="text-justify mb-4">
                                    loren issum bla bla bla bla bla bla xyz it itu abc kenapa begini ya
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {["React", "Node.Js", "PostgreSql"].map((tech, key) => (
                                        <span 
                                            key={key}
                                            className="bg-[#8ab7ef] text-[#0f2242] py-1 px-3 rounded-full text-sm font-semibold
                                            hover:bg-emerald-300 hover:shadow-[0_2px_5px_#14a376]/[10%] transition">
                                                {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex justify-between items-center">
                                    <a href="#"
                                        className="font-medium text-emerald-400 hover:text-[#ece46a] transition-colors my-4"
                                    >
                                            View Project &#8883;
                                    </a>
                                </div>
                        </div>
                        <div className="p-6 rounded-xl border border-white/20 border hover:-translate-y-0.5 hover:border-emerald-600
                            hover:shadow-[0_0_5px_#14a376]/[50%] transition-all
                        ">
                                <h3 className="text-[#ece66a] text-left font-bold text-xl mb-2">Cloud Platform</h3>
                                <p className="text-justify mb-4">
                                    loren issum bla bla bla bla bla bla xyz it itu abc kenapa begini ya
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {["React", "Node.Js", "PostgreSql"].map((tech, key) => (
                                        <span 
                                            key={key}
                                            className="bg-[#8ab7ef] text-[#0f2242] py-1 px-3 rounded-full text-sm font-semibold
                                            hover:bg-emerald-300 hover:shadow-[0_2px_5px_#14a376]/[10%] transition">
                                                {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex justify-between items-center">
                                    <a href="#"
                                        className="font-medium text-emerald-400 hover:text-[#ece46a] transition-colors my-4"
                                    >
                                            View Project &#8883;
                                    </a>
                                </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}