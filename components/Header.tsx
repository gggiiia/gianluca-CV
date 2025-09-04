
import React from 'react';
import { SparklesIcon } from './icons/SparklesIcon';

interface HeaderProps {
  onNewGame: () => void;
  hasStarted: boolean;
}

export const Header: React.FC<HeaderProps> = ({ onNewGame, hasStarted }) => {
  return (
    <header className="bg-slate-900/80 backdrop-blur-sm sticky top-0 z-10 p-4 border-b border-slate-700/50">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3">
          <SparklesIcon className="w-8 h-8 text-cyan-400" />
          <h1 className="text-xl md:text-2xl font-bold font-title text-white tracking-wider">
            Gemini RPG
          </h1>
        </div>
        {hasStarted && (
            <button
            onClick={onNewGame}
            className="px-4 py-2 text-sm font-bold text-white bg-cyan-600 rounded-md hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-cyan-400 transition-colors"
            >
            New Game
            </button>
        )}
      </div>
    </header>
  );
};
