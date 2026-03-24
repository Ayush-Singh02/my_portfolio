import React from 'react';
import { motion } from 'framer-motion';
import {
  FaPython, FaJava, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaAws,
  FaBrain, FaUsers, FaClock, FaLightbulb, FaNetworkWired, FaCss3Alt,
  FaServer, FaCloud,
} from "react-icons/fa";

import {
  SiCplusplus, SiExpress, SiMongodb, SiMysql,
  SiPostman
} from "react-icons/si";

import {
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiGithubactions,
  SiTerraform,
  SiAnsible,
  SiNginx,
  SiLinux,
  SiPrometheus,
  SiGrafana
} from "react-icons/si";

import {
  MdComputer, MdMemory
} from "react-icons/md";
import { SiHtml5 } from "react-icons/si";

const SKILLS_DATA = [
  { category: 'Languages', items: [
    {name: 'Python', icon: <FaPython/>},
      {name: 'C', icon: <span className="font-bold">C</span>},
      {name: 'C++', icon: <SiCplusplus/>}, 
      {name: 'Java', icon: <FaJava/>}, 
    ] 
  },
  { category: 'Frameworks & Libraries', items: [
    {name: 'ReactJS',icon: <FaReact/>},
    {name: 'NodeJS',icon:<FaNodeJs/>},
    {name: 'Express',icon:<SiExpress/>},
     {name: 'HTML',icon:<SiHtml5/>},
     {name: 'CSS', icon:<FaCss3Alt/>}
    ] 
  },
  { category: 'Tools & Platforms', items: [
    {name: 'MySQL',icon: <SiMysql/>},
    {name: 'MongoDB',icon:<SiMongodb/>},
    {name: 'Git',icon:<FaGitAlt/>},
     {name: 'GitHub',icon:<FaGithub/>},
      {name:  'Postman',icon:<SiPostman/>},
    ]
   },
  { category: 'Cloud & DevOps',
    items: [
      { name: 'AWS (VPC, EC2, S3, RDS)', icon: <FaAws /> },
      { name: 'Docker', icon: <SiDocker /> },
      { name: 'Linux', icon: <SiLinux /> },
      { name: 'GitHubActions', icon: <SiGithubactions/> },
      {name: 'Virtualization',icon: <FaCloud/>}
    ]
  },

  { category: 'CS Fundamentals', 
    items: [
    { name: 'Data Structures', icon: <MdMemory/> },
    { name: 'Algorithms', icon: <FaBrain /> },
    { name: 'Operating Systems', icon: <MdComputer/> },
    { name: 'Computer Networks', icon: <FaNetworkWired/> },
    { name: 'OOPs', icon: <SiCplusplus/> },
  ]
},
  { category: 'Soft Skills', 
     items: [
    { name: 'Time Management', icon: <FaClock/> },
    { name: 'Problem Solving', icon: <FaLightbulb/> },
    { name: 'Adaptability', icon: <FaBrain/> },
    { name: 'Team Player', icon: <FaUsers/> },
    
  ]
},

  /*{category: 'DevOps',
  items: [
    { name: 'Kubernetes', icon: <SiKubernetes /> },
    { name: 'Jenkins', icon: <SiJenkins /> },
    //{ name: 'Terraform', icon: <SiTerraform /> },
    //{ name: 'Ansible', icon: <SiAnsible /> },
    { name: 'Nginx', icon: <SiNginx /> },
    { name: 'Prometheus', icon: <SiPrometheus /> },
    { name: 'Grafana', icon: <SiGrafana /> },
  ]
}*/
];


const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">My <span className="text-primary-500">Skills</span></h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            Here are the technologies and tools I am proficient in. I'm always eager to learn more.
          </p>
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
                staggerChildren: 0.15
              }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {SKILLS_DATA.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="p-8 rounded-2xl bg-white dark:bg-slate-800 shadow-md"
            >
              <h3 className="text-xl font-bold mb-6 text-slate-800 dark:text-white border-b-2 border-primary-500/30 pb-2 inline-block">
                {skillGroup.category}
              </h3>
              <ul className="space-y-4">
                {skillGroup.items.map((skill, i) => (
  <motion.li 
    key={i}
    whileHover={{ x: 5 }}
    className="flex items-center gap-3 group"
  >
    <span className="text-xl text-primary-500">
      {skill.icon}
    </span>

    <span className="text-slate-700 dark:text-slate-300 font-medium group-hover:text-primary-500 transition-colors">
      {skill.name}
    </span>
  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
