const messageReducer = (value = '', action = {}) => {
  switch (action.type) {
    case 'SET_MESSAGE':
      return action.payload;
    default:
      return value;
  }
};

export default messageReducer;
