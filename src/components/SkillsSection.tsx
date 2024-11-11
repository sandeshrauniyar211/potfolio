import React from 'react';
import { Code2, Server, Cloud, Smartphone } from 'lucide-react';
import SkillCard from './SkillCard';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code2 size={24} />,
      skills: [
        { name: "React", proficiency: 95 },
        { name: "TypeScript", proficiency: 90 },
        { name: "Tailwind CSS", proficiency: 85 },
        { name: "Next.js", proficiency: 88 }
      ]
    },
    {
      title: "Backend",
      icon: <Server size={24} />,
      skills: [
        { name: "Node.js", proficiency: 92 },
        { name: "Python", proficiency: 85 },
        { name: "PostgreSQL", proficiency: 88 },
        { name: "GraphQL", proficiency: 82 }
      ]
    },
    {
      title: "DevOps",
      icon: <Cloud size={24} />,
      skills: [
        { name: "Docker", proficiency: 85 },
        { name: "AWS", proficiency: 80 },
        { name: "CI/CD", proficiency: 88 },
        { name: "Kubernetes", proficiency: 75 }
      ]
    },
    {
      title: "Mobile",
      icon: <Smartphone size={24} />,
      skills: [
        { name: "React Native", proficiency: 90 },
        { name: "Flutter", proficiency: 82 },
        { name: "iOS", proficiency: 78 },
        { name: "Android", proficiency: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="mb-16 scroll-mt-20">
      <h2 className="text-3xl font-bold mb-8 text-red-600">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category) => (
          <SkillCard
            key={category.title}
            title={category.title}
            skills={category.skills}
            icon={category.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;