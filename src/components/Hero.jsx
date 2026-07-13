import React, { useState, useEffect } from 'react';
import avatarImg from '../../assets/images/avatar.png';

const Hero = () => {
    // State to track cursor position for 3D parallax effect
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            // Calculate mouse distance from center of screen (-1 to 1)
            const x = (event.clientX / window.innerWidth) - 0.5;
            const y = (event.clientY / window.innerHeight) - 0.5;
            setMousePos({ x, y });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Calculate dynamic styles based on mouse position
    // The background text moves slightly opposite to create deep parallax
    const textStyle = {
        transform: `translateX(${-mousePos.x * 40}px) translateY(${-mousePos.y * 40}px)`,
        transition: 'transform 0.2s ease-out'
    };

    const handleScroll = (e, targetId) => {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <section className="relative w-full h-[100vh] min-h-[700px] bg-[#050505] overflow-hidden flex flex-col items-center justify-center" id="home">

            {/* The Massive Background Text */}
            <div className="absolute top-[20%] md:top-[15%] w-full z-0 font-headline font-black text-[18vw] sm:text-[12vw] leading-[0.8] text-[#c9c9c9] tracking-[-0.05em] select-none flex justify-center" style={textStyle}>
                <h1 className="whitespace-normal sm:whitespace-nowrap text-center">HI, I'M MOHITH L A</h1>
            </div>

            {/* The 3D Character (Overlapping the text) */}
            <div className="absolute top-[35%] md:top-[28%] left-1/2 -translate-x-1/2 z-10 w-[70vw] md:w-[45vw] max-w-[550px] pointer-events-none drop-shadow-[0_40px_80px_rgba(0,0,0,0.8)]">
                {/* 3D avatar cleanly rendering the user's native file */}
                <img
                    src={avatarImg}
                    alt="3D Avatar"
                    className="w-full h-auto object-contain scale-[1.1] md:scale-[1.0]"
                />
            </div>

            {/* The Bottom Constraints (Left Text & Right Button) */}
            <div className="absolute top-[75%] md:top-[70%] w-full max-w-[85%] mx-auto flex flex-col md:flex-row justify-between items-center md:items-start z-20 gap-8">
                {/* Left Text & Resume Button */}
                <div className="w-full md:w-[400px] flex flex-col items-center md:items-start gap-4">
                    <p className="text-[#a0a0a0] text-[10px] md:text-xs leading-loose font-bold tracking-[0.15em] uppercase text-center md:text-left">
                        A COMPUTER SCIENCE STUDENT PASSIONATE<br />
                        ABOUT FULL-STACK DEVELOPMENT<br />
                        AND AI-DRIVEN SYSTEMS 🚀
                    </p>
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/10 bg-white/5 text-white text-[10px] font-bold uppercase tracking-[0.15em] hover:bg-white/10 hover:border-white/20 hover:scale-105 transition-all duration-300 shadow-lg"
                    >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                        </svg>
                        View Resume
                    </a>
                </div>

                {/* Right Button */}
                <div className="mt-4 md:mt-0 relative group">
                    {/* Subtle outer glow matching the fill */}
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#1b0b3b] via-[#d62898] to-[#fbb059] opacity-40 blur-lg group-hover:opacity-70 transition-opacity duration-300"></div>
                    <a
                        href="#contact"
                        onClick={(e) => handleScroll(e, 'contact')}
                        className="relative inline-flex items-center justify-center px-10 py-4 md:px-12 md:py-4 rounded-full bg-gradient-to-r from-[#1b0b3b] via-[#d62898] to-[#fbb059] text-white text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] border border-white/30 hover:scale-105 transition-all duration-300 shadow-2xl"
                    >
                        <span className="relative z-10 drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">Contact Me</span>
                    </a>
                </div>
            </div>

        </section>
    );
};

export default Hero;
