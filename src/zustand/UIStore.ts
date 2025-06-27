import { create } from 'zustand';

type UIStore = {
  width: number;
  isMobile: boolean;
  setWidth: (width: number) => void;
};

export const useUIStore = create<UIStore>(set => ({
  width: typeof window !== 'undefined' ? window.innerWidth : 0,
  isMobile: typeof window !== 'undefined' ? window.innerWidth < 768 : true,
  setWidth: width => set({ width, isMobile: width < 768 }),
}));
