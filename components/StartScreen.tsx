
import React from 'react';
import { SparklesIcon } from './icons/SparklesIcon';

interface StartScreenProps {
  onStart: () => void;
}

export const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  return (
    <div className="flex-grow flex flex-col items-center justify-center text-center p-4">
      <SparklesIcon className="w-16 h-16 text-cyan-400 mb-4" />
      <h2 className="text-4xl md:text-5xl font-bold font-title text-white mb-2">Welcome, Adventurer</h2>
      <p className="text-lg text-slate-400 max-w-xl mb-8">
        Your story is unwritten. Every choice you make will be brought to life by Gemini, creating a unique adventure just for you.
      </p>
      <button
        onClick={onStart}
        className="px-8 py-4 text-lg font-bold text-white bg-cyan-600 rounded-lg shadow-lg hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-cyan-400 transition-all transform hover:scale-105"
      >
        Begin Your Adventure
      </button>
    </div>
  );
};
