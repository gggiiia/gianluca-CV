
import { GoogleGenAI } from "@google/genai";
import { Author } from '../types';
import type { Message } from '../types';
import { INITIAL_PROMPT } from '../constants';

if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
const model = 'gemini-2.5-flash';

const buildGeminiHistory = (history: Message[]) => {
  return history.map(message => ({
    role: message.author === Author.USER ? 'user' : 'model',
    parts: [{ text: message.text }],
  }));
};

export const continueStory = async (history: Message[]): Promise<string> => {
  try {
    const contents = buildGeminiHistory(history);
    
    const response = await ai.models.generateContent({
      model,
      contents,
      config: {
        systemInstruction: INITIAL_PROMPT,
        temperature: 0.9,
        topK: 40,
        topP: 0.95,
      }
    });

    return response.text;
  } catch (error) {
    console.error("Error continuing story from Gemini:", error);
    if (error instanceof Error) {
      throw new Error(`Gemini API Error: ${error.message}`);
    }
    throw new Error("An unknown error occurred while communicating with the AI.");
  }
};

export const startStory = async (): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model,
      contents: "Begin the adventure.",
      config: {
        systemInstruction: INITIAL_PROMPT,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Error starting story from Gemini:", error);
    if (error instanceof Error) {
      throw new Error(`Gemini API Error: ${error.message}`);
    }
    throw new Error("An unknown error occurred while communicating with the AI.");
  }
};
