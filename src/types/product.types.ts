export type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
};

export type SearchInputProps = {
  handleSearchInput: Function;
};
