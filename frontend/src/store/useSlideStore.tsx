import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { themes } from '@/lib/constants';
import { ProjectT } from '@/types/projects.type';
import { Slide, Theme } from '@/types/slide.type';

interface SlideStore {
  slides: Slide[],
  setSlides: (slides: Slide[]) => void
  project: ProjectT | null
  setProject: (id: ProjectT) => void
  currentThema: Theme
  setCurrentThema: (theme: Theme) => void
}

export const useSlideStore = create(
  persist<SlideStore>((set) => ({
    project: null,
    slides: [],
    setSlides: (slides: Slide[]) => set({ slides }),
    setProject: (project: ProjectT) => set({ project }),
    currentThema: themes[0],
    setCurrentThema: (theme: Theme) => set({ currentThema: theme }),
  }), {
    name: 'slides-storage',
  })
);