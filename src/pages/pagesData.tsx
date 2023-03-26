import { routerType } from "../types/router.types";
import ProductList from "./ProductList/ProductList";

const pagesData: routerType[] = [
  {
    path: "",
    element: <ProductList />,
    title: "product list",
  },
];

export default pagesData;
