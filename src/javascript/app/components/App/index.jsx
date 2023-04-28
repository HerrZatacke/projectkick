import React from 'react';
import useApp from './useApp.js';
import './index.scss';

function App() {
  const {
    example,
    message,
    toggleExample,
  } = useApp();

  return (
    <>
      <h2>{ message }</h2>
      <button
        type="button"
        onClick={toggleExample}
      >
        { example ? 'true' : 'false' }
      </button>
      <br />
      <img src="/images/nsh.png" alt="a pixelized nerd" />
    </>
  );
}

export default App;
