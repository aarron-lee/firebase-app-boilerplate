import React from 'react';
import useCurrentUser from 'hooks/auth/useCurrentUser';
import { css } from 'emotion';

const profilePageStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function ProfilePage() {
  const currentUser = useCurrentUser();

  return (
    <div className={profilePageStyles}>
      <p>Display Name: {currentUser.displayName}</p>
      <p>Email: {currentUser.email}</p>
    </div>
  );
}

export default ProfilePage;
