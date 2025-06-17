import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-mono text-green-400 text-base md:text-lg mb-5"
        >
          Hi, my name is
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-lightestSlate mb-5"
        >
          Samson Akinsanya.
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-darkSlate mb-8"
        >
          I build beautiful websites and digital products.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl text-darkSlate max-w-2xl mb-12 leading-relaxed"
        >
          I'm a front-end developer specializing in building exceptional digital experiences. 
          Currently, I'm focused on building accessible, human-centered products at{' '}
          <a 
            href="https://example.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-green-400 hover:underline"
          >
            @company
          </a>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <button
            onClick={scrollToContact}
            className="px-8 py-4 border border-green-400 text-green-400 rounded font-mono text-sm hover:bg-green-400/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-400/25"
          >
            Get In Touch
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;