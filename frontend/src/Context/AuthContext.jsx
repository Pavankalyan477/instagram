import { createContext, useReducer } from "react";
import { AuthReducer } from "./AuthReducer";

const INITIAL_STATE = {
  user: null,
  isFetching: false,
  err: false,
};
export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  console.log("state:", state.user);

  return (
    <AuthContext.Provider
      value={{
        user: state.username,
        isFetching: state.isFetching,
        err: state.err,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
