 "use client"
 import React, { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem('authToken'));
  const router = useRouter();

  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    // console.log(token)
    if (authToken) {
       setUser({ authToken });
      router.push('/'); 
    } else {
      router.push('/login'); 
    }
  }, [router]);

    const loginUser = (authToken) => {
    localStorage.setItem('authToken', authToken);
    setUser({ token });
    router.push('/home');  
  };

  const logoutUser = () => {
    localStorage.removeItem('authToken');
    setUser(null);
    router.push('/login');  
  };

  return (
    <UserContext.Provider value={{ user, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};
