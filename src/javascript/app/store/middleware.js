const middleware = (store) => {

  fetch('/api')
    .then((res) => res.json())
    .catch((error) => (
      error
    ))
    .then(({ message }) => {
      store.dispatch({
        type: 'SET_MESSAGE',
        payload: message,
      });
    });

  return (next) => (action) => {

    switch (action.type) {
      default:
        break;
    }

    return next(action);
  };
};

export default middleware;
