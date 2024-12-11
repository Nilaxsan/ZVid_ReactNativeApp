import { create } from 'zustand';

const useCounterStore = create((set) => ({
  clickCount: 0,
  incrementCount: () => set((state) => ({ clickCount: state.clickCount + 1 })),
}));

export default useCounterStore;
