import { AdminAction, AdminState } from "@/types/admintypes";

const AdminReducer = (state: AdminState, action: AdminAction): AdminState => {
  switch (action.type) {
    case "HANDLE_CATEGORY_CHANGE":
      return {
        ...state,
        catObj: {
          ...state.catObj,
          [action.payload.name]: action.payload.value,
        },
      };
    case "SET_CATEGORY_LIST":
      return {
        ...state,
        categoryList: action.payload,
      };
    default:
      return state;
  }
};

export default AdminReducer;
