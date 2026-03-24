import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone, FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

// ─────────────────────────────────────────────────────────
// 🔧 PASTE YOUR EMAILJS CREDENTIALS BELOW
// Sign up free at https://www.emailjs.com
// ─────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID = 'service_idkzlza';   // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'template_syr3spu';  // e.g. 'template_xyz456'
const EMAILJS_PUBLIC_KEY = 'QI-CO52CI9BbuqaGt';   // e.g. 'A1B2C3D4E5F6G7H8'
// ─────────────────────────────────────────────────────────

const Contact = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      formRef.current.reset();
      // Reset back to idle after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-dark-200 transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Get In <span className="text-primary-500">Touch</span></h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info */}
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
            className="w-full lg:w-1/3 space-y-8"
          >
            {[
              { icon: <FiMail size={24} />, title: 'Email', content: 'singhayush.0273@gmail.com', href: 'mailto:singhayush.0273@gmail.com' },
              { icon: <FiMapPin size={24} />, title: 'Location', content: 'Phagwara, Punjab' },
              { icon: <FiPhone size={24} />, title: 'Phone', content: '+91-9825784027' },
            ].map((item, i) => (
              <motion.div 
                key={i}
                variants={{
                  hidden: { opacity: 0, x: -30 },
                  visible: { opacity: 1, x: 0 }
                }}
                whileHover={{ x: 10, transition: { duration: 0.2 } }}
                className="glass-card p-6 rounded-2xl flex items-start gap-4 border-l-4 border-transparent hover:border-primary-500 transition-all shadow-sm hover:shadow-md"
              >
                <div className="p-4 bg-primary-50 dark:bg-primary-900/30 text-primary-500 rounded-xl">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-xl font-semibold dark:text-white mb-1">{item.title}</h4>
                  {item.href ? (
                    <a href={item.href} className="text-slate-600 dark:text-slate-400 hover:text-primary-500 transition-colors block break-all">
                      {item.content}
                    </a>
                  ) : (
                    <p className="text-slate-600 dark:text-slate-400">{item.content}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full lg:w-2/3"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="glass-card p-8 rounded-3xl flex flex-col gap-6 border-t-4 border-primary-500 shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div whileFocus={{ y: -2 }}>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="from_name"
                    required
                    disabled={status === 'loading'}
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-dark-100 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all dark:text-white disabled:opacity-60"
                    placeholder="John Doe"
                  />
                </motion.div>
                <motion.div whileFocus={{ y: -2 }}>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="from_email"
                    required
                    disabled={status === 'loading'}
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-dark-100 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all dark:text-white disabled:opacity-60"
                    placeholder="john@example.com"
                  />
                </motion.div>
              </div>

              <motion.div whileFocus={{ y: -2 }}>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  disabled={status === 'loading'}
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-dark-100 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all dark:text-white resize-none disabled:opacity-60"
                  placeholder="How can I help you?"
                ></textarea>
              </motion.div>

              {/* Status Messages */}
              <AnimatePresence>
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 font-medium overflow-hidden"
                  >
                    <FiCheckCircle size={20} />
                    Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 font-medium overflow-hidden"
                  >
                    <FiAlertCircle size={20} />
                    Failed to send. Please try again or email me directly.
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="py-4 px-8 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-bold transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-primary-500/25"
              >
                {status === 'loading' ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                    </svg>
                    Sending...
                  </>
                ) : status === 'success' ? (
                  <><FiCheckCircle size={20} /> Sent!</>
                ) : (
                  <><FiSend size={18} /> Send Message</>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
