import { create } from 'zustand';

const createApiExampleStore = create((set) => ({
  message: 'Click to load',
  load: async () => {
    const res = await fetch('/api');
    const { message } = await res.json();
    set(() => ({ message }));
  },
}));

export default createApiExampleStore;
