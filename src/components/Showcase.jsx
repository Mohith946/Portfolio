import React from 'react';
import project1Image from '../assets/project1.png';

import project3Image from '../assets/project3.png';

const Showcase = () => {
    return (
        <section className="px-4 md:px-12 max-w-7xl mx-auto pt-40 pb-20 w-full relative z-20" id="projects">
            {/* Header */}
            <header className="mb-0 md:mb-16 flex justify-center w-full relative">
                <h1 className="projects-title text-center">
                    PROJECTS
                </h1>
            </header>

            {/* Project Stack */}
            <div className="flex flex-col gap-12 lg:gap-24 relative w-full pb-[100vh]">

                {/* Project 01 */}
                <article className="sticky top-[80px] md:top-[120px] z-10 w-full rounded-3xl md:rounded-[2.5rem] border border-outline-variant/70 bg-[#08090a] shadow-2xl overflow-hidden pb-8 md:pb-12 transition-all duration-500 hover:shadow-[0_0_50px_rgba(143,245,255,0.05)]">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 md:p-8 lg:px-12 lg:py-10 bg-[#08090a]">
                        <div className="flex items-center gap-4 md:gap-6">
                            <span className="text-6xl md:text-8xl font-headline font-black text-white">01</span>
                            <div className="flex flex-col">
                                <span className="text-[10px] uppercase tracking-[0.3em] text-outline-variant font-bold mb-1">Full-Stack Object Detection System</span>
                                <h3 className="text-lg md:text-xl font-bold tracking-tight text-white">AI Surveillance Dashboard</h3>
                            </div>
                        </div>
                        <div className="mt-6 md:mt-0">
                            <a href="#" className="border border-outline-variant/70 text-white px-6 md:px-8 py-3 rounded-[2rem] text-[10px] md:text-xs font-bold tracking-widest hover:bg-white hover:text-black transition-all inline-block uppercase line-none">
                                LIVE PROJECT
                            </a>
                        </div>
                    </div>
                    {/* Project Details */}
                    <div className="px-6 md:px-8 lg:px-12 pb-6 md:pb-8 text-outline-variant text-sm md:text-base">
                        <p className="mb-4 text-white font-semibold">Tech Stack: <span className="text-outline-variant font-normal">React.js, TypeScript, Python, Tailwind CSS</span></p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Developed a real-time AI surveillance dashboard for live object detection and monitoring using YOLOv8 and OpenCV with optimized video streaming.</li>
                            <li>Built an interactive analytics dashboard with WebSocket-based real-time updates.</li>
                        </ul>
                    </div>
                    {/* Image Grid */}
                    <div className="px-6 md:px-8 lg:px-12">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 h-auto md:h-[380px]">
                            {/* Main Image */}
                            <div className="md:col-span-3 relative rounded-2xl md:rounded-[2rem] overflow-hidden group h-56 sm:h-64 md:h-full border border-outline-variant/30 flex items-center justify-center bg-[#0d0d0d]">
                                <img src={project1Image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="AI Surveillance Main" />
                            </div>
                        </div>
                    </div>
                </article>

                {/* Project 02 */}
                <article className="sticky top-[100px] md:top-[240px] z-20 w-full rounded-3xl md:rounded-[2.5rem] border border-outline-variant/70 bg-[#08090a] shadow-[0_-20px_50px_rgba(0,0,0,0.8)] overflow-hidden pb-8 md:pb-12 transition-all duration-500 hover:shadow-[0_-20px_50px_rgba(0,0,0,0.8),0_0_50px_rgba(172,137,255,0.05)]">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 md:p-8 lg:px-12 lg:py-10 bg-[#08090a]">
                        <div className="flex items-center gap-4 md:gap-6">
                            <span className="text-6xl md:text-8xl font-headline font-black text-white">02</span>
                            <div className="flex flex-col">
                                <span className="text-[10px] uppercase tracking-[0.3em] text-outline-variant font-bold mb-1">T3 Stack Application</span>
                                <h3 className="text-lg md:text-xl font-bold tracking-tight text-white">AI Crowd Control System</h3>
                            </div>
                        </div>
                        <div className="mt-6 md:mt-0">
                            <a href="#" className="border border-outline-variant/70 text-white px-6 md:px-8 py-3 rounded-[2rem] text-[10px] md:text-xs font-bold tracking-widest hover:bg-white hover:text-black transition-all inline-block uppercase line-none">
                                LIVE PROJECT
                            </a>
                        </div>
                    </div>
                    {/* Project Details */}
                    <div className="px-6 md:px-8 lg:px-12 pb-6 md:pb-8 text-outline-variant text-sm md:text-base">
                        <p className="mb-4 text-white font-semibold">Tech Stack: <span className="text-outline-variant font-normal">PostgreSQL, Next.js, TypeScript, tRPC</span></p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Developed an AI-based crowd monitoring system using real-time object detection to improve public safety.</li>
                            <li>Implemented YOLOv8 with optimized data pipelines for detecting crowd density and potential threats.</li>
                        </ul>
                    </div>
                    {/* Image Grid */}
                    <div className="px-6 md:px-8 lg:px-12">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 h-auto md:h-[380px]">
                            {/* Main Image */}
                            <div className="md:col-span-3 relative rounded-2xl md:rounded-[2rem] overflow-hidden group h-56 sm:h-64 md:h-full border border-outline-variant/30">
                                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXL5I8Y5iw3CkW_lme2Oqn2CREods2ScxeymFJBSJuQgYJRN-tZMGMAUthtI_QkpF4j3fbopUjd5tiI-jI0tOSgJofGb1tGzKBOqMQ--We58B0LJwLbO4IPUbjVY26Vrp3WnSIhfZaePqZs9IiPzUXq8lu2e2uK0jaMTDJiVm-8pP-dZpa50jC8lV2Y5NaPELsN5OtbDhxAaLnBB3UXcAQ2Z3bRVVfw2KZeyGjq8px6G72xl2kU7634xzn1va2xt_WsoQ2-Av0PPXR" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="AI Crowd Control Main" />
                            </div>

                        </div>
                    </div>
                </article>

                {/* Project 03 */}
                <article className="sticky top-[120px] md:top-[360px] z-30 w-full rounded-3xl md:rounded-[2.5rem] border border-outline-variant/70 bg-[#08090a] shadow-[0_-20px_50px_rgba(0,0,0,0.8)] overflow-hidden pb-8 md:pb-12 transition-all duration-500 hover:shadow-[0_-20px_50px_rgba(0,0,0,0.8),0_0_50px_rgba(255,89,227,0.05)]">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 md:p-8 lg:px-12 lg:py-10 bg-[#08090a]">
                        <div className="flex items-center gap-4 md:gap-6">
                            <span className="text-6xl md:text-8xl font-headline font-black text-white">03</span>
                            <div className="flex flex-col">
                                <span className="text-[10px] uppercase tracking-[0.3em] text-outline-variant font-bold mb-1">Full-Stack Web Application</span>
                                <h3 className="text-lg md:text-xl font-bold tracking-tight text-white">Event Registration System</h3>
                            </div>
                        </div>
                        <div className="mt-6 md:mt-0">
                            <a href="#" className="border border-outline-variant/70 text-white px-6 md:px-8 py-3 rounded-[2rem] text-[10px] md:text-xs font-bold tracking-widest hover:bg-white hover:text-black transition-all inline-block uppercase line-none">
                                LIVE PROJECT
                            </a>
                        </div>
                    </div>
                    {/* Project Details */}
                    <div className="px-6 md:px-8 lg:px-12 pb-6 md:pb-8 text-outline-variant text-sm md:text-base">
                        <p className="mb-4 text-white font-semibold">Tech Stack: <span className="text-outline-variant font-normal">Node.js, Express.js, HTML, JavaScript, Tailwind CSS, REST API</span></p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Developed a full-stack event registration platform with REST APIs for event management, participant registrations, and seat tracking.</li>
                            <li>Built a secure admin dashboard with CRUD operations, validation mechanisms, and a responsive Tailwind CSS interface with dark/light mode support.</li>
                        </ul>
                    </div>
                    {/* Image Grid */}
                    <div className="px-6 md:px-8 lg:px-12">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 h-auto md:h-[480px]">
                            {/* Main Image */}
                            <div className="md:col-span-3 relative rounded-2xl md:rounded-[2rem] overflow-hidden group h-56 sm:h-64 md:h-full border border-outline-variant/30 flex items-center justify-center bg-[#0d0d0d]">
                                <img src={project3Image} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" alt="Event Registration Main" />
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default Showcase;
