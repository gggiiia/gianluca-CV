
import React, { useState } from 'react';
import { SendIcon } from './icons/SendIcon';

interface UserInputProps {
  onSendMessage: (text: string) => void;
  isLoading: boolean;
}

export const UserInput: React.FC<UserInputProps> = ({ onSendMessage, isLoading }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onSendMessage(text);
      setText('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e as unknown as React.FormEvent);
    }
  };

  return (
    <div className="mt-6">
      <form onSubmit={handleSubmit} className="flex items-center gap-2 p-2 bg-slate-800 border border-slate-700 rounded-lg shadow-lg">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="What do you do?"
          rows={1}
          className="w-full bg-transparent text-slate-200 placeholder-slate-500 resize-none focus:outline-none disabled:opacity-50"
          disabled={isLoading}
          autoFocus
        />
        <button
          type="submit"
          disabled={isLoading || !text.trim()}
          className="p-2 rounded-md bg-cyan-600 text-white hover:bg-cyan-500 disabled:bg-slate-600 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-cyan-400 transition-colors"
        >
          <SendIcon className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
};
