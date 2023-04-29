import { create } from 'zustand';

const createExampleStore = create((set) => ({
  onoff: false,
  toggle: () => set((state) => ({ onoff: !state.onoff })),
}));

export default createExampleStore;
