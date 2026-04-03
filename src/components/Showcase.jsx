import React from 'react';

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
                <article className="sticky top-[120px] z-10 w-full rounded-[2.5rem] border border-outline-variant/70 bg-[#08090a] shadow-2xl overflow-hidden pb-12 transition-all duration-500 hover:shadow-[0_0_50px_rgba(143,245,255,0.05)]">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-8 lg:px-12 lg:py-10 bg-[#08090a]">
                        <div className="flex items-center gap-6">
                            <span className="text-7xl md:text-8xl font-headline font-black text-white">01</span>
                            <div className="flex flex-col">
                                <span className="text-[10px] uppercase tracking-[0.3em] text-outline-variant font-bold mb-1">PROJECT</span>
                                <h3 className="text-lg md:text-xl font-bold tracking-tight text-white">Coding Blog</h3>
                            </div>
                        </div>
                        <div className="mt-6 md:mt-0">
                            <a href="#" className="border border-outline-variant/70 text-white px-8 py-3 rounded-[2rem] text-[10px] md:text-xs font-bold tracking-widest hover:bg-white hover:text-black transition-all inline-block uppercase line-none">
                                LIVE PROJECT
                            </a>
                        </div>
                    </div>
                    {/* Image Grid */}
                    <div className="px-8 lg:px-12">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[380px]">
                            {/* Main Image */}
                            <div className="md:col-span-2 relative rounded-[2rem] overflow-hidden group h-64 md:h-full border border-outline-variant/30">
                                <img src="https://images.unsplash.com/photo-1499673610122-01c7122a5dcb?q=80&w=2627&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Coding Blog Main" />
                            </div>
                            {/* Side Images */}
                            <div className="col-span-1 grid grid-rows-2 gap-6 h-full">
                                <div className="rounded-[2rem] overflow-hidden relative group h-48 md:h-auto border border-outline-variant/30">
                                    <img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2670&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Detail 1" />
                                </div>
                                <div className="rounded-[2rem] overflow-hidden relative group h-48 md:h-auto border border-outline-variant/30">
                                    <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2670&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Detail 2" />
                                </div>
                            </div>
                        </div>
                    </div>
                </article>

                {/* Project 02 */}
                <article className="sticky top-[240px] z-20 w-full rounded-[2.5rem] border border-outline-variant/70 bg-[#08090a] shadow-[0_-20px_50px_rgba(0,0,0,0.8)] overflow-hidden pb-12 transition-all duration-500 hover:shadow-[0_-20px_50px_rgba(0,0,0,0.8),0_0_50px_rgba(172,137,255,0.05)]">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-8 lg:px-12 lg:py-10 bg-[#08090a]">
                        <div className="flex items-center gap-6">
                            <span className="text-7xl md:text-8xl font-headline font-black text-white">02</span>
                            <div className="flex flex-col">
                                <span className="text-[10px] uppercase tracking-[0.3em] text-outline-variant font-bold mb-1">CLIENT</span>
                                <h3 className="text-lg md:text-xl font-bold tracking-tight text-white">SynthWave Arts</h3>
                            </div>
                        </div>
                        <div className="mt-6 md:mt-0">
                            <a href="#" className="border border-outline-variant/70 text-white px-8 py-3 rounded-[2rem] text-[10px] md:text-xs font-bold tracking-widest hover:bg-white hover:text-black transition-all inline-block uppercase line-none">
                                LIVE PROJECT
                            </a>
                        </div>
                    </div>
                    {/* Image Grid */}
                    <div className="px-8 lg:px-12">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[380px]">
                            {/* Main Image */}
                            <div className="md:col-span-2 relative rounded-[2rem] overflow-hidden group h-64 md:h-full border border-outline-variant/30">
                                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXL5I8Y5iw3CkW_lme2Oqn2CREods2ScxeymFJBSJuQgYJRN-tZMGMAUthtI_QkpF4j3fbopUjd5tiI-jI0tOSgJofGb1tGzKBOqMQ--We58B0LJwLbO4IPUbjVY26Vrp3WnSIhfZaePqZs9IiPzUXq8lu2e2uK0jaMTDJiVm-8pP-dZpa50jC8lV2Y5NaPELsN5OtbDhxAaLnBB3UXcAQ2Z3bRVVfw2KZeyGjq8px6G72xl2kU7634xzn1va2xt_WsoQ2-Av0PPXR" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Main" />
                            </div>
                            {/* Side Images */}
                            <div className="col-span-1 grid grid-rows-2 gap-6 h-full">
                                <div className="rounded-[2rem] overflow-hidden relative group h-48 md:h-auto border border-outline-variant/30">
                                    <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Detail 1" />
                                </div>
                                <div className="rounded-[2rem] overflow-hidden relative group h-48 md:h-auto border border-outline-variant/30">
                                    <img src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Detail 2" />
                                </div>
                            </div>
                        </div>
                    </div>
                </article>

                {/* Project 03 */}
                <article className="sticky top-[360px] z-30 w-full rounded-[2.5rem] border border-outline-variant/70 bg-[#08090a] shadow-[0_-20px_50px_rgba(0,0,0,0.8)] overflow-hidden pb-12 transition-all duration-500 hover:shadow-[0_-20px_50px_rgba(0,0,0,0.8),0_0_50px_rgba(255,89,227,0.05)] bg-[#08090a]">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-8 lg:px-12 lg:py-10 bg-[#08090a]">
                        <div className="flex items-center gap-6">
                            <span className="text-7xl md:text-8xl font-headline font-black text-white">03</span>
                            <div className="flex flex-col">
                                <span className="text-[10px] uppercase tracking-[0.3em] text-outline-variant font-bold mb-1">CLIENT</span>
                                <h3 className="text-lg md:text-xl font-bold tracking-tight text-white">MetaForm Creations</h3>
                            </div>
                        </div>
                        <div className="mt-6 md:mt-0">
                            <a href="#" className="border border-outline-variant/70 text-white px-8 py-3 rounded-[2rem] text-[10px] md:text-xs font-bold tracking-widest hover:bg-white hover:text-black transition-all inline-block uppercase line-none">
                                LIVE PROJECT
                            </a>
                        </div>
                    </div>
                    {/* Image Grid */}
                    <div className="px-8 lg:px-12">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[380px]">
                            {/* Main Image */}
                            <div className="md:col-span-2 relative rounded-[2rem] overflow-hidden group h-64 md:h-full border border-outline-variant/30">
                                <img src="https://images.unsplash.com/photo-1634153026776-88abde948a60?q=80&w=2664&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Main" />
                            </div>
                            {/* Side Images */}
                            <div className="col-span-1 grid grid-rows-2 gap-6 h-full">
                                <div className="rounded-[2rem] overflow-hidden relative group h-48 md:h-auto border border-outline-variant/30">
                                    <img src="https://images.unsplash.com/photo-1557672172-298e090bd0f1?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Detail 1" />
                                </div>
                                <div className="rounded-[2rem] overflow-hidden relative group h-48 md:h-auto border border-outline-variant/30">
                                    <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Detail 2" />
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default Showcase;
