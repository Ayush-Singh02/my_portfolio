import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import ThemeToggle from './ThemeToggle';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'projects' },
  { name: 'Experience', to: 'experience' },
  { name: 'Certificates', to: 'certificates' },
  { name: 'Contact', to: 'contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'glass py-3 shadow-lg shadow-black/5' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link to="home" smooth={true} duration={500} className="cursor-pointer text-2xl font-bold text-gradient">
          Ayush.
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  spy={true}
                  activeClass="text-primary-500 font-semibold"
                  className="cursor-pointer text-sm font-medium hover:text-primary-500 transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="w-px h-6 bg-slate-300 dark:bg-slate-700" />
          <ThemeToggle />
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer px-5 py-2 rounded-full bg-primary-500 hover:bg-primary-600 text-white transition-colors font-medium text-sm"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl text-slate-800 dark:text-slate-200">
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full glass border-t border-white/10 shadow-lg md:hidden"
          >
            <ul className="flex flex-col p-6 gap-4">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    smooth={true}
                    duration={500}
                    className="block text-lg font-medium hover:text-primary-500"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="contact"
                  onClick={() => setIsOpen(false)}
                  smooth={true}
                  duration={500}
                  className="block text-lg font-medium text-primary-500"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
