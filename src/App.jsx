import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import SocialLinks from './components/SocialLinks';
import EmailLink from './components/EmailLink';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-navy-900 flex items-center justify-center z-50">
        <div className="text-green-400 text-2xl font-mono animate-pulse">
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div className="bg-navy-900 text-darkSlate min-h-screen">
      <Header />
      <SocialLinks />
      <EmailLink />
      
      <main className="pt-0">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;