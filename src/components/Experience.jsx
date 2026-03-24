import React from 'react';
import { motion } from 'framer-motion';

const EXP_DATA = [
  {
    type: 'Education',
    title: 'Bachelor of Technology - Computer Science',
    organization: 'Lovely Professional University | Phagwara, Punjab',
    date: 'Aug 2023 - Present',
    description: 'Current CGPA: 8.2', 
    //description: 'Core coursework encompasses Data Structures, Algorithms, Operating Systems, and Object-Oriented Programming.'
  },
  {
    type: 'Training',
    title: 'Android App Development - Summer Training',
    organization: 'Certificate Program',
    date: 'Jun 2025 - Jul 2025',
    description: 'Completed summer training in Android App Development, building real-world apps using Java, XML, and Android SDK.'
  },
  {
    type: 'Certifications',
    title: 'Multiple Advanced Certifications',
    organization: 'AWS, Infosys, Coursera',
    date: 'Apr 2025 - Aug 2025',
    description: 'AWS Cloud Solution & Practitioner, Completed courses in Computer Communication (Coursera), ChatGPT-4 Prompt Engineering & Generative AI (Infosys/Udemy)',
  },
  {
    type: 'Achievement',
    title: 'NPTEL Recognition',
    organization: 'NPTEL',
    date: 'Feb 2025 - Apr 2025',
    description: 'Achieved Gold Elite Grade in NPTEL Internet Of Things.',
  },
  {
    type: 'Education',
    title: 'Intermediate & Matriculation',
    organization: "L.P Savani Academy | Surat, Gujarat",
    date: 'Mar 2020 - Apr 2023',
    description: 'Completed Intermediate with 83% (2022-2023) & Matriculation with 86% (2020-2021).',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-dark-300 transition-colors duration-300 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">My <span className="text-primary-500">Journey</span></h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-primary-400 to-slate-300 dark:to-slate-700 transform md:-translate-x-1/2"
          ></motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.3
                }
              }
            }}
            className="space-y-12"
          >
            {EXP_DATA.map((item, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.6 }}
                className={`relative flex items-center justify-between md:justify-normal w-full ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
                }`}
              >
                {/* Timeline Dot */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + (index * 0.1), duration: 0.4 }}
                  className="absolute left-[15px] md:left-1/2 w-4 h-4 rounded-full bg-primary-500 border-4 border-slate-50 dark:border-dark-300 transform -translate-x-1/2 md:-translate-x-1/2 z-10 shadow-[0_0_10px_rgba(34,197,94,0.5)]"
                ></motion.div>
                
                {/* Empty Space for alignment on Desktop */}
                <div className="hidden md:block md:w-[calc(50%-30px)]"></div>
                
                {/* Content Card */}
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className={`w-[calc(100%-40px)] md:w-[calc(50%-30px)] ml-auto md:ml-0 glass-card p-6 rounded-2xl border-l-4 border-primary-500 shadow-sm hover:shadow-md transition-all ${
                  index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
                }`}>
                  <div className="flex justify-between items-center mb-2 flex-wrap gap-2">
                    <span className="text-primary-500 text-sm font-bold uppercase tracking-wider">{item.type}</span>
                    <span className="text-slate-500 dark:text-slate-400 text-xs font-medium bg-slate-200 dark:bg-slate-800 px-2 py-1 rounded-md">{item.date}</span>
                  </div>
                  <h3 className="text-xl font-bold dark:text-white mb-1 group-hover:text-primary-500 transition-colors">{item.title}</h3>
                  <h4 className="text-slate-700 dark:text-slate-300 font-medium mb-3">{item.organization}</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
