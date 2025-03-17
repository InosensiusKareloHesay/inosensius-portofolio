import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from 'emailjs-com';
import logoInstagram from "../../assets/instagram.png";
import logoGithub from "../../assets/github.png";
import logoLinkedin from "../../assets/linkedin.png";

export const Contact = () => {
    const [formData, setFormData] = useState({
        name : "",
        email : "",
        message : ""    
    })
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)

        emailjs.sendForm(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            e.target,
            import.meta.env.VITE_PUBLIC_KEY
        )
        .then(() => {
            setLoading(false)
            alert("Message Sent!")
            setFormData({
                name : "",
                email : "",
                message : ""   
            })
        }).catch(( )=> {
            setLoading(false)
            alert("Oops! Something went wrong! Please try again!")
        })
    }
    
    return (
        <section id="contact"
            className="min-h-screen flex items-center justify-center relative py-20"
        >
            <RevealOnScroll>
                <div className="w-[80vw] max-w-4xl px-4">
                    <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#1452a3] to-emerald-400 bg-clip-text text-transparent text-center">
                        Get In Touch
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center mb-8">
                        <div className="mx-2 my-2">
                            <a href="https://www.instagram.com/inosensius.kh" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex flex-col items-center text-[#c1d8f6] 
                                    hover:text-[#ece46a]
                                    focus:text-[#ece46a]
                                    active:text-[#ece46a]
                            ">
                                <img
                                    src={logoInstagram}
                                    alt="Instagram"
                                    className="w-15 h-15 rounded-full"
                                />
                                <span className="font-medium mt-2">inosensius.kh</span>
                            </a>
                        </div>
                        <div className="flex flex-col mx-2 my-2 items-center">
                            <a href="https://github.com/InosensiusKareloHesay" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex flex-col items-center text-[#c1d8f6] 
                                    hover:text-[#ece46a]
                                    focus:text-[#ece46a]
                                    active:text-[#ece46a]
                            ">
                                <img
                                    src={logoGithub}
                                    alt="Github"
                                    className="w-15 h-15 rounded-full"
                                />
                                <span className="font-medium mt-2">InosensiusKareloHesay</span>
                            </a>
                        </div>
                        <div className="flex flex-col mx-2 my-2 items-center">
                            <a href="https://www.linkedin.com/in/inosensius-hesay/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex flex-col items-center text-[#c1d8f6] 
                                    hover:text-[#ece46a]
                                    focus:text-[#ece46a]
                                    active:text-[#ece46a]
                            ">
                                <img
                                    src={logoLinkedin}
                                    alt="LinkedIn"
                                    className="w-15 h-15 rounded-full"
                                />
                                <span className="font-medium mt-2">in/inosensius-hesay</span>
                            </a>
                        </div>
                    </div>
                    
                    <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#1452a3] to-emerald-400 bg-clip-text text-transparent text-center">
                        Send Email Direct
                    </h2>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="relative">
                            <input type="text" id="name" name="name" required 
                                className="w-full bg-white/5 border border-white/20 rounded px-4 py-3 text-[#c1d8f6] transition focus-outline-none focus:border-[#2475d3] focus:bg-emerald-800"
                                placeholder="Your Name.."
                                value={formData.name}
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                            />
                        </div>
                        
                        <div className="relative">
                            <input type="email" id="email" name="email" required 
                                className="w-full bg-white/5 border border-white/20 rounded px-4 py-3 text-[#c1d8f6] transition focus-outline-none focus:border-[#2475d3] focus:bg-emerald-800"
                                placeholder="your.email@gmail.com"
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                            />
                        </div>

                        <div className="relative">
                            <textarea id="message" name="message" required 
                                rows={5}
                                className="w-full bg-white/5 border border-white/20 rounded px-4 py-3 text-[#c1d8f6] transition focus-outline-none focus:border-[#2475d3] focus:bg-emerald-800"
                                placeholder="Your Message.."
                                value={formData.message}
                                onChange={(e) => setFormData({...formData, message: e.target.value})}
                            />
                        </div>

                        <button type="submit"
                            className="w-full bg-emerald-500 text-[#0f2242] py-3 px-6 rounded font-medium transition relative overflow-hidden 
                            hover:text-[#e3ecfb] hover:-translate-y-0.5 hover:shadow-[0_0_5px_#14a376]/[70%]
                            focus:text-[#e3ecfb] focus:-translate-y-0.5 focus:shadow-[0_0_5px_#14a376]/[70%]
                            active:text-[#e3ecfb] active:-translate-y-0.5 active:shadow-[0_0_5px_#14a376]/[70%]
                        ">
                            {loading ? "Sending..." : "Send Email"}
                        </button>
                    </form>
                </div>
            </RevealOnScroll>
        </section>
    )
}