import React, { Suspense, lazy } from 'react'
import './index.css'
import Nav from './components/Nav'
import Hero from './components/Hero'

const Showcase = lazy(() => import('./components/Showcase'))
const Features = lazy(() => import('./components/Features'))
const ProjectDetail = lazy(() => import('./components/ProjectDetail'))
const About = lazy(() => import('./components/About'))
const Footer = lazy(() => import('./components/Footer'))

function App() {
  return (
    <div className="relative overflow-clip w-full h-full min-h-screen">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary/10 rounded-full blur-[150px]"></div>
        <div className="absolute inset-0 bg-grid-glow"></div>
        {/* Dynamic "Particle" Floating Elements */}
        <div className="absolute top-[20%] left-[15%] w-1 h-1 bg-primary rounded-full shadow-[0_0_10px_#8ff5ff]"></div>
        <div className="absolute top-[60%] right-[20%] w-2 h-2 bg-secondary rounded-full shadow-[0_0_12px_#ac89ff]"></div>
        <div className="absolute bottom-[30%] left-[25%] w-1.5 h-1.5 bg-tertiary rounded-full shadow-[0_0_8px_#ff59e3]"></div>
      </div>

      <div className="relative z-10 font-body">
        <Nav />
        <main className="flex flex-col items-center">
          <Hero />
          <Suspense fallback={<div className="h-20" />}>
            <Showcase />
            <Features />
            <ProjectDetail />
            <About />
          </Suspense>
        </main>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
    </div>
  )
}

export default App
