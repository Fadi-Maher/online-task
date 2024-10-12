 "use client"
 import React, { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem('token'));
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    // console.log(token)
    if (token) {
       setUser({ token });
      router.push('/'); 
    } else {
      router.push('/pages/login'); 
    }
  }, [router]);

    const loginUser = (token) => {
    localStorage.setItem('token', token);
    setUser({ token });
    router.push('/home');  
  };

  const logoutUser = () => {
    localStorage.removeItem('token');
    setUser(null);
    router.push('/login');  
  };

  return (
    <UserContext.Provider value={{ user, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};
