export const initialLoginState = {
  isLoading: true,
  name: null,
  email: null,
  token: null,
  error: null,
};

export type InitialLoginStateType = {
  isLoading: boolean;
  name: string | null;
  token: string | null;
  email: string | null;
  error: string | null;
};

export enum Types {
  SignIn = "SIGN_IN",
  SignUp = "SIGN_Up",
  SignOut = "SIGN_OUT",
  Error = "ERROR",
  RetrieveToken = "RETRIEVE_TOKEN",
}

type AuthType = {
  isLoading: boolean;
  name: string | null;
  token: string | null;
  email: string | null;
  error: string | null;
};

type AuthPayload = {
  [Types.SignIn]: {
    email: string;
    token: string;
  };
  [Types.SignUp]: {
    email: string;
    token: string;
  };
  [Types.SignOut]: {
    token: null;
    email: "";
  };
  [Types.RetrieveToken]: {
    token: string;
  };
  [Types.Error]: {
    error: object;
  };
};
export type AuthActions = ActionMap<
  AuthPayload
>[keyof ActionMap<AuthPayload>];

export const authReducer = (
  state: AuthType,
  action: AuthActions
) => {
  switch (action.type) {
    case Types.SignIn:
    case Types.SignUp:
      return {
        token: action.payload.token,
        email: action.payload.email,
      };
    case Types.RetrieveToken:
      return {
        token: action.payload.token,
      };
    case Types.SignOut:
      return { token: "", email: "" };
    case Types.Error:
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
