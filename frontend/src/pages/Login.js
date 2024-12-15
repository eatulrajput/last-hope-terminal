// src/pages/Login.js

import React from 'react';
import { useAuth } from '../hooks/useAuth';

function Login() {
  const { loginWithRedirect } = useAuth();

  const handleLogin = async () => {
    try {
      await loginWithRedirect();
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
}

export default Login;
