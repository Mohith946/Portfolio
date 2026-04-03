import React, { useState } from 'react';

const About = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        // Required: Replace this with your Web3Forms Access Key
        formData.append("access_key", import.meta.env.VITE_CONTACT_KEY);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Message Sent Successfully!");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };
    return (
        <div className="w-full relative z-20">
            {/* The 3D Floating About Me Section */}
            <section className="relative w-full h-[100vh] min-h-[900px] bg-[#050505] flex flex-col items-center justify-center overflow-hidden z-20" id="about">
                
                {/* Floating 3D-styled Emojis/Icons simulating the render shapes */}
                {/* Top Left: Splash / Abstract Silver */}
                <div className="absolute top-[12%] left-[5%] md:left-[12%] text-7xl md:text-[10rem] animate-[bounce_5s_ease-in-out_infinite_alternate] drop-shadow-[0_20px_40px_rgba(255,255,255,0.2)] opacity-80 select-none grayscale contrast-200 -rotate-12">
                    🫧
                </div>
                {/* Bottom Left: Red Heart */}
                <div className="absolute bottom-[20%] left-[8%] md:left-[20%] text-7xl md:text-[9rem] animate-[bounce_6s_ease-in-out_infinite_alternate] drop-shadow-[0_20px_40px_rgba(255,0,0,0.5)] opacity-80 select-none delay-1000 -rotate-12">
                    ❤️
                </div>
                {/* Top Right: Blue Solid Fist / Box */}
                <div className="absolute top-[15%] right-[5%] md:right-[15%] text-7xl md:text-[9rem] animate-[bounce_4s_ease-in-out_infinite_alternate] drop-shadow-[0_20px_40px_rgba(0,100,255,0.6)] opacity-80 select-none delay-500 rotate-[15deg]">
                    🧊
                </div>
                {/* Bottom Right: Purple Flower */}
                <div className="absolute bottom-[25%] right-[8%] md:right-[20%] text-7xl md:text-[9rem] animate-[bounce_7s_ease-in-out_infinite_alternate] drop-shadow-[0_20px_40px_rgba(200,0,255,0.6)] opacity-80 select-none delay-700 -rotate-12">
                    🌸
                </div>

                {/* Center Content Group */}
                <div className="relative z-10 flex flex-col items-center text-center max-w-4xl px-4">
                    
                    {/* Massive Single-Layer ABOUT ME */}
                    <div className="mb-6 flex justify-center w-full">
                        <h2 className="text-[4rem] md:text-[10rem] whitespace-nowrap font-headline font-black uppercase tracking-tighter bg-gradient-to-b from-white to-[#a8a8a8] text-transparent bg-clip-text drop-shadow-2xl"
                           style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>
                            ABOUT ME
                        </h2>
                    </div>
                    
                    {/* Centered Paragraph */}
                    <p className="text-gray-300 text-sm md:text-xl font-body font-bold leading-relaxed max-w-2xl mx-auto mb-16 px-4">
                        I am a 3rd-year B.Tech Computer Science and Engineering student passionate about coding and problem-solving.<br/>
                        I have skills in Java, Python, and web development,and I enjoy building projects that bring ideas to life.<br/>
                        I am continuously learning and working towards becoming a skilled software engineer.<br/>
                       
                        <span className="block mt-2">Let's create something amazing together.</span>
                    </p>

                    {/* Gradient Contact Button (Exact Match) */}
                    <div className="relative group">
                         {/* Subtle outer glow matching the fill */}
                         <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#1b0b3b] via-[#d62898] to-[#fbb059] opacity-40 blur-lg group-hover:opacity-70 transition-opacity duration-300"></div>
                         <a href="#contact" className="relative inline-flex items-center justify-center px-12 py-5 rounded-full bg-gradient-to-r from-[#1b0b3b] via-[#d62898] to-[#fbb059] border border-white/30 hover:scale-105 transition-all duration-300 shadow-2xl">
                             <span className="relative z-10 text-white text-xs md:text-sm font-bold uppercase tracking-[0.25em] drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">CONTACT ME</span>
                         </a>
                    </div>

                </div>
                </section>

            {/* The Light Themed Contact Section */}
            <section className="w-full bg-[#f4f5f7] rounded-t-[4rem] px-8 md:px-16 lg:px-24 pt-32 pb-16 relative overflow-hidden mt-20" id="contact">
                {/* 3D Balloon Shape Abstract using CSS */}
                <div className="absolute top-[30%] -left-12 md:left-4 w-40 h-40 md:w-64 md:h-64 rounded-[40%_60%_70%_30%] bg-gradient-to-tr from-[#9333ea] via-[#c084fc] to-[#e879f9] shadow-[0_20px_50px_rgba(147,51,234,0.6)] opacity-90 transition-transform duration-700 animate-[spin_20s_linear_infinite] pointer-events-none drop-shadow-2xl mix-blend-multiply"></div>
                {/* Yellow shape floating right */}
                <div className="absolute top-[10%] right-[-2%] w-16 h-32 md:h-48 rounded-full bg-gradient-to-tr from-yellow-500 to-amber-200 rotate-45 shadow-[0_10px_30px_rgba(234,179,8,0.5)] opacity-90 blur-[1px] pointer-events-none"></div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
                    {/* Left Typography */}
                    <div className="flex flex-col justify-center">
                        <h2 className="text-[5rem] md:text-[6rem] leading-[0.85] font-headline font-black text-[#111111] uppercase tracking-[-0.05em] drop-shadow-sm">
                            LET'S<br />GET IN<br />TOUCH
                        </h2>
                        <a href="mailto:mohithla24@gmail.com" className="mt-8 text-xl md:text-2xl font-bold font-body text-[#111111] underline underline-offset-[10px] decoration-2 decoration-gray-400 hover:decoration-purple-500 transition-colors w-max">
                            mohithla24@gmail.com
                        </a>
                    </div>

                    {/* Right Form */}
                    <div className="flex flex-col justify-center max-w-md w-full ml-auto">
                        <form onSubmit={onSubmit} className="space-y-12">
                            <div>
                                <input name="name" placeholder="Full Name*" required className="w-full bg-transparent border-b border-gray-400 pb-3 text-sm text-[#111] placeholder:text-gray-500 font-bold tracking-wide focus:outline-none focus:border-purple-600 transition-colors" type="text" />
                            </div>
                            <div className="grid grid-cols-2 gap-8">
                                <div>
                                    <input name="email" placeholder="Email*" required className="w-full bg-transparent border-b border-gray-400 pb-3 text-sm text-[#111] placeholder:text-gray-500 font-bold tracking-wide focus:outline-none focus:border-purple-600 transition-colors" type="email" />
                                </div>
                                <div>
                                    <input name="phone" placeholder="Phone" className="w-full bg-transparent border-b border-gray-400 pb-3 text-sm text-[#111] placeholder:text-gray-500 font-bold tracking-wide focus:outline-none focus:border-purple-600 transition-colors" type="tel" />
                                </div>
                            </div>
                            <div className="pt-2">
                                <input name="message" placeholder="Message" required className="w-full bg-transparent border-b border-gray-400 pb-3 text-sm text-[#111] placeholder:text-gray-500 font-bold tracking-wide focus:outline-none focus:border-purple-600 transition-colors" type="text" />
                            </div>
                            <div className="pt-6">
                                <button type="submit" className="w-full border-2 border-[#8b5cf6] rounded-full py-4 text-sm font-bold text-[#8b5cf6] uppercase tracking-widest hover:bg-[#8b5cf6] hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(139,92,246,0.1)] hover:shadow-[0_0_30px_rgba(139,92,246,0.4)]">
                                    SEND
                                </button>
                            </div>
                            {/* Feedback Result Message */}
                            <span className="block text-center mt-4 text-sm font-bold tracking-widest uppercase text-purple-700">{result}</span>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
