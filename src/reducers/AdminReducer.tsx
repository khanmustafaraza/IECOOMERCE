import { AdminState, AdminAction } from "@/types/admintypes";

const AdminReducer = (
  state: AdminState,
  action: AdminAction
): AdminState => {
  switch (action.type) {
    // ========== LOADING ==========
    case "SET_LOADING":
      return { ...state, isLoading: true };

    // ========== CATEGORY ==========
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
        isLoading: false,
      };

    // ========== PRODUCT ==========
    case "SET_PRODUCT_FIELD":
      return {
        ...state,
        productObj: {
          ...state.productObj,
          [action.payload.field]: action.payload.value,
        },
      };

    case "SET_PRODUCT_IMAGES":
      return {
        ...state,
        productObj: {
          ...state.productObj,
          images: action.payload,
        },
      };

    case "SET_PRODUCT_LIST":
      return {
        ...state,
        productList: action.payload,
        isLoading: false,
      };

    // ========== DEFAULT ==========
    default:
      return state;
  }
};

export default AdminReducer;