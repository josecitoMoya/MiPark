import React, { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const initialState = {
  name: "",
  lastname: "",
  email: "",
  logUser: () => null,
  logOut: () => null,
};

export const AuthContext = createContext(initialState);

const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    name: "",
    lastname: "",
    email: "",
    isAutenticated: false,
  });

  const logUser = (user) => {
    setAuth({
      name: user.name,
      lastname: user.lastname,
      email: user.email,
      isAutenticated: true,
    });
  };

  const logOut = () => {
    setAuth({
      name: "",
      lastname: "",
      email: "",
      isAutenticated: false,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        name: auth.name,
        lastname: auth.lastname,
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
