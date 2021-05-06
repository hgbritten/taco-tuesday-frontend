import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'react-bootstrap';


function LogoutButton() {
  const {
    isAuthenticated,
    logout,
  } = useAuth0();

  return isAuthenticated && (
    <Button variant="info" id="logoutButton" onClick={() => {
      logout({ returnTo: window.location.origin });
    }}>Log Out</Button>
  );
}

export default LogoutButton;
