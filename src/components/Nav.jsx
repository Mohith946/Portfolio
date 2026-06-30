import React from 'react';

const Nav = () => {
    const handleScroll = (e, targetId) => {
        e.preventDefault();
        if (targetId === 'home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            const element = document.getElementById(targetId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    };

    return (
        <nav className="absolute top-0 left-0 w-full z-50 pt-10 pb-4">
            <ul className="flex flex-wrap justify-center gap-4 sm:justify-between items-center w-full max-w-[90%] md:max-w-[85%] mx-auto text-[10px] md:text-sm font-bold uppercase tracking-[0.2em] text-[#808080]">
                <li><a href="#" onClick={(e) => handleScroll(e, 'home')} className="hover:text-white transition-colors duration-300">Home</a></li>
                <li><a href="#about" onClick={(e) => handleScroll(e, 'about')} className="hover:text-white transition-colors duration-300">Education</a></li>
                <li><a href="#projects" onClick={(e) => handleScroll(e, 'projects')} className="hover:text-white transition-colors duration-300">Projects</a></li>
                <li><a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="hover:text-white transition-colors duration-300">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Nav;
