import { v4 as uuid } from 'uuid';

export const projects = [
  {
    id: uuid(),
    title: 'Project 1',
    createdAt: new Date(),
    isDeleted: false,
    slides: [],
    thumbnail: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fvenngage.com%2Fblog%2Fpresentation-design%2F&psig=AOvVaw0iWjKS-JGwSQMaYnEl5lkX&ust=1748416793710000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDSp6KOw40DFQAAAAAdAAAAABAE',
    themeName: 'Default',
  },
  {
    id: uuid(),
    title: 'Project 2',
    createdAt: new Date(),
    isDeleted: false,
    slides: [],
    thumbnail: '',
    themeName: 'Default',
  },
  {
    id: uuid(),
    title: 'Project 3',
    createdAt: new Date(),
    isDeleted: false,
    slides: [],
    thumbnail: '',
    themeName: 'Default',
  },
];