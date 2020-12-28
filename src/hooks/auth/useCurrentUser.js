import { useSelector } from 'react-redux';
import { currentUserSelector } from 'redux-modules/session/selectors';

// pulls currentUser from redux store
const useCurrentUser = () => {
  const uid = useSelector(currentUserSelector);

  return uid;
};

export default useCurrentUser;
