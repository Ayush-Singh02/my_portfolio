import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-dark-200 transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">About <span className="text-primary-500">Me</span></h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50, rotate: -5 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <div className="relative group max-w-sm w-full">
              <div></div>
              <div className="relative aspect-square md:aspect-auto md:h-[400px] w-full rounded-2xl overflow-hidden glass border-2 border-white/20 dark:border-white/5 flex items-center justify-center bg-slate-100 dark:bg-dark-100">
                <img 
                  src="me.jpeg" //IMAGE ADD Krna hai
                  alt="Ayush Singh" 
                  className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-1/2 space-y-6"
          >
            <h3 className="text-2xl font-semibold dark:text-white">
              Hi, I'm Ayush Singh. A <span className="text-primary-500">Computer Science</span> student and passionate developer.
            </h3>
            
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              I am currently pursuing my Bachelor of Technology in Computer Science and Engineering from Lovely Professional University. I have a strong passion for problem-solving, backed by a solid foundation in Data Structures and Algorithms. Along with this, I have knowledge of Cloud Computing technologies such as AWS, Virtualization and DevOps, enabling me to build scalable, secure, and efficient applications. I also possess a diverse technical skill set in Development. 
            </p>
            
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              Whether building scalable cloud-based solutions using AWS services, developing high-performance Android applications, or implementing efficient workflows with modern DevOps tools, I enjoy applying my technical skills to create impactful and reliable digital products. I am passionate about delivering secure, scalable, and user-centric solutions. Let’s build something truly exceptional together.
            </p>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.4
                  }
                }
              }}
              className="grid grid-cols-2 gap-4 pt-4">
              {[
                { label: 'CGPA at LPU', value: '8.21' },
                { label: 'Problems Solved', value: '300+' },
                { label: 'Projects Built', value: '5+' },
                { label: 'Certifications', value: '6+' },
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 }
                  }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="glass-card p-4 rounded-xl text-center border-b-2 border-transparent hover:border-primary-500 transition-colors"
                >
                  <h4 className="text-primary-500 font-bold text-3xl mb-1">{stat.value}</h4>
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
