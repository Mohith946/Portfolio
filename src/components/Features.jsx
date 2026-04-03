import React from 'react';

const Features = () => {
    return (
        <section 
            style={{ marginTop: '-100vh' }} 
            className="relative z-[50] bg-[#050505] w-full border-t border-outline-variant/30"
        >
            <div className="w-full max-w-7xl mx-auto px-4 md:px-12 pt-32 pb-16 z-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    
                    {/* Card 1: Quality Focus */}
                    <div className="bg-[#0f0f11] rounded-[1.5rem] p-10 flex flex-col items-start gap-4 border border-white/5 hover:border-white/10 transition-colors shadow-2xl">
                        <div className="text-[#e2b973] mb-2">
                            {/* Simple Podium Diagram SVG */}
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M16 14v4h-2v-4h2zm-6-8v12H8V6h2zm10 10v2h-2v-2h2zm2 4H2v-2h20v2zM6 18v-4H4v4h2z"/>
                            </svg>
                        </div>
                        <h3 className="text-white text-[1.4rem] font-bold tracking-tight">Quality Focus</h3>
                        <p className="text-gray-300 text-[15px] font-medium leading-relaxed">
                            Delivering high-quality results while maintaining attention to every detail.
                        </p>
                    </div>

                    {/* Card 2: Reliable Communication */}
                    <div className="bg-[#0f0f11] rounded-[1.5rem] p-10 flex flex-col items-start gap-4 border border-white/5 hover:border-white/10 transition-colors shadow-2xl">
                        <div className="text-[#3ed096] mb-2">
                            {/* Chat Bubble with Dots SVG */}
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 14H6v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z"/>
                            </svg>
                        </div>
                        <h3 className="text-white text-[1.4rem] font-bold tracking-tight">Reliable Communication</h3>
                        <p className="text-gray-300 text-[15px] font-medium leading-relaxed">
                            Keeping you updated at every step to ensure transparency and clarity.
                        </p>
                    </div>

                    {/* Card 3: On-Time Delivery */}
                    <div className="bg-[#0f0f11] rounded-[1.5rem] p-10 flex flex-col items-start gap-4 border border-white/5 hover:border-white/10 transition-colors shadow-2xl">
                        <div className="text-[#f58fee] mb-2">
                            {/* Stopwatch SVG */}
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M11 2h2v4h-2zm9.17 2.59l-1.42-1.42-2.12 2.12 1.42 1.42 2.12-2.12zM12 22c5.52 0 10-4.48 10-10 0-4.7-3.26-8.64-7.66-9.69L13 6.13c-.31-.08-.65-.13-1-.13s-.69.05-1 .13L9.66 2.31C5.26 3.36 2 7.3 2 12c0 5.52 4.48 10 10 10zm1-10.41l3.54 3.54-1.41 1.41L11 12.41V8h2v3.59z"/>
                            </svg>
                        </div>
                        <h3 className="text-white text-[1.4rem] font-bold tracking-tight">On-Time Delivery</h3>
                        <p className="text-gray-300 text-[15px] font-medium leading-relaxed">
                            Making sure projects are completed on schedule, with quality & attention to detail.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Features;
