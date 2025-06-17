import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  return (
    <section id="contact" className="py-20 px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="numbered-heading text-lightestSlate font-bold justify-center"
        >
          What's Next?
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold text-lightestSlate mb-6"
        >
          Get In Touch
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-darkSlate leading-relaxed mb-12 max-w-lg mx-auto"
        >
          I am currently looking for any new opportunities, my inbox is always open. 
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href="mailto:samsonoakinsanya@gmail.com"
            className="inline-block px-8 py-4 border border-green-400 text-green-400 rounded font-mono text-sm hover:bg-green-400/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-400/25"
          >
            Say Hello
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;