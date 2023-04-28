import { useDispatch, useSelector } from 'react-redux';

const useApp = () => {
  const dispatch = useDispatch();

  const { example, message } = useSelector((state) => ({
    example: state.example,
    message: state.message,
  }));

  const toggleExample = () => {
    dispatch({
      type: 'TOGGLE_EXAMPLE',
    });
  };

  return {
    example,
    message,
    toggleExample,
  };
};

export default useApp;
