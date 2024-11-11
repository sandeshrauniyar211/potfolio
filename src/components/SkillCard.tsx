import React from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  proficiency: number;
}

interface SkillCardProps {
  title: string;
  skills: Skill[];
  icon: React.ReactNode;
}

const SkillCard = ({ title, skills, icon }: SkillCardProps) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-gradient-to-br from-[#2F2F2F] to-[#1F1F1F] p-6 rounded-lg shadow-xl"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="text-red-500">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-red-500">{title}</h3>
      </div>
      <div className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.name} className="group">
            <div className="flex justify-between mb-1">
              <span className="text-gray-300 group-hover:text-red-400 transition-colors">
                {skill.name}
              </span>
              <span className="text-gray-400 text-sm">
                {skill.proficiency}%
              </span>
            </div>
            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.proficiency}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-red-500 to-red-600 group-hover:from-red-600 group-hover:to-red-700 transition-colors"
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCard;