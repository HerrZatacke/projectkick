import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/components/App';
import '../scss/index.scss';

document.addEventListener('DOMContentLoaded', () => {
  const appRoot = document.getElementById('app');
  if (!appRoot) {
    return;
  }

  const root = createRoot(appRoot);

  root.render(<App />);
});
