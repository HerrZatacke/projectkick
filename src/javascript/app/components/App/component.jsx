import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const App = props => (
  <Fragment>
    <button onClick={props.toggleExample}>
      { props.example ? 'true' : 'false' }
    </button>
  </Fragment>
);

App.propTypes = {
  example: PropTypes.bool.isRequired,
  toggleExample: PropTypes.func.isRequired,
};

App.defaultProps = {
};

export default App;
