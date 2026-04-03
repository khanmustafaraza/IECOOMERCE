export type CatObject = {
  _id: string;
  name: string;
  subname: string;
  createdAt: string;
};

export type AdminState = {
  catObj: {
    name: string;
    subName: string;
  };
  categoryList: CatObject[];
  isLoading: boolean;
};

export type AdminAction =
  | { type: "SET_LOADING" }
  | {
      type: "HANDLE_CATEGORY_CHANGE";
      payload: {
        name: string;
        value: string;
      };
    }
  | { type: "HANDLE_CATEGORY_SUBMIT" }
  | {
      type: "SET_CATEGORY_LIST";
      payload: CatObject[];
    };

export type AdminContexType = {
  state: AdminState;
  handleCategoryChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCategorySubmit: (
    e: React.SubmitEvent<HTMLFormElement>,
  ) => Promise<void>;
  getAllCategory: () => Promise<void>;
  handleCategoryUpdateSubmit: (
    e: React.SubmitEvent<HTMLFormElement>,
    id: string,
  ) => Promise<void>;
};
