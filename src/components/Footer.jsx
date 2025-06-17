import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 text-center">
      <div className="max-w-4xl mx-auto px-6">
        {/* Mobile Social Links */}
        <div className="flex justify-center space-x-6 mb-6 lg:hidden">
          <a
            href="https://github.com/Iamsomatil"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lightSlate hover:text-green-400 transition-colors"
            aria-label="GitHub"
          >
            <FiGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/samsonoakinsanya"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lightSlate hover:text-green-400 transition-colors"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={24} />
          </a>
          <a
            href="https://x.com/Somatill"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lightSlate hover:text-green-400 transition-colors"
            aria-label="Twitter"
          >
            <FiTwitter size={24} />
          </a>
        </div>

        <div className="text-lightSlate font-mono text-sm">
          <p>Built by Samson Akinsanya</p>
          <p className="mt-2">© {currentYear} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;