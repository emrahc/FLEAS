import React, {
  createContext,
  useReducer,
  Dispatch,
} from "react";
import {
  authReducer,
  initialLoginState,
  InitialLoginStateType,
  AuthActions,
} from "../components/authentication/authReducer";
import {
  signup,
  signin,
  signout,
  retrieveToken,
} from "../components/authentication/authActions";
const AppContext = createContext<{
  state: InitialLoginStateType;
  dispatch: Dispatch<AuthActions>;
}>({
  state: initialLoginState,
  dispatch: () => null,
});

const mainReducer = (
  initialLoginState: InitialLoginStateType,
  action: AuthActions
) => ({
  auth: authReducer(initialLoginState, action),
});

const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(
    mainReducer,
    { signin, signup, signout, retrieveToken },
    initialLoginState
  );

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
