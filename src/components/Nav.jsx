import React from 'react';

const Nav = () => {
    return (
        <nav className="absolute top-0 left-0 w-full z-50 pt-10 pb-4">
            <ul className="flex justify-between items-center w-full max-w-[85%] mx-auto text-[10px] md:text-sm font-bold uppercase tracking-[0.2em] text-[#808080]">
                <li><a href="#" className="hover:text-white transition-colors duration-300">Home</a></li>
                <li><a href="#about" className="hover:text-white transition-colors duration-300">Education</a></li>
                <li><a href="#projects" className="hover:text-white transition-colors duration-300">Projects</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors duration-300">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Nav;
