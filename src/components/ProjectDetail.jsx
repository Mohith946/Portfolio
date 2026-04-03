import React from 'react';

const techLogos = [
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
  { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg' },
  { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' },
];

const ProjectDetail = () => {
    // Doubling the array perfectly accommodates the translateX(-50%) infinite animation loop
    const marqueeLogos = [...techLogos, ...techLogos];
    const marqueeReverseLogos = [...techLogos].reverse();
    const doubleReverseLogos = [...marqueeReverseLogos, ...marqueeReverseLogos];

    return (
        <section className="relative z-[60] bg-[#000000] w-full border-t border-outline-variant/30 flex flex-col items-center overflow-hidden">
            
            {/* Header */}
            <div className="pt-40 pb-20 text-center max-w-4xl px-8 w-full z-10">
                <h2 className="text-5xl md:text-7xl font-headline font-black leading-tight text-white mb-6 uppercase tracking-tight">
                    Technical Arsenal
                </h2>
                <p className="text-sm md:text-xl text-outline-variant font-bold tracking-[0.3em] uppercase mb-16">
                    Languages & Frameworks
                </p>
            </div>

            {/* Marquee Row 1 (Scrolling Left) */}
            <div className="w-full relative mb-8 flex overflow-hidden">
                <div className="animate-marquee-left flex items-center gap-8 md:gap-12 px-4 md:px-6">
                    {marqueeLogos.map((tech, idx) => (
                        <div key={`row1-${idx}`} className="flex-shrink-0 w-40 h-40 md:w-56 md:h-56 rounded-[2rem] md:rounded-[3rem] bg-[#08090a] border border-outline-variant/30 flex flex-col items-center justify-center p-6 transition-transform hover:scale-105 hover:border-primary/50 group">
                            <img src={tech.icon} alt={tech.name} className="w-16 h-16 md:w-20 md:h-20 object-contain mb-4 md:mb-6 opacity-70 group-hover:opacity-100 transition-opacity drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:drop-shadow-[0_0_20px_rgba(143,245,255,0.4)]" />
                            <span className="text-white font-bold tracking-widest text-[8px] md:text-[10px] uppercase">{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Marquee Row 2 (Scrolling Right) */}
            <div className="w-full relative mb-40 flex overflow-hidden">
                <div className="animate-marquee-right flex items-center gap-8 md:gap-12 px-4 md:px-6">
                    {doubleReverseLogos.map((tech, idx) => (
                        <div key={`row2-${idx}`} className="flex-shrink-0 w-40 h-40 md:w-56 md:h-56 rounded-[2rem] md:rounded-[3rem] bg-[#050505] border border-outline-variant/20 flex flex-col items-center justify-center p-6 transition-transform hover:scale-105 hover:border-secondary/50 group">
                            <img src={tech.icon} alt={tech.name} className="w-16 h-16 md:w-20 md:h-20 object-contain mb-4 md:mb-6 opacity-70 group-hover:opacity-100 transition-opacity drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:drop-shadow-[0_0_20px_rgba(172,137,255,0.4)]" />
                            <span className="text-outline-variant font-bold tracking-widest text-[8px] md:text-[10px] uppercase group-hover:text-white transition-colors">{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>
            
        </section>
    );
};

export default ProjectDetail;
