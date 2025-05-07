import React from 'react';

const skills = {
  frontend: ['HTML/CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
  backend: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs', 'GraphQL'],
  tools: ['Git', 'Docker', 'Figma', 'Webpack', 'Jest', 'CI/CD'],
  other: ['UI/UX Design', 'Accessibility', 'Performance Optimization', 'Responsive Design']
};

interface SkillCategoryProps {
  title: string;
  skills: string[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills }) => (
  <div className="mb-4">
    <h3 className="text-pink-primary text-sm mb-2">{title}</h3>
    <div className="grid grid-cols-2 gap-2">
      {skills.map((skill, index) => (
        <div 
          key={index} 
          className="bg-pink-bg p-2 border border-pink-dark text-xs"
        >
          {skill}
        </div>
      ))}
    </div>
  </div>
);

const SkillsWindow: React.FC = () => {
  return (
    <div className="p-2 h-full overflow-auto">
      <div className="bg-pink-light p-4 border-2 border-pink-dark h-full">
        <h2 className="text-pink-primary text-lg mb-4 glow-text">Skills</h2>
        
        <SkillCategory title="Frontend Development" skills={skills.frontend} />
        <SkillCategory title="Backend Development" skills={skills.backend} />
        <SkillCategory title="Tools & Workflow" skills={skills.tools} />
        <SkillCategory title="Other Skills" skills={skills.other} />
      </div>
    </div>
  );
};

export default SkillsWindow;