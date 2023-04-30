import { create } from 'zustand';

export interface MesssageState {
  message: string
}

const useApiExampleStore = create<MesssageState>((set) => {

  // make an initial API call
  (async () => {
    const res = await fetch('/api');
    const { message } = await res.json();
    set(() => ({ message }));
  })();

  return ({
    message: 'Loading...',
  });
});

export default useApiExampleStore;
