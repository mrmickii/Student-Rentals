import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setIsLoggedIn(true);
    
    // Ensure userData is defined and has the expected properties
    if (userData && userData.firstName && userData.lastName) {
      setUser(userData);
    } else {
      console.error('Invalid user data:', userData);
    }
  };
  
  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  console.log('Auth Context - User object:', user);

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const { isLoggedIn, user, login, logout } = useContext(AuthContext);
  console.log('User object:', user);
  return { isLoggedIn, user, login, logout };
};

