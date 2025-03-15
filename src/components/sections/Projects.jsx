import { RevealOnScroll } from "../RevealOnScroll";
import imgScm from "../../assets/project/scm.png";
import imgBlanket from "../../assets/project/blanket1.png";
import imgMiv from "../../assets/project/miv.png";
import imgAsn from "../../assets/project/asn1.png";

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
                                <h3 className="text-[#ece66a] text-left font-bold text-xl mb-2">Supply Chain Management</h3>
                                <img 
                                    src={imgScm}
                                    alt="SCM Image" 
                                    className="w-full h-[200px] rounded-lg mb-4 mt-8" 
                                />
                                <p className="text-justify mb-4 line-clamp-4">
                                    Aplikasi ini hasil dari migrasi 4 aplikasi lama yang di kombinasikan menjadi 1 aplikasi.
                                    Berisikan setiap proses aliran barang ataupun jasa mulai dari permintaan hingga pengiriman.
                                    Tujuan utamanya adalah untuk melayani setiap proses di perusahaan secara cepat dan efisien.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {["Vue.Js", "Node.Js", "JavaScript", "PostgreSql", "Redis"].map((tech, key) => (
                                        <span 
                                            key={key}
                                            className="bg-[#8ab7ef] text-[#0f2242] py-1 px-3 rounded-full text-sm font-semibold
                                            hover:bg-emerald-300 hover:shadow-[0_2px_5px_#14a376]/[10%] transition">
                                                {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* <div className="flex justify-between items-center">
                                    <a href="#"
                                        className="font-medium text-emerald-400 hover:text-[#ece46a] transition-colors my-4"
                                    >
                                            View Project Detail &#8883;
                                    </a>
                                </div> */}
                        </div>
                        <div className="p-6 rounded-xl border border-white/20 border hover:-translate-y-0.5 hover:border-emerald-600
                            hover:shadow-[0_0_5px_#14a376]/[50%] transition-all
                        ">
                                <h3 className="text-[#ece66a] text-left font-bold text-xl mb-2">Fitur Blanket Order</h3>
                                <img 
                                    src={imgBlanket}
                                    alt="Fitur Blanket Order Image" 
                                    className="w-full h-[200px] rounded-lg mb-4 mt-8" 
                                />
                                <p className="text-justify mb-4 line-clamp-4">
                                    Fitur Blanket Order merupakan pengembangan dari "Request for Replenishment" (RFR).
                                    Digunakan untuk melakukan permintaan barang oleh perusahaan kepada vendor terkait yang telah disepakati sebelumnya melalui kontrak.
                                    Kontrak tersebut mencakup nama vendor terpilih, nama barang, harga, dan jumlah barang. Sehingga proses permintaan akan berjalan lebih cepat.                                    
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {["Vue.Js", "Node.Js", "JavaScript", "jQuery", "PHP", "PostgreSql", "Redis"].map((tech, key) => (
                                        <span 
                                            key={key}
                                            className="bg-[#8ab7ef] text-[#0f2242] py-1 px-3 rounded-full text-sm font-semibold
                                            hover:bg-emerald-300 hover:shadow-[0_2px_5px_#14a376]/[10%] transition">
                                                {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* <div className="flex justify-between items-center">
                                    <a href="#"
                                        className="font-medium text-emerald-400 hover:text-[#ece46a] transition-colors my-4"
                                    >
                                            View Project Detail &#8883;
                                    </a>
                                </div> */}
                        </div>
                        <div className="p-6 rounded-xl border border-white/20 border hover:-translate-y-0.5 hover:border-emerald-600
                            hover:shadow-[0_0_5px_#14a376]/[50%] transition-all
                        ">
                                <h3 className="text-[#ece66a] text-left font-bold text-xl mb-2">Fitur Material Issued Voucher (MIV)</h3>
                                <img 
                                    src={imgMiv}
                                    alt="Fitur MIV Image" 
                                    className="w-full h-[200px] rounded-lg mb-4 mt-8" 
                                />
                                <p className="text-justify mb-4 line-clamp-4">
                                    Fitur Material Issued Voucher (MIV) digunakan sebagai permintaan untuk mengeluarkan barang dari gudang.
                                    Tujuannya adalah untuk memastikan bahwa barang yang dikeluarkan dari gudang tercatat dengan benar.
                                    Ini membantu dalam pelacakan penggunaan barang, mengontrol persediaan, dan mendokumentasikan penggunaan barang.                             
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {["JavaScript", "PHP", "MySql", "Redis", "TypeScript", "jQuery", "CSS"].map((tech, key) => (
                                        <span 
                                            key={key}
                                            className="bg-[#8ab7ef] text-[#0f2242] py-1 px-3 rounded-full text-sm font-semibold
                                            hover:bg-emerald-300 hover:shadow-[0_2px_5px_#14a376]/[10%] transition">
                                                {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* <div className="flex justify-between items-center">
                                    <a href="#"
                                        className="font-medium text-emerald-400 hover:text-[#ece46a] transition-colors my-4"
                                    >
                                            View Project Detail &#8883;
                                    </a>
                                </div> */}
                        </div>
                        <div className="p-6 rounded-xl border border-white/20 border hover:-translate-y-0.5 hover:border-emerald-600
                            hover:shadow-[0_0_5px_#14a376]/[50%] transition-all
                        ">
                                <h3 className="text-[#ece66a] text-left font-bold text-xl mb-2">Fitur Advance Shipping Notice (ASN)</h3>
                                <img 
                                    src={imgAsn}
                                    alt="Fitur ASN Image" 
                                    className="w-full h-[200px] rounded-lg mb-4 mt-8" 
                                />
                                <p className="text-justify mb-4 line-clamp-4">
                                    Fitur Advance Shipping Notice (ASN) memiliki tujuan untuk memberikan pemberitahuan awal kepada penerima (perusahaan) bahwa barang akan segera dikirim oleh pengirim (vendor).
                                    ASN memberi informasi tentang pengiriman yang akan datang, termasuk rincian barang yang akan dikirim, jumlah, tanggal pengiriman, dan informasi penting lainnya.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {["JavaScript", "PHP", "MySql", "Redis", "TypeScript", "jQuery", "CSS"].map((tech, key) => (
                                        <span 
                                            key={key}
                                            className="bg-[#8ab7ef] text-[#0f2242] py-1 px-3 rounded-full text-sm font-semibold
                                            hover:bg-emerald-300 hover:shadow-[0_2px_5px_#14a376]/[10%] transition">
                                                {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* <div className="flex justify-between items-center">
                                    <a href="#"
                                        className="font-medium text-emerald-400 hover:text-[#ece46a] transition-colors my-4"
                                    >
                                            View Project Detail &#8883;
                                    </a>
                                </div> */}
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}