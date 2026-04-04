export type CatObject = {
  _id: string;
  name: string;
  subname: string;
  createdAt: string;
};

export type ProductType = {
  _id?: string; // optional if coming from DB
  name: string;
  sku: string;
  category: string;
  subCategory: string;
  price: string;
  discountPrice: string;
  stock: string;
  description: string;
  status: string;
  images: File[] ; // can be File (upload) or string (URL from DB)
};

export type AdminState = {
  catObj: {
    name: string;
    subName: string;
  };
  categoryList: CatObject[];
  productList: ProductType[];
  productObj: ProductType;
  isLoading: boolean;
};

export type AdminAction =
  | { type: "SET_LOADING" }
  | {
      type: "HANDLE_CATEGORY_CHANGE";
      payload: { name: string; value: string };
    }
  | { type: "HANDLE_CATEGORY_SUBMIT" }
  | { type: "SET_CATEGORY_LIST"; payload: CatObject[] }
  | {
      type: "SET_PRODUCT_FIELD";
      payload: { field: keyof ProductType; value: any };
    }
  | { type: "SET_PRODUCT_IMAGES"; payload: File[] }
  | { type: "SET_PRODUCT_LIST"; payload: ProductType[] };

export type AdminContextType = {
  state: AdminState;

  // ===== Category =====
  handleCategoryChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCategorySubmit: (
    e: React.FormEvent<HTMLFormElement>
  ) => Promise<void>;
  getAllCategory: () => Promise<void>;
  handleCategoryUpdateSubmit: (
    e: React.FormEvent<HTMLFormElement>,
    id: string
  ) => Promise<void>;

  // ===== Product =====
  handleProductChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;

  handleProductImages: (files: FileList) => void;

  handleProductSubmit: () => Promise<void>;
  getAllProducts: () => Promise<void>; // corrected to match context
};