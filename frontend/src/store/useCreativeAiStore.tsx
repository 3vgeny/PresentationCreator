import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { OutlineCard } from '@/types/projects.type';

type CreativeAiState = {
  outlines: OutlineCard[] | [];
  addMultipleOutLines: (outlines: OutlineCard[]) => void;
  addOutline: (outline: OutlineCard) => void;
  currentAiPrompt: string;
  setCurrentAiPrompt: (prompt: string) => void;
  resetOutlines: () => void;
};

const useCreateAIStore = create<CreativeAiState>()(
  persist((set) => ({
    outlines: [],
    addMultipleOutLines: (outlines: OutlineCard[]) => set(() => ({ outlines: [...outlines] })),
    addOutline: (outline: OutlineCard) => set((state) => ({ outlines: [...state.outlines, outline] })),
    currentAiPrompt: '',
    setCurrentAiPrompt: (prompt: string) => set({ currentAiPrompt: prompt }),
    resetOutlines: () => set({ outlines: [] }),
  }), { name: 'create-ai' })
);

export default useCreateAIStore;