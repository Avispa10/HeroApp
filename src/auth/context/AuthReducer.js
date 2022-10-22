import { types } from "../types/types";

/* const initialState = {
    logged: false,
} */

export const AuthReducer = (state = {}, action /*traido por el dispatch*/) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        logged: true,
        user: action.payload,
      };

    case types.logout:
      return state;

    default:
      return state;
  }
};
