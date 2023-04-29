import { create } from 'zustand';

const useApiExampleStore = create((set) => {

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
