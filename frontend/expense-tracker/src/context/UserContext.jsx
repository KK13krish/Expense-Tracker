import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

  // Add useEffect to initialize user from localStorage
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            // Set user as authenticated when token exists
            setUser({ token: token, isAuthenticated: true });
        }
    }, []);

    //function to update user data
    const updateUser = (userData) => {
        setUser(userData);
    };

    //function to clear user data (eg: on logout)
    const clearUser = () => {
        setUser(null);
        localStorage.removeItem("token"); // Also remove token from localStorage
    };

    return (
        <UserContext.Provider
          value={{
            user,
            updateUser,
            clearUser,
          }}
        >
          {children}
        </UserContext.Provider>
            
    );
};

export default UserProvider;