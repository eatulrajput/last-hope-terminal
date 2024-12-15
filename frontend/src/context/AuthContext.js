// src/context/AuthContext.js

import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({ user: null, loading: true });
  const navigate = useNavigate();

  const login = async (credentials) => {
    // Replace this with actual login logic (e.g., API call)
    try {
      const user = await fakeLoginAPI(credentials); // Replace with actual login logic
      setAuthState({ user, loading: false });
      navigate('/dashboard'); // Redirect to dashboard on success
    } catch (error) {
      console.error('Authentication failed', error);
      setAuthState({ user: null, loading: false });
    }
  };

  return (
    <AuthContext.Provider value={{ ...authState, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
