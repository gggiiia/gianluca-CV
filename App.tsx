import React from 'react';
import { profileData, experiences, skills } from './data';
import { ProfileCard } from './components/ProfileCard';
import { ExperienceCard } from './components/ExperienceCard';
import { SkillsCard } from './components/SkillsCard';

export default function App(): React.ReactElement {
  return (
    <div className="w-full min-h-screen">
      <main 
        className="max-w-4xl mx-auto p-4 sm:p-8"
        aria-label="Developer portfolio"
      >
        <div className="flex flex-col lg:flex-row gap-8 mb-8">
          <div className="lg:w-3/5">
            <ProfileCard profile={profileData} />
          </div>
          <div className="lg:w-2/5">
            <SkillsCard skills={skills} />
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} />
          ))}
        </div>
      </main>
    </div>
  );
}