import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen relative">
      {/* Modern Aurora Background */}
      <div className="aurora-bg">
        <div className="aurora-element aurora-1"></div>
        <div className="aurora-element aurora-2"></div>
        <div className="aurora-element aurora-3"></div>
        <div className="absolute inset-0 bg-pattern-dots text-slate-900/5 dark:text-white/5"></div>
      </div>

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
