import React from 'react';

export interface Profile {
  name: string;
  title: string;
  avatarUrl: string;
  status: string;
  email: string;
  phone: string;
  location: string;
  jobPref: string;
}

export interface Skill {
  name: string;
  icon: string;
}

export interface Experience {
  company: string;
  description: string;
  logoUrl: string;
  logoBgColor: string;
  technologies: Skill[];
  seeMoreUrl: string;
}

// FIX: Add Author and Message types for the RPG feature.
export enum Author {
  USER = 'user',
  GEMINI = 'gemini',
}

export interface Message {
  author: Author;
  text: string;
}
