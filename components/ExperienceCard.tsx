import React from 'react';
import {Experience} from '../types';

interface ExperienceCardProps {
    experience: Experience;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({experience}) => {
    return (
        <div
            className="bg-white p-5 rounded-3xl shadow-lg border border-gray-200 w-full flex-shrink-0 flex flex-col transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-2"
            aria-labelledby={`experience-heading-${experience.company}`}
        >
            <div
                className="w-full h-40 rounded-2xl flex items-center justify-center mb-4 flex-shrink-0 overflow-hidden p-4 shadow-lg"
                style={{backgroundColor: experience.logoBgColor}}
            >
                <img src={experience.logoUrl} alt={`${experience.company} logo`}/>
            </div>

            <div className="flex-grow flex flex-col">
                <div className="flex-grow">
                    <h2 id={`experience-heading-${experience.company}`}
                        className="text-xl font-bold text-gray-800">{experience.company}</h2>
                    <p className="text-gray-600 mt-2 text-sm">{experience.description}</p>
                </div>

                <div className="mt-4 flex justify-between items-end">
                    <div className="flex -space-x-2">
                        {experience.technologies.map((tech, index) => (
                            <div key={index} title={tech.name}
                                 className="w-8 h-8 rounded-full bg-white border-2 border-whitesmoke flex items-center justify-center shadow-sm p-1">
                                <img src={tech.icon} alt={`${tech.name} logo`}
                                     className="w-full h-full object-contain"/>
                            </div>
                        ))}
                    </div>
                    <a href={experience.seeMoreUrl} target="_blank">
                        <button
                            className="bg-yellow-300/80 text-yellow-900 font-bold text-xs px-4 py-2 rounded-full hover:bg-yellow-300">
                            SEE MORE
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};