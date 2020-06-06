import React, { createContext, useReducer } from "react";
import { loginReducer } from "../reducers/loginReducer";

export const LoginContext = createContext();

export const LoginProvider = props => {

  const [data, dispatch] = useReducer(loginReducer, [
    {
      login:JSON.parse(window.localStorage.getItem('login')).login,
      token:JSON.parse(window.localStorage.getItem('login')).token
    }
  ]);

  return (
    <LoginContext.Provider value={{ data, dispatch }}>
      {props.children}
    </LoginContext.Provider>
  );
};
