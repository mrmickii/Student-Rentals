import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setIsLoggedIn(true);
    
    // Ensure userData is defined
    if (userData) {
      const { first_name, last_name, /* other user properties */ } = userData;

      // Check if the required properties are present
      if (first_name && last_name) {
        setUser({ firstName: first_name, lastName: last_name, /* other user properties */ });
      } else {
        console.error('Invalid user data:', userData);
      }
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
  return { isLoggedIn, user, login, logout };
};
