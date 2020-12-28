import React, { FunctionComponent } from 'react';
import { Button } from '@material-ui/core';
import useLogout from 'hooks/auth/useLogout';

const SignOut: FunctionComponent = (props) => {
  const logout = useLogout();
  return (
    <Button onClick={logout} variant="contained" color="primary" {...props}>
      Sign Out
    </Button>
  );
};

export default SignOut;
