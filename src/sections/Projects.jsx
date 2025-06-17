import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const featuredProjects = [
    {
      title: "Digitech Agency",
      description: "A sleek and responsive digital agency landing page designed to showcase services like web development, SEO, and brand strategy. Built with clean UI/UX principles and optimized for lead conversion.",
      image: `${process.env.PUBLIC_URL}/images/Digitech.jpeg`,
      technologies: ["React", "VsCode", "Tailwind CSS", "JavaScript", "Netlify"],
      github: "https://github.com/Iamsomatil/Digitech-agency",
      external: "https://digitechh.netlify.app/",
      featured: true,
    },
    {
      title: "Saveur Cuisine",
      description: "A modern, food-focused website presenting beautifully crafted recipe pages, intuitive navigation, and elegant food imagery. Built to simulate a digital cookbook experience for food lovers.",
      image: `${process.env.PUBLIC_URL}/images/Saveur.jpeg`,
      technologies: ["React", "Tailwind CSS", "VsCode", "Figma", "JavaScript", "Netlify"],
      github: "https://github.com/Iamsomatil/saveur-restaurant-landingpage",
      external: "https://saveur-cuisine.netlify.app/",
      featured: true,
    },
    {
      title: "Shop Naija",
      description: "A minimalist e-commerce front-end built to showcase various product categories. Features responsive layouts, intuitive item cards, and a scalable UI that can integrate with a back-end for full store functionality.",
      image: `${process.env.PUBLIC_URL}/images/Naijalink.jpeg`,
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/Iamsomatil/Personal-shopper-e-commerce",
      external: "https://shop-naija.netlify.app/",
      featured: true,
    },
  ];

  const otherProjects = [
    {
      title: "Password Generator",
      description: "An intuitive password generator that creates strong, customizable passwords with options for length, uppercase/lowercase letters, numbers, and symbols. Includes copy-to-clipboard functionality for ease of use.",
      image: `${process.env.PUBLIC_URL}/images/password-generator.jpg`,
      technologies: ["React", "Tailwind CSS", "JavaScript", "Clipboard API", "Vite"],
      github: "https://github.com/Iamsomatil/Password-Generator",
      external: "https://password-generator-one-nu.vercel.app/"
    },
    {
      title: "Movie Database",
      description: "A sleek movie discovery app that uses The Movie Database (TMDB) API to allow users to search, explore, and view details of movies and TV shows with a responsive layout.",
      image: `${process.env.PUBLIC_URL}/images/movie-database.jpg`,
      technologies: ["React", "Tailwind CSS", "JavaScript", "TMDB API", "Axios", "Vite"],
      github: "https://github.com/Iamsomatil/Movie-Database",
      external: "https://movie-database-iota-self.vercel.app/"
    },
    {
      title: "QR Code Generator",
      description: "A lightweight web app that lets users generate QR codes for any URL or text input, with instant preview and download support.",
      image: `${process.env.PUBLIC_URL}/images/qr-code-generator.jpg`,
      technologies: ["React", "Tailwind CSS", "JavaScript", "QRCode.js", "Vite"],
      github: "https://github.com/Iamsomatil/QR-Code-Generator",
      external: "https://qr-code-generator-livid-six.vercel.app/"
    },
    {
      title: "REST Country Database",
      description: "A responsive country information app using the REST Countries API. Users can search, filter, and view detailed data about countries around the world.",
      image: `${process.env.PUBLIC_URL}/images/rest-country-database.jpg`,
      technologies: ["React", "Tailwind CSS", "JavaScript", "REST Countries API", "Axios", "Vite"],
      github: "https://github.com/Iamsomatil/Rest-country-database",
      external: "https://rest-country-database.vercel.app/"
    },
    {
      title: "TechSpace Blog",
      description: "A clean and modern blog website layout designed for tech articles. Features a responsive design with smooth navigation and structured post sections.",
      image: `${process.env.PUBLIC_URL}/images/techspace-blog.jpg`,
      technologies: ["React", "Tailwind CSS", "JavaScript", "Vite"],
      github: "https://github.com/Iamsomatil/techspace-blog",
      external: "https://techspace-blog.vercel.app/"
    },
    {
      title: "Akinsanya Ola Portfolio",
      description: "A personal portfolio website featuring project highlights, contact information, and a professional profile—all built with modern design and smooth responsiveness.",
      image: `${process.env.PUBLIC_URL}/images/akinsanya-ola.jpg`,
      technologies: ["React", "Tailwind CSS", "JavaScript", "EmailJS", "Vite"],
      github: "https://github.com/Iamsomatil/VA-Portfolio",
      external: "https://akinsanya-ola.netlify.app/"
    },

  ];

  return (
    <section id="projects" className="py-20 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="numbered-heading text-lightestSlate font-bold"
        >
          Some Things I&apos;ve Built
        </motion.h2>

        {/* Featured Projects */}
        <div className="space-y-24 mb-20">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className={`grid md:grid-cols-12 gap-4 items-center ${
                index % 2 === 1 ? 'md:text-right' : ''
              }`}
            >
              {/* Project Image */}
              <div className={`md:col-span-7 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="relative group">
                  <div className="relative overflow-hidden rounded bg-green-400/10">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 md:h-80 object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-green-400/20 hover:bg-transparent transition-all duration-300"></div>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className={`md:col-span-5 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <div className={`relative ${index % 2 === 1 ? 'md:-mr-16' : 'md:-ml-16'} z-10`}>
                  <p className="font-mono text-green-400 text-sm mb-2">Featured Project</p>
                  <h3 className="text-2xl font-bold text-lightestSlate mb-4 hover:text-green-400 transition-colors">
                    <a href={project.external} target="_blank" rel="noopener noreferrer">
                      {project.title}
                    </a>
                  </h3>
                  <div className="bg-slate-800 p-6 rounded shadow-lg mb-4">
                    <p className="text-darkSlate leading-relaxed">{project.description}</p>
                  </div>
                  <ul className={`flex flex-wrap gap-4 font-mono text-sm text-darkSlate mb-6 ${
                    index % 2 === 1 ? 'md:justify-end' : ''
                  }`}>
                    {project.technologies.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                  <div className={`flex space-x-4 ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lightSlate hover:text-green-400 transition-colors"
                        aria-label="GitHub Link"
                      >
                        <FiGithub size={20} />
                      </a>
                    )}
                    <a
                      href={project.external}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lightSlate hover:text-green-400 transition-colors"
                      aria-label="External Link"
                    >
                      <FiExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-lightestSlate text-center mb-12">
            Other Noteworthy Projects
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                className="project-card bg-slate-800 p-6 rounded hover:bg-slate-700 transition-all duration-300"
              >
                <div className="flex justify-between items-center mb-4">
                  <div className="text-green-400">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </div>
                  <div className="flex space-x-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lightSlate hover:text-green-400 transition-colors"
                      aria-label="GitHub Link"
                    >
                      <FiGithub size={18} />
                    </a>
                    <a
                      href={project.external}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lightSlate hover:text-green-400 transition-colors"
                      aria-label="External Link"
                    >
                      <FiExternalLink size={18} />
                    </a>
                  </div>
                </div>
                
                <h4 className="text-xl font-semibold text-lightestSlate mb-3 hover:text-green-400 transition-colors">
                  <a href={project.external} target="_blank" rel="noopener noreferrer">
                    {project.title}
                  </a>
                </h4>
                
                <p className="text-darkSlate text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                
                <ul className="flex flex-wrap gap-3 font-mono text-xs text-darkSlate">
                  {project.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;