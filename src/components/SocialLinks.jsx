import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi';

const SocialLinks = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Iamsomatil',
      icon: FiGithub,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/samsonoakinsanya',
      icon: FiLinkedin,
    },
    {
      name: 'Twitter',
      url: 'https://x.com/Somatill',
      icon: FiTwitter,
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/Iamsomatil',
      icon: FiInstagram,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      className="fixed bottom-0 left-10 z-30 hidden lg:block"
    >
      <ul className="flex flex-col items-center space-y-6 after:content-[''] after:block after:w-px after:h-24 after:bg-lightSlate after:mt-6">
        {socialLinks.map((link, index) => (
          <motion.li
            key={link.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7 + index * 0.1 }}
          >
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lightSlate hover:text-green-400 hover:-translate-y-1 transition-all duration-300"
              aria-label={link.name}
            >
              <link.icon size={20} />
            </a>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default SocialLinks;