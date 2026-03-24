import React, { useEffect, useState } from 'react';
import { FiSun, FiMoon, FiDroplet } from 'react-icons/fi';

const THEMES = [
  'emerald', 'blue', 'purple', 'orange', 'rose',
  'cyan', 'amber', 'indigo', 'teal', 'fuchsia'
];

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);
  const [theme, setTheme] = useState('emerald');

  useEffect(() => {
    // Initial theme setup
    const savedTheme = localStorage.getItem('color-theme') || 'emerald';
    const savedMode = localStorage.getItem('theme') || 'dark';

    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);

    if (savedMode === 'light') {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    } else {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleMode = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  const cycleTheme = () => {
    const currentIndex = THEMES.indexOf(theme);
    const nextIndex = (currentIndex + 1) % THEMES.length;
    const nextTheme = THEMES[nextIndex];
    
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('color-theme', nextTheme);
  };

  return (
    <div className="flex items-center gap-2 p-1 rounded-full glass border border-white/20">
      <button
        onClick={cycleTheme}
        className="p-2 rounded-full transition-all duration-300 hover:bg-white/10 group relative"
        title={`Current Theme: ${theme.charAt(0).toUpperCase() + theme.slice(1)}`}
      >
        <FiDroplet size={20} className="text-primary-500 transition-colors duration-300 group-hover:scale-110" />
        <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-800 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Theme: {theme}
        </span>
      </button>
      
      <div className="w-px h-4 bg-slate-300 dark:bg-slate-700" />
      
      <button
        onClick={toggleMode}
        className="p-2 rounded-full transition-all duration-300 hover:bg-white/10 group relative"
        aria-label="Toggle Dark Mode"
      >
        {isDark ? (
          <FiSun size={20} className="text-amber-400 transition-colors duration-300 group-hover:scale-110" />
        ) : (
          <FiMoon size={20} className="text-indigo-600 transition-colors duration-300 group-hover:scale-110" />
        )}
        <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-800 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          {isDark ? 'Light Mode' : 'Dark Mode'}
        </span>
      </button>
    </div>
  );
};

export default ThemeToggle;
