import React from 'react';
import { Profile } from '../types';
import { AtSymbolIcon, PhoneIcon, LocationMarkerIcon, BriefcaseIcon, MailIcon } from './icons';

interface ProfileCardProps {
  profile: Profile;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ profile }) => {
  return (
    <div
      className="bg-white p-6 rounded-3xl shadow-lg border border-gray-200 flex-shrink-0 h-full flex flex-col"
      aria-labelledby="profile-heading"
    >
      <div className="flex items-center space-x-6">
        <img
          src={profile.avatarUrl}
          alt={profile.name}
          className="w-24 h-24 rounded-full object-cover border-4 border-gray-100"
        />
        <div>
          <h1 id="profile-heading" className="text-2xl font-bold text-gray-800">{profile.name}</h1>
          <p className="text-gray-500">{profile.title}</p>
          <span className="mt-2 inline-block bg-yellow-200 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full">
            {profile.status}
          </span>
        </div>
      </div>

      <div className="mt-8 space-y-5 flex-grow">
        <div className="flex items-center text-gray-600">
          <AtSymbolIcon className="w-5 h-5 mr-4 text-gray-400" />
          <div>
            <p className="text-xs text-gray-400">Email:</p>
            <a href={`mailto:${profile.email}`} className="text-blue-600 hover:underline">{profile.email}</a>
          </div>
        </div>
        <div className="flex items-center text-gray-600">
          <PhoneIcon className="w-5 h-5 mr-4 text-gray-400" />
          <div>
            <p className="text-xs text-gray-400">Phone:</p>
            <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="text-blue-600 hover:underline">{profile.phone}</a>
          </div>
        </div>
        <div className="flex items-center text-gray-600">
          <LocationMarkerIcon className="w-5 h-5 mr-4 text-gray-400" />
          <div>
            <p className="text-xs text-gray-400">Location:</p>
            <p>{profile.location}</p>
          </div>
        </div>
        <div className="flex items-center text-gray-600">
          <BriefcaseIcon className="w-5 h-5 mr-4 text-gray-400" />
          <div>
            <p className="text-xs text-gray-400">Job:</p>
            <p>{profile.jobPref}</p>
          </div>
        </div>
      </div>
      
      <div className="mt-8">
        <a
          href={`mailto:${profile.email}`}
          className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl text-center flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors duration-300"
          aria-label="Contact me by email"
        >
          <MailIcon className="w-5 h-5" />
          <span>Contact Me</span>
        </a>
      </div>
    </div>
  );
};