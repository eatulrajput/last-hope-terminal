// src/hooks/useAuth.js

import { useAuth0 } from '@auth0/auth0-react';

export const useAuth = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  return { loginWithRedirect, logout, user, isAuthenticated };
};
