import { Theme } from '@/types/slide.type';

export const themes: Theme[] = [
  {
    name: 'Default',
    fontFamily: 'Arial',
    fontColor: '#000000',
    backgroundColor: '#ffffff',
    slideBackgroundColor: '#ffffff',
    accentColor: '#3b82f6',
    sidebarColor: '#ffffff',
    navbarColor: '#ffffff',
    type: 'light',
  },
  {
    name: 'Dark Elegance',
    fontFamily: 'Arial',
    fontColor: '#ffffff',
    backgroundColor: '#1a1a1a',
    slideBackgroundColor: '#2c2c2c',
    accentColor: '#ffd700',
    gradientBackground: 'linear-gradient(to right, #000000, #000000)',
    sidebarColor: '#2c2c2c',
    navbarColor: '#1a1a1a',
    type: 'dark',
  },
  {
    name: 'light',
    fontFamily: 'Arial',
    fontColor: '#000000',
    backgroundColor: '#ffffff',
    slideBackgroundColor: '#ffffff',
    accentColor: '#ff0000',
    gradientBackground: 'linear-gradient(to right, #ffffff, #ffffff)',
    sidebarColor: '#ffffff',
    navbarColor: '#ffffff',
    type: 'light',
  },
  {
    name: 'dark',
    fontFamily: 'Arial',
    fontColor: '#ffffff',
    backgroundColor: '#000000',
    slideBackgroundColor: '#000000',
    accentColor: '#ff0000',
    gradientBackground: 'linear-gradient(to right, #000000, #000000)',
    sidebarColor: '#000000',
    navbarColor: '#000000',
    type: 'dark',
  },
];

export const CreatePageCard = [
  {
    title: 'Use a',
    highlightedText: 'Template',
    description: 'Напишите запрос и оставьте все остальное на наше усмотрение',
    type: 'template',
  },
  {
    title: 'Generate with',
    highlightedText: 'Creative AI',
    description: 'Напишите запрос и оставьте все остальное на наше усмотрение',
    type: 'creative-ai',
    highlight: true,
  },
  {
    title: 'Start from',
    highlightedText: 'Scratch',
    description: 'Напишите запрос и оставьте все остальное на наше усмотрение',
    type: 'create-scratch',
  },
];