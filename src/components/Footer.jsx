import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="bg-slate-50 dark:bg-dark-300 py-12 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <div className="text-center md:text-left">
            <Link to="home" smooth={true} duration={500} className="cursor-pointer text-2xl font-bold text-gradient mb-2 inline-block">
              Ayush
            </Link>
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              Learning and Building with Tech 
            </p>
          </div>

          <div className="flex items-center gap-6">
            <SocialIcon href="https://github.com/Ayush-Singh02" icon={<FiGithub />} />
            <SocialIcon href="https://www.linkedin.com/in/ayush-singh-as0208/" icon={<FiLinkedin />} />
            <SocialIcon href="mailto:singhayush.0273@gmail.com" icon={<FiMail />} />

          </div>
        </div>

        {/* <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} Aditya Kumar. All rights reserved.
          </p>
          <p className="text-slate-400 dark:text-slate-500 text-xs">
            Built with React &amp; Tailwind CSS
          </p>
        </div> */}
      </div>
    </footer>
  );
};

const SocialIcon = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-primary-500 dark:hover:text-primary-400 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-500/20 transition-all duration-300"
  >
    {icon}
  </a>
);

export default Footer;
