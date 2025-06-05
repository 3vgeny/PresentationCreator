import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { OutlineCard } from '@/types/projects.type';

type page = 'create' | 'creative-ai' | 'create-scratch'

type Prompt = {
  id: string;
  createdAt: string;
  title: string;
  outlines: OutlineCard[] | []
}

type PromptStore = {
  page: page
  setPage: (page: page) => void
  prompts: Prompt[] | []
  addPrompt: (prompt: Prompt) => void
  removePrompt: (id: string) => void
}

const usePropmtStore = create<PromptStore>()(
  devtools(
    persist((set) => ({
      page: 'create',
      setPage: (page: page) => set({ page }),
      prompts: [],
      addPrompt: (prompt: Prompt) => set((state) => ({ prompts: [prompt, ...state.prompts ] })),
      removePrompt: (id: string) => set((state) => ({ prompts: state.prompts.filter((prompt) => prompt.id !== id) })),
    }),
    { name: 'prompts' }
    )
  )
);

export default usePropmtStore;