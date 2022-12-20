import React from 'react';
import PropTypes from 'prop-types';

function App(props) {
  return (
    <>
      <h2>{ props.message }</h2>
      <button
        type="button"
        onClick={props.toggleExample}
      >
        { props.example ? 'true' : 'false' }
      </button>
      <br />
      <img src="/images/nsh.png" alt="a pixelized nerd" />
    </>
  );
}

App.propTypes = {
  example: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  toggleExample: PropTypes.func.isRequired,
};

App.defaultProps = {
};

export default App;
