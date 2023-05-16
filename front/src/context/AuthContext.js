import React, { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  logUser: () => null,
  logOut: () => null,
};

export const AuthContext = createContext(initialState);

const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    firstName: "",
    lastName: "",
    email: "",
    isAutenticated: false,
  });

  const logUser = (user) => {
    setAuth({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      isAutenticated: true,
    });
  };

  const logOut = () => {
    setAuth({
      firstName: "",
      lastName: "",
      email: "",
      isAutenticated: false,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        firstName: auth.firstName,
        lastName: auth.lastName,
        email: auth.email,
        isAutenticated: auth.isAutenticated,
        logUser,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
