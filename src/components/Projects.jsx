import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiVideo } from 'react-icons/fi';

const PROJECTS_DATA = [
  {
    title: 'EDU-GENIE APP: An AI Chatbot',
    description: 'Led the end-to-end development of an AI-driven mobile app, from responsive interface design to cloud integration. Implemented best practices in software architecture by combining Java-based front-end components with Firebase cloud services, resulting in a secure, high-performance chatbot capable of real-time user engagement.',
    image: 'android.avif',
    tags: ['Java', 'XML', 'Firebase', 'Android SDK', 'APIs'],
    github: 'https://github.com/Ayush-Singh02/EDU-Genie',
    demo: 'https://www.linkedin.com/feed/update/urn:li:activity:7407750385970499584/?originTrackingId=km2GtNeuQs%2Bbo52jcRHSlA%3D%3D',
    //live: 'https://chatbot2-15kx.vercel.app/',
  },
  {
    title: 'Secure AWS Web Application',
    description: 'Built a secure and highly available web application on AWS using EC2, Auto Scaling, and Application Load Balancer to ensure scalability and fault tolerance. Integrated Amazon RDS in private subnets with AWS Secrets Manager for secure database access. The system follows AWS best practices for security, reliability, and performance.',
    image: 'aws1.jpg',
    tags: ['AWS EC2', 'AWS RDS', 'AWS Secrets Manager', 'AWS Auto Scaling', 'AWS Load Balancer'],
    github: 'https://github.com/Ayush-Singh02/hosting_on_aws',
    //demo: 'https://www.linkedin.com/posts/prajjwalrai4_agroshield-webdevelopment-cropprotection-ugcPost-7319782535163494400-krCC?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEbFQtQBU50Pwz7lWmnKNSbur8fQLgj4cG8',
  },
  {
    title: 'Patient Management System',
    description: 'A RESTful Patient Management API built with Python and FastAPI to handle core CRUD functions for healthcare data. Focused on speed and reliability, the system provides a secure interface for managing sensitive patient information with integrated data validation.',
    image: 'api.jpg',
    tags: ['Python', 'FastAPI' , 'JSON', 'Pydantic', 'Backend'],
    github: 'https://github.com/Ayush-Singh02/fastapi-patient-management',
    //live: 'https://indexhtml-lime.vercel.app/',
  },
  {
    title: 'Document Management and Processing on AWS ',
    description: 'Engineered a secure, VPC-isolated Document Management System on AWS using EC2 and S3 with serverless processing via AWS Lambda. Architected a multi-tier network with Security Group policies to ensure RDS (MySQL) access followed the principle of least privilege, while maintaining full observability through CloudWatch.',
    image: 'aws.jpg',
    tags: ['AWS VPC', 'AWS EC2', 'API S3', 'AWS Lambda', 'AWS RDS'],
    github: 'https://github.com/Ayush-Singh02/aws_project',
    //live: 'https://adityamoviemate-taupe.vercel.app/login',
  },
  {
    title: 'Personal Portfolio Project',
    description: 'A dedicated personal project showcasing web development skills, responsive design principles, and modern frontend architecture. Features a clean interface and optimized performance for a seamless user experience.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&h=400&fit=crop',
    tags: ['ReactJS', 'Web Development', 'UI/UX Design'],
    github: 'https://github.com/Ayush-Singh02/my_portfolio',
    live: 'https://singhayush-portfolio.vercel.app/',
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-dark-200 transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured <span className="text-primary-500">Projects</span></h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {PROJECTS_DATA.map((project, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1 }
              }}
              transition={{ duration: 0.6, type: 'spring' }}
              whileHover={{ y: -10 }}
              className="glass-card rounded-2xl overflow-hidden group flex flex-col h-full hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-500"
            >
              <div className="relative overflow-hidden h-48 sm:h-64">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-primary-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
                  {project.github && (
                    <motion.a 
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.github} 
                      target="_blank" 
                      rel="noreferrer" 
                      title="Source Code" 
                      className="p-4 bg-white dark:bg-dark-100 rounded-full text-slate-800 dark:text-white shadow-xl"
                    >
                      <FiGithub size={22} />
                    </motion.a>
                  )}
                  {/*{project.demo && (
                    <motion.a 
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.demo} 
                      target="_blank" 
                      rel="noreferrer" 
                      title="Watch Demo Video" 
                      className="p-4 bg-white dark:bg-dark-100 rounded-full text-primary-500 shadow-xl"
                    >
                      <FiVideo size={22} />
                    </motion.a>
                  )}*/}
                  {project.live && (
                    <motion.a 
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.live} 
                      target="_blank" 
                      rel="noreferrer" 
                      title="Live Project" 
                      className="p-4 bg-primary-500 text-white rounded-full shadow-xl"
                    >
                      <FiExternalLink size={22} />
                    </motion.a>
                  )}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-3 dark:text-white group-hover:text-primary-500 transition-colors">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 text-xs font-bold uppercase tracking-wider rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
