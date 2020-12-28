import sessionSlice from 'redux-modules/session/sessionSlice';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

const { routines } = sessionSlice;

function useLogin() {
  const dispatch = useDispatch();

  const login = useCallback(
    ({ email, password }) => {
      dispatch(routines.login.trigger({ email, password }));
    },
    [dispatch]
  );

  return login;
}

export default useLogin;
