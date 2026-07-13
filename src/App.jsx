import React, { useState, useEffect } from 'react'
import './index.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Showcase from './components/Showcase'
import Features from './components/Features'
import ProjectDetail from './components/ProjectDetail'
import About from './components/About'
import Footer from './components/Footer'
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      if (!isHovering) setIsHovering(true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isHovering]);

  return (
    <div className="relative overflow-clip w-full h-full min-h-screen">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Ambient base glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#8ff5ff]/8 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#ac89ff]/8 rounded-full blur-[180px]"></div>
        <div className="absolute top-[40%] left-[30%] w-[45%] h-[45%] bg-[#ff59e3]/5 rounded-full blur-[140px]"></div>

        {/* Dynamic Mouse Spotlight Glow */}
        {isHovering && (
          <div
            className="absolute rounded-full pointer-events-none transition-opacity duration-500 blur-[100px]"
            style={{
              left: `${mousePos.x - 220}px`,
              top: `${mousePos.y - 220}px`,
              width: '440px',
              height: '440px',
              background: 'radial-gradient(circle, rgba(143, 245, 255, 0.12) 0%, rgba(172, 137, 255, 0.06) 50%, transparent 100%)',
            }}
          />
        )}

        {/* Dot Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-dot-pattern opacity-60"></div>
        <div className="absolute inset-0 bg-grid-glow opacity-30"></div>
      </div>

      <div className="relative z-10 font-body">
        <Nav />
        <main className="flex flex-col items-center">
          <Hero />
          <Showcase />
          <Features />
          <ProjectDetail />
          <About />
        </main>
        <Footer />
      </div>
      <SpeedInsights />
    </div>
  )
}

export default App

