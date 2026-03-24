import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';
import { Link } from 'react-scroll';

const Hero = () => {
  const particlesInit = useCallback(async engine => {
    // Only load the required plugins
    await loadSlim(engine);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Particles */}
      <div className="absolute inset-0 z-0">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            background: {
              color: { value: "transparent" },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onHover: { enable: true, mode: "repulse" },
                resize: true,
              },
              modes: {
                repulse: { distance: 100, duration: 0.4 },
              },
            },
            particles: {
              color: { value: "#22c55e" },
              links: {
                color: "#22c55e",
                distance: 150,
                enable: true,
                opacity: 0.2,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: { default: "bounce" },
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: { enable: true, area: 800 },
                value: 40,
              },
              opacity: { value: 0.3 },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 3 } },
            },
            detectRetina: true,
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.h2 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6 }}
            className="text-xl md:text-2xl text-primary-500 font-medium mb-4"
          >
            Hello, World! I am
          </motion.h2>
          
          <motion.h1 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
          >
            Ayush Singh
          </motion.h1>
          
          <motion.h3 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-4xl font-semibold text-slate-600 dark:text-slate-300 mb-8 h-12"
          >
            I'm a{' '}
            <span className="text-gradient">
              <Typewriter
                words={['Computer Science Student', 'Problem Solver', 'Cloud Computing Enthusiast', 'Tech Innovator']}
                loop={true}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </motion.h3>
          
          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400 mb-10 leading-relaxed text-lg"
          >
            Aspiring cloud engineer and problem solver, dedicated to designing scalable systems and delivering efficient, real-world solutions.
          </motion.p>
          
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 mb-12"
          >
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="cursor-pointer px-8 py-3 rounded-full bg-primary-500 hover:bg-primary-600 text-white hover:scale-105 active:scale-95 transition-all font-medium text-lg w-full sm:w-auto text-center shadow-lg hover:shadow-primary-500/25"
            >
              View My Work
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer px-8 py-3 rounded-full border-2 border-primary-500 text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:scale-105 active:scale-95 transition-all font-medium text-lg w-full sm:w-auto text-center"
            >
              Contact Me
            </Link>
            <button
              onClick={() => {
                const viewLink = 'https://drive.google.com/file/d/1-wQSJ0reg1I3sLZf8p2AWDYylFCh1bpI/view?usp=sharing';
                const downloadLink = 'https://drive.google.com/uc?export=download&id=1MhaIMKn5KZPEtmEYRM-ZbzucXeuPOCuX';
                window.open(viewLink, '_blank');
                setTimeout(() => window.location.href = downloadLink, 1000);
              }}
              className="cursor-pointer px-8 py-3 rounded-full border-2 border-primary-500 text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:scale-105 active:scale-95 transition-all font-medium text-lg w-full sm:w-auto text-center inline-flex items-center justify-center gap-2"
            >
              <FiDownload size={18} /> CV
            </button>
          </motion.div>
          
          <motion.div 
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 }
            }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-6"
          >
            <SocialIcon href="https://github.com/Ayush-Singh02" icon={<FiGithub />} />
            <SocialIcon href="https://www.linkedin.com/in/ayush-singh-as0208/" icon={<FiLinkedin />} />
            <SocialIcon href="mailto:singhayush.0273@gmail.com" icon={<FiMail />} />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <Link to="about" smooth={true} duration={500}>
          <span className="text-sm font-medium text-slate-400 mb-2 block">Scroll Down</span>
          <div className="w-[30px] h-[50px] border-2 border-slate-400 rounded-full flex justify-center p-1">
            <div className="w-1.5 h-3 bg-slate-400 rounded-full"></div>
          </div>
        </Link>
      </motion.div>
    </section>
  );
};

const SocialIcon = ({ href, icon }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ y: -5, scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="text-2xl text-slate-500 hover:text-primary-500 transition-colors duration-300"
  >
    {icon}
  </motion.a>
);

export default Hero;
