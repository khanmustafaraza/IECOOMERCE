export type AuthState = {
  registerObj: {
    name: string;
    email: string;
    password: string;
  };
  loginObj: {
    email: "";
    password: "";
  };
  isLoading: boolean;
  isError: boolean;
  message: string;
};

export type AuthAction =
  | { type: "SET_LOADING" }
  | { type: "LOGIN_SUCCESS"; payload: string }
  | { type: "HANDLE_LOGIN_CHANGE"; payload: { name: string; value: string } }
  | { type: "HANDLE_REGISTER_CHANGE"; payload: { name: string; value: string } }
  | { type: "REGISTER_SUCCESS"; payload: string }
  | { type: "REGISTER_ERROR"; payload: string }
  | { type: "RESET_FORM" };

export type AuthContextType = {
  state: AuthState;
  handleRegisterChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleLoginChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleLoginSubmit: (e: React.SubmitEvent<HTMLFormElement>) => Promise<void>;
  handleRegisterSubmit: (
    e: React.SubmitEvent<HTMLFormElement>,
  ) => Promise<void>;
  //   dispatch: React.Dispatch<AuthAction>;
};
