import React from 'react';
import useExampleStore, { ToggleState } from '../../stores/exampleStore';
import useApiExampleStore, { MesssageState } from '../../stores/apiExampleStore';
import './index.scss';

function App() {
  const onoff = useExampleStore((state: ToggleState) => state.onoff);
  const toggle = useExampleStore((state: ToggleState) => state.toggle);
  const message = useApiExampleStore((state: MesssageState) => state.message);

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
