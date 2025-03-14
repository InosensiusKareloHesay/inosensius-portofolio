import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {

    const frontendSkills = ["React", "Vue", "Javascript", "Typescript", "TailwindCSS"]
    const backendSkills = ["PHP", "Node", "Python", "MySql", "PostgreSql"]

    return (
        <section id="about" className="min-h-screen flex item-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#1452a3] to-emerald-400 bg-clip-text text-transparent text-center">
                        About Me
                    </h2>

                    <div className="rounded-3xl p-8 border-white/20 border hover:-translate-y-0.5 
                        hover:shadow-[0_0_5px_#14a376]/[50%] hover:border-emerald-600 transition-all">
                            <p className="font-semibold text-#c1d8f6 mb-6">
                                Love learning something new and never stop trying
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                    <h3 className="text-[#ece66a] text-left text-xl font-bold mb-4">Frontend</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {frontendSkills.map((tech, key) => (
                                            <span 
                                                key={key}
                                                className="bg-[#8ab7ef] text-[#0f2242] py-1 px-3 rounded-full text-sm font-semibold
                                                hover:bg-emerald-300 hover:shadow-[0_2px_5px_#14a376]/[10%] transition">
                                                    {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                    <h3 className="text-[#ece66a] text-left text-xl font-bold mb-4">Backend</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {backendSkills.map((tech, key) => (
                                            <span 
                                                key={key}
                                                className="bg-[#8ab7ef] text-[#0f2242] py-1 px-3 rounded-full text-sm font-semibold
                                                hover:bg-emerald-300 hover:shadow-[0_2px_5px_#14a376]/[10%] transition">
                                                    {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap 5 mt-8">
                        <div className="m-1 p-4 rounded-xl border-white/20 border hover:-translate-y-0.5 
                            hover:shadow-[0_0_3px_#14a376]/[50%] hover:border-emerald-600 transition-all">
                                <h3 className="text-xl font-bold mb-4">
                                    Education
                                </h3>
                                <ul className="text-left list-disc list-inside text-[#c1d8f6] space-y-2">
                                    <li>
                                        <strong className="text-[#ece66a]">Teknik Informatika</strong> - Universitas Brawijaya [2017-2021] - GPA 3.71
                                    </li>
                                    <li>
                                        <strong className="text-[#ece66a]">SMAN 3</strong> - Kota Kediri [2014-2017]
                                    </li>
                                </ul>
                        </div>
                        <div className="m-1 p-4 rounded-xl border-white/20 border hover:-translate-y-0.5
                            hover:shadow-[0_0_3px_#14a376]/[50%] hover:border-emerald-600 transition-all">
                                <h3 className="text-xl font-bold mb-4">
                                    Work Experience
                                </h3>
                                <div className="text-left space-y-4 text-[#c1d8f6]">
                                    <div>
                                        <h4 className="text-[#ece66a] text-justify font-semibold">Fullstack Web Dev at PT. Elnusa, Tbk [2021-2024]</h4>
                                        <p className="text-justify">
                                            Developed and maintained several applications
                                        </p>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
}