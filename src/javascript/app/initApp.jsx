import React from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import App from './components/App/index.jsx';
import getStore from './store/index.js';

const initApp = () => {
  const appRoot = document.getElementById('app');
  if (!appRoot) {
    return;
  }

  const root = createRoot(appRoot);

  root.render(<Provider store={getStore()}><App /></Provider>);
};

export default initApp;
