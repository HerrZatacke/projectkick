import { create } from 'zustand';

const useExampleStore = create((set) => ({
  onoff: false,
  toggle: () => set((state) => ({ onoff: !state.onoff })),
}));

export default useExampleStore;
