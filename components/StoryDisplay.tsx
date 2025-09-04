
import React from 'react';
import { Author, type Message } from '../types';

interface StoryDisplayProps {
  story: Message[];
  isLoading: boolean;
  error: string | null;
}

const LoadingIndicator: React.FC = () => (
  <div className="flex items-center gap-2 p-4">
    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse [animation-delay:-0.3s]"></div>
    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse [animation-delay:-0.15s]"></div>
    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
  </div>
);

export const StoryDisplay: React.FC<StoryDisplayProps> = ({ story, isLoading, error }) => {
  return (
    <div className="flex-grow overflow-y-auto pr-2 -mr-2 space-y-6">
      {story.map((message, index) => (
        <div key={index} className={`flex flex-col ${message.author === Author.USER ? 'items-end' : 'items-start'}`}>
          <div className={`max-w-prose rounded-lg p-4 text-base ${
            message.author === Author.GEMINI
              ? 'bg-slate-800 text-slate-200 prose prose-invert prose-p:text-slate-200'
              : 'bg-cyan-800/50 text-cyan-100 italic'
          }`}>
            {message.text.split('\n').map((paragraph, i) => (
              <p key={i} className="mb-4 last:mb-0">{paragraph}</p>
            ))}
          </div>
        </div>
      ))}
      {isLoading && (
        <div className="flex flex-col items-start">
            <div className="max-w-prose rounded-lg p-4 bg-slate-800">
                <LoadingIndicator />
            </div>
        </div>
      )}
      {error && (
        <div className="bg-red-900/50 border border-red-700 text-red-200 p-4 rounded-lg">
          <p className="font-bold">An Error Occurred</p>
          <p className="text-sm">{error}</p>
        </div>
      )}
    </div>
  );
};
