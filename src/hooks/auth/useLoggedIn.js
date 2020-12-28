import { useSelector } from 'react-redux';
import { isLoggedInSelector } from 'redux-modules/session/selectors';

// pulls loggedIn status from redux store
const useLoggedIn = () => {
  const isLoggedIn = useSelector(isLoggedInSelector);

  return isLoggedIn;
};

export default useLoggedIn;
