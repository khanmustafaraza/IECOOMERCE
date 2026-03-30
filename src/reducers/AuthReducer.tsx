import { AuthAction, AuthState } from "@/types/authtype";

const AuthReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
        isError: false,
        message: "",
      };

    case "HANDLE_CHANGE":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };

    case "REGISTER_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: action.payload,
      };

    case "REGISTER_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: action.payload,
      };

    case "RESET_FORM":
      return {
        ...state,
        name: "",
        email: "",
        password: "",
        isLoading: false,
        isError: false,
        message: "",
      };

    default:
      return state;
  }
};

export default AuthReducer;
