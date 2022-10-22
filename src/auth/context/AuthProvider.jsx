import React, { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { AuthReducer } from "./AuthReducer";
import { types } from "../types/types";

const initialState = {
  logged: false,
};

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(AuthReducer, {});

  const loginFn = (name) => {
    const action = {
      type: types.login, // el authreducer dependiendo del type, la accion que realizara.
      payload: {
        id: "ABC",
        name: name,
      },
    };
    //console.log(action);
    dispatch(action);
  };

  return (
    <AuthContext.Provider value={{ authState, login: loginFn }}>
      {children}
    </AuthContext.Provider>
  );
};
