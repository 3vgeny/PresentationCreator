import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { OutlineCard } from '@/types/projects.type';

type OutlineStore = {
  outlines: OutlineCard[]
  resetOutlines: () => void
  addOutline: (outline: OutlineCard) => void
  addMultipleOutLines: (outlines: OutlineCard[]) => void
}

const useScratchStore = create<OutlineStore>()(
  devtools(
    persist((set) => ({
      outlines: [],
      resetOutlines: () => set({ outlines: [] }),
      addOutline: (outline: OutlineCard) => set((state) => ({ outlines: [...state.outlines, outline] })),
      addMultipleOutLines: (outlines: OutlineCard[]) => set(() => ({ outlines: [...outlines] })),
    }),
    { name: 'outline' }
    )
  )
);

export default useScratchStore;