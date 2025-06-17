import { motion } from 'framer-motion';

const EmailLink = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      className="fixed bottom-0 right-10 z-30 hidden lg:block"
    >
      <div className="flex flex-col items-center after:content-[''] after:block after:w-px after:h-24 after:bg-lightSlate after:mt-6">
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7 }}
          href="mailto:samsonoakinsanya@gmail.com"
          className="text-lightSlate hover:text-green-400 hover:-translate-y-1 transition-all duration-300 font-mono text-sm tracking-widest"
          style={{ writingMode: 'vertical-rl' }}
        >
          samsonoakinsanya@gmail.com
        </motion.a>
      </div>
    </motion.div>
  );
};

export default EmailLink;