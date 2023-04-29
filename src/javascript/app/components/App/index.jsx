import React from 'react';
import useExampleStore from '../../stores/exampleStore';
import useApiExampleStore from '../../stores/apiExampleStore';
import './index.scss';

function App() {
  const onoff = useExampleStore((state) => state.onoff);
  const toggle = useExampleStore((state) => state.toggle);
  const message = useApiExampleStore((state) => state.message);

  return (
    <div className="app">
      <h2>{ message }</h2>
      <button
        type="button"
        onClick={toggle}
      >
        { onoff ? 'true' : 'false' }
      </button>
      <br />
      <img src="/images/nsh.png" alt="a pixelized nerd" />
    </div>
  );
}

export default App;
