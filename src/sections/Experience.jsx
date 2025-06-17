import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      company: 'TechSpring Innovations',
      position: 'Front-End Web Developer Intern',
      duration: 'June 2021 – May 2022',
      location: 'Remote',
      responsibilities: [
        'Collaborated with the engineering team to build responsive front-end interfaces using React and Tailwind CSS',
        'Participated in daily stand-ups and code reviews, improving code quality and learning agile methodologies',
        'Worked on internal tools and simple web apps to support client projects and UI development',
        'Gained hands-on experience using Git for version control and integrating REST APIs',
      ],
      technologies: ['React', 'Tailwind CSS', 'JavaScript', 'REST APIs', 'Git', 'Trello']
    },
    {
      company: 'DevKraft Studio',
      position: 'Junior Front-End Web Developer',
      duration: 'June 2022 – November 2023',
      location: 'Lagos, Nigeria',
      responsibilities: [
        'Developed and maintained modern web applications using React and Vite with a focus on performance and scalability',
        'Built features such as search, filters, and content rendering from APIs including TMDB and REST Countries',
        'Translated Figma designs into responsive, accessible, pixel-perfect UIs',
        'Collaborated cross-functionally with backend teams and designers to ensure seamless user experiences',
      ],
      technologies: ['React', 'Tailwind CSS', 'JavaScript', 'TMDB API', 'REST Countries API', 'Axios', 'Vite']
    },
    {
      company: 'Freelance & Personal Projects',
      position: 'Junior Front-End Web Developer',
      duration: 'December 2023 – Present',
      location: 'Remote',
      responsibilities: [
        'Built a suite of live web projects including a password generator, QR code tool, movie database app, and e-commerce landing page',
        'Deployed websites using Vercel and Netlify with continuous integration practices',
        'Emphasized responsive design, clean code structure, and effective user interactions',
        'Maintained GitHub repositories and handled open-source-style documentation for all projects',
      ],
      technologies: ['React', 'Tailwind CSS', 'JavaScript', 'EmailJS', 'GitHub', 'Netlify', 'Vercel']
    },
    {
      company: 'CodeLabs Agency',
      position: 'Junior Front-End Web Developer (Contract)',
      duration: 'March 2024 – Present',
      location: 'Contract, Remote',
      responsibilities: [
        'Leading front-end implementation for small business websites and product pages',
        'Created SEO-friendly, fast-loading pages with React and Tailwind, ensuring optimal performance',
        'Integrated third-party services like EmailJS and interactive UI components for better user engagement',
        'Regularly collaborated with clients to update UI elements, fix bugs, and improve site accessibility',
      ],
      technologies: ['React', 'Tailwind CSS', 'JavaScript', 'Vite', 'EmailJS', 'Lighthouse', 'Git']
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="numbered-heading text-lightestSlate font-bold"
        >
          Where I&apos;ve Worked
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row"
        >
          {/* Tab List */}
          <div className="relative w-full md:w-auto mb-8 md:mb-0 md:mr-8">
            <div className="flex md:flex-col overflow-x-auto pb-2 md:pb-0 -mx-4 md:mx-0 px-4 md:px-0 snap-x snap-mandatory md:snap-none scrollbar-hide">
              {experiences.map((exp, index) => (
                <div key={exp.company} className="snap-start">
                  <button
                    onClick={() => setActiveTab(index)}
                    className={`tab-button whitespace-nowrap ${activeTab === index ? 'active' : ''}`}
                  >
                    {exp.company}
                  </button>
                </div>
              ))}
            </div>
            <div className="absolute right-0 top-0 bottom-0 w-8 md:hidden bg-gradient-to-l from-navy pointer-events-none"></div>
          </div>

          {/* Tab Content */}
          <div className="flex-1 min-h-[400px]">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-medium text-lightestSlate mb-2">
                <span>{experiences[activeTab].position}</span>
                <span className="text-green-400"> @ {experiences[activeTab].company}</span>
              </h3>
              
              <p className="font-mono text-sm text-darkSlate mb-6">
                {experiences[activeTab].duration}
              </p>

              <ul className="space-y-4">
                {experiences[activeTab].responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex items-start text-darkSlate">
                    <span className="text-green-400 mr-3 mt-1 text-sm">▹</span>
                    <span className="leading-relaxed">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;