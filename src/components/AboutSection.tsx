import React from 'react';
import { motion } from 'framer-motion';
import { Code, Rocket, Brain, Coffee } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { icon: <Code size={24} />, value: '5+', label: 'Years of Experience' },
    { icon: <Rocket size={24} />, value: '50+', label: 'Projects Completed' },
    { icon: <Brain size={24} />, value: '30+', label: 'Technologies Mastered' },
    { icon: <Coffee size={24} />, value: '∞', label: 'Cups of Coffee' },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <section id="about" className="mb-16 scroll-mt-20">
      <h2 className="text-3xl font-bold mb-8 text-red-600">About Me</h2>
      
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Bio Card */}
        <motion.div 
          variants={item}
          className="bg-gradient-to-br from-[#2F2F2F] to-[#1F1F1F] p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
        >
          <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
            Who I Am
          </h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            Passionate full-stack developer with a keen eye for creating seamless user experiences. 
            Specialized in modern web technologies and cloud architecture.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Always exploring new technologies and methodologies to build better digital solutions.
            Let's create something amazing together!
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          variants={item}
          className="grid grid-cols-2 gap-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-[#2F2F2F] to-[#1F1F1F] p-6 rounded-lg text-center group hover:from-red-900/20 hover:to-red-800/20 transition-colors duration-300"
            >
              <div className="text-red-500 mb-2 group-hover:scale-110 transition-transform duration-300 inline-block">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-red-500 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;