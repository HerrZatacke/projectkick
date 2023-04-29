import { create } from 'zustand';
import createExampleStore from './exampleStore.js';
import createApiExampleStore from './apiExampleStore.js';

const useBoundStore = create((...a) => ({
  ...createExampleStore(...a),
  ...createApiExampleStore(...a),
}));

export default useBoundStore;
