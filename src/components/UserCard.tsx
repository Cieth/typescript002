import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
const UserCard = () => {
  const { user, logout } = useAuth0();

  return (
    <div>
      <div>
        <img src={user?.picture} loading='lazy' alt='' />
      </div>
      <div>
        <p>Ha iniciado sesión correctamente, estimado {user?.name} </p>
      </div>

      <button onClick={() => logout()}>Log Out</button>
    </div>
  );
};

export default UserCard;
