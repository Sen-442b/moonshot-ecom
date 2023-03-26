export type Product = {
  id: number;
  slug: string;
  name: string;
  price: number;
  description: string;
  image: string;
};

export type SearchInputProps = {
  handleSearchInput: Function;
};

export type ProductComponentProps = {
  product: Product;
};

export type ProductListResponse = {
  status: number;
  products: Product[];
};
