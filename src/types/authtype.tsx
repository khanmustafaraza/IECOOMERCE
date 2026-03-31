export type AuthState = {
  registerObj: {
    name: string;
    email: string;
    password: string;
  };
  isLoading: boolean;
  isError: boolean;
  message: string;
};

export type AuthAction =
  | { type: "SET_LOADING" }
  | { type: "HANDLE_CHANGE"; payload: { name: string; value: string } }
  | { type: "REGISTER_SUCCESS"; payload: string }
  | { type: "REGISTER_ERROR"; payload: string }
  | { type: "RESET_FORM" };

export type AuthContextType = {
  state: AuthState;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.SubmitEvent<HTMLFormElement>) => Promise<void>;
  //   dispatch: React.Dispatch<AuthAction>;
};
