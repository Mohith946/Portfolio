import React from 'react';
import project1Image from '../assets/project1.png';
import project3Image from '../assets/project3.png';
import project4Image from '../assets/project4.png';

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
    shadowHover: 'hover:shadow-[0_0_50px_rgba(143,245,255,0.05)]',
    link: '#'
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
    shadowHover: 'hover:shadow-[0_-20px_50px_rgba(0,0,0,0.8),0_0_50px_rgba(172,137,255,0.05)]',
    link: '#'
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
    imgClass: 'object-top',
    link: '#'
  },
  {
    number: '04',
    category: 'POLICE THEFT MANAGEMENT & RECOVERY SYSTEM',
    title: 'SHIELD Protocol Console',
    techStack: 'React.js, Node.js, Express.js, MongoDB, Tailwind CSS',
    description: [
      'Developed a secure, full-stack law enforcement command console for real-time tracking of stolen assets, suspect profiles, and citizen theft complaints.',
      'Built an automated property-matching algorithm that compares stolen item logs against recovered goods to instantly calculate matching probability scores.',
      'Implemented mobile-responsive QR-code scanning for rapid evidence verification and geopinned incident mapping.'
    ],
    image: project4Image,
    top: 'top-[140px] md:top-[480px]',
    zIndex: 'z-40',
    shadowHover: 'hover:shadow-[0_-20px_50px_rgba(0,0,0,0.8),0_0_50px_rgba(143,245,255,0.05)]',
    link: 'https://dvgpolice.vercel.app/'
  }
];

const Showcase = () => {
  return (
    <section className="px-6 md:px-12 max-w-[96rem] mx-auto pt-32 pb-24 w-full relative z-20" id="projects">
      {/* Section Header */}
      <header className="mb-0 md:mb-16 flex justify-center w-full relative">

        <h2 className="projects-title text-center">
          My Works
        </h2>
      </header>

      {/* Unified Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full items-stretch">
        {projects.map((project, idx) => {
          // Define accent colors for each card to keep the modern look
          const colors = [
            { text: 'text-[#8ff5ff]', border: 'hover:border-[#8ff5ff]/30', glow: 'group-hover:from-[#8ff5ff]/5' },
            { text: 'text-[#ac89ff]', border: 'hover:border-[#ac89ff]/30', glow: 'group-hover:from-[#ac89ff]/5' },
            { text: 'text-[#ff59e3]', border: 'hover:border-[#ff59e3]/30', glow: 'group-hover:from-[#ff59e3]/5' },
            { text: 'text-[#8ff5ff]', border: 'hover:border-[#8ff5ff]/30', glow: 'group-hover:from-[#8ff5ff]/5' }
          ];
          const color = colors[idx % colors.length];

          return (
            <article
              key={idx}
              className="group relative flex flex-col justify-between rounded-[2.5rem] border border-white/5 bg-[#0e0f12] p-8 shadow-2xl hover:border-white/10 hover:shadow-[0_30px_60px_rgba(0,0,0,0.6)] transition-all duration-500"
            >
              <div>
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className={`text-[10px] uppercase tracking-[0.25em] font-headline font-bold ${color.text}`}>
                      {project.category}
                    </span>
                    <h4 className="text-sm text-gray-400 font-semibold mt-1">
                      {project.title}
                    </h4>
                  </div>
                  <span className={`text-4xl font-headline font-black text-white/10 group-hover:${color.text}/20 transition-colors duration-300`}>
                    {project.number}
                  </span>
                </div>

                {/* Image Wrapper */}
                <div className="relative rounded-2xl overflow-hidden bg-black/40 border border-white/5 p-4 flex items-center justify-center min-h-[200px] md:min-h-[240px] group-hover:border-white/10 transition-colors duration-300">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full max-h-[220px] object-contain rounded-xl group-hover:scale-[1.02] transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-tr from-transparent ${color.glow} to-transparent transition-all duration-500 pointer-events-none rounded-xl`} />
                </div>
              </div>

              {/* Footer Info */}
              <div className="mt-8 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-xl md:text-2xl font-headline font-bold text-white tracking-tight">
                    {project.title}
                  </h3>
                  <div className="text-gray-400 text-sm mt-3 space-y-2 leading-relaxed">
                    {project.description.map((desc, i) => (
                      <p key={i}>{desc}</p>
                    ))}
                  </div>
                </div>

                {/* Tech Stack & Action */}
                <div className="mt-8 pt-6 border-t border-white/5 flex flex-col gap-4">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.split(', ').map((tech, i) => (
                      <span key={i} className="text-[10px] font-bold tracking-wide uppercase px-2.5 py-1 rounded-md bg-white/5 text-gray-400 border border-white/5 hover:border-white/20 hover:text-white transition-colors duration-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link || "#"}
                    target={project.link && project.link !== '#' ? "_blank" : undefined}
                    rel={project.link && project.link !== '#' ? "noopener noreferrer" : undefined}
                    className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest ${color.text} hover:text-white transition-colors duration-300 self-start mt-2`}
                  >
                    LIVE PROJECT
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Showcase;
