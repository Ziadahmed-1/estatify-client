import { create } from 'zustand';

const useMainStore = create(set => ({
  bears: 0,

  increasePopulation: () => set((state: any) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears: number) => set({ bears: newBears }),
}));

export default useMainStore;
