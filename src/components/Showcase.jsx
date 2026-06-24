import React from 'react';
import project1Image from '../assets/project1.png';
import project3Image from '../assets/project3.png';

const projects = [
  {
    number: '01',
    category: 'Full-Stack Object Detection System',
    title: 'AI Surveillance Dashboard',
    techStack: 'React.js, TypeScript, Python, Tailwind CSS',
    description: [
      'Developed a real-time AI surveillance dashboard for live object detection and monitoring using YOLOv8 and OpenCV with optimized video streaming.',
      'Built an interactive analytics dashboard with WebSocket-based real-time updates.'
    ],
    image: project1Image,
    top: 'top-[80px] md:top-[120px]',
    zIndex: 'z-10',
    shadowHover: 'hover:shadow-[0_0_50px_rgba(143,245,255,0.05)]'
  },
  {
    number: '02',
    category: 'T3 Stack Application',
    title: 'AI Crowd Control System',
    techStack: 'PostgreSQL, Next.js, TypeScript, tRPC',
    description: [
      'Developed an AI-based crowd monitoring system using real-time object detection to improve public safety.',
      'Implemented YOLOv8 with optimized data pipelines for detecting crowd density and potential threats.'
    ],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXL5I8Y5iw3CkW_lme2Oqn2CREods2ScxeymFJBSJuQgYJRN-tZMGMAUthtI_QkpF4j3fbopUjd5tiI-jI0tOSgJofGb1tGzKBOqMQ--We58B0LJwLbO4IPUbjVY26Vrp3WnSIhfZaePqZs9IiPzUXq8lu2e2uK0jaMTDJiVm-8pP-dZpa50jC8lV2Y5NaPELsN5OtbDhxAaLnBB3UXcAQ2Z3bRVVfw2KZeyGjq8px6G72xl2kU7634xzn1va2xt_WsoQ2-Av0PPXR',
    top: 'top-[100px] md:top-[240px]',
    zIndex: 'z-20',
    shadowHover: 'hover:shadow-[0_-20px_50px_rgba(0,0,0,0.8),0_0_50px_rgba(172,137,255,0.05)]'
  },
  {
    number: '03',
    category: 'Full-Stack Web Application',
    title: 'Event Registration System',
    techStack: 'Node.js, Express.js, HTML, JavaScript, Tailwind CSS, REST API',
    description: [
      'Developed a full-stack event registration platform with REST APIs for event management, participant registrations, and seat tracking.',
      'Built a secure admin dashboard with CRUD operations, validation mechanisms, and a responsive Tailwind CSS interface with dark/light mode support.'
    ],
    image: project3Image,
    top: 'top-[120px] md:top-[360px]',
    zIndex: 'z-30',
    shadowHover: 'hover:shadow-[0_-20px_50px_rgba(0,0,0,0.8),0_0_50px_rgba(255,89,227,0.05)]',
    imgClass: 'object-top'
  }
];

const Showcase = () => {
  return (
    <section className="px-4 md:px-12 max-w-7xl mx-auto pt-40 pb-20 w-full relative z-20" id="projects">
      {/* Header */}
      <header className="mb-0 md:mb-16 flex justify-center w-full relative">
        <h1 className="projects-title text-center">PROJECTS</h1>
      </header>

      {/* Project Stack */}
      <div className="flex flex-col gap-12 lg:gap-24 relative w-full pb-[100vh]">
        {projects.map((project, idx) => (
          <article
            key={idx}
            className={`sticky ${project.top} ${project.zIndex} w-full rounded-3xl md:rounded-[2.5rem] border border-outline-variant/70 bg-[#08090a] shadow-2xl overflow-hidden pb-8 md:pb-12 transition-all duration-500 ${project.shadowHover}`}
          >
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 md:p-8 lg:px-12 lg:py-10 bg-[#08090a]">
              <div className="flex items-center gap-4 md:gap-6">
                <span className="text-6xl md:text-8xl font-headline font-black text-white">{project.number}</span>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-outline-variant font-bold mb-1">{project.category}</span>
                  <h3 className="text-lg md:text-xl font-bold tracking-tight text-white">{project.title}</h3>
                </div>
              </div>
              <div className="mt-6 md:mt-0">
                <a href="#" className="border border-outline-variant/70 text-white px-6 md:px-8 py-3 rounded-[2rem] text-[10px] md:text-xs font-bold tracking-widest hover:bg-white hover:text-black transition-all inline-block uppercase">
                  LIVE PROJECT
                </a>
              </div>
            </div>

            {/* Project Details */}
            <div className="px-6 md:px-8 lg:px-12 pb-6 md:pb-8 text-outline-variant text-sm md:text-base">
              <p className="mb-4 text-white font-semibold">Tech Stack: <span className="text-outline-variant font-normal">{project.techStack}</span></p>
              <ul className="list-disc pl-5 space-y-2">
                {project.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Image Grid */}
            <div className="px-6 md:px-8 lg:px-12">
              <div className={`relative rounded-2xl md:rounded-[2.5rem] overflow-hidden group h-56 sm:h-64 md:h-[400px] border border-outline-variant/30 bg-[#0d0d0d]`}>
                <img
                  src={project.image}
                  className={`w-full h-full object-cover ${project.imgClass || ''} group-hover:scale-105 transition-transform duration-700`}
                  alt={project.title}
                  loading="lazy"
                />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Showcase;
