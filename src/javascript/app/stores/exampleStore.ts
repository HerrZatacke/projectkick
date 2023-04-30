import { create } from 'zustand';

export interface ToggleState {
  onoff: boolean,
  toggle: () => void,
}

const useExampleStore = create<ToggleState>((set) => ({
  onoff: false,
  toggle: () => set((state) => ({ onoff: !state.onoff })),
}));

export default useExampleStore;
