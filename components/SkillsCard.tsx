import React from 'react';
import { Skill } from '../types';

interface SkillsCardProps {
  skills: Skill[];
}

export const SkillsCard: React.FC<SkillsCardProps> = ({ skills }) => {
  return (
    <div 
      className="bg-white p-6 rounded-3xl shadow-lg border border-gray-200 w-full h-full"
      aria-labelledby="skills-heading"
    >
      <h2 id="skills-heading" className="text-2xl font-bold text-gray-800 mb-6">Skill set</h2>
      <div className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.name} className="flex items-center p-3 border border-gray-200 rounded-xl bg-gray-50/50">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center p-1 mr-4">
              <img src={skill.icon} alt={`${skill.name} logo`} className="w-full h-full object-contain" />
            </div>
            <p className="text-base text-gray-700 font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};