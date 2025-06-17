import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import ProfileImage from '../assets/images/Somatil.PNG';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const technologies = [
    'JavaScript (ES6+)',
    'React',
    'Node.js',
    'TypeScript',
    'Python',
    'MongoDB',
    'PostgreSQL',
    'AWS',
    'Docker',
    'Git & GitHub',
  ];

  return (
    <section id="about" className="py-20 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="numbered-heading text-lightestSlate font-bold"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 space-y-4"
          >
            <p className="text-darkSlate leading-relaxed">
              Hello! My name is Samson and I enjoy creating things that live on the internet. 
              My interest in web development started back in 2018 when I decided to try editing 
              custom Tumblr themes — turns out hacking together a custom reblog button taught me 
              a lot about HTML & CSS!
            </p>

            <p className="text-darkSlate leading-relaxed">
              Fast-forward to today, and I've had the privilege of working at{' '}
              <a href="#" className="text-green-400 hover:underline">an advertising agency</a>,{' '}
              <a href="#" className="text-green-400 hover:underline">a start-up</a>,{' '}
              <a href="#" className="text-green-400 hover:underline">a huge corporation</a>, and{' '}
              <a href="#" className="text-green-400 hover:underline">a student-led design studio</a>. 
              My main focus these days is building accessible, inclusive products and digital 
              experiences at <a href="#" className="text-green-400 hover:underline">Upstatement</a> for 
              a variety of clients.
            </p>

            <p className="text-darkSlate leading-relaxed">
              Here are a few technologies I've been working with recently:
            </p>

            <ul className="grid grid-cols-2 gap-2 mt-6 font-mono text-sm">
              {technologies.map((tech, index) => (
                <motion.li
                  key={tech}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-center text-darkSlate"
                >
                  <span className="text-green-400 mr-2">▹</span>
                  {tech}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative group"
          >
            <div className="relative">
              <div className="w-full max-w-xs mx-auto">
                <div className="relative">
                  <img
                    src={ProfileImage}
                    alt="Samson Akinsanya"
                    className="relative z-10 w-full h-auto rounded filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                  <div className="absolute inset-0 border-2 border-green-400 rounded translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;