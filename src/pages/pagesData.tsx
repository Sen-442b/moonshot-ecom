import { routerType } from "../types/router.types";
import ProductList from "./ProductList/ProductList";
import IndividualProduct from "./IndividualProduct/IndividualProduct";
const pagesData: routerType[] = [
  {
    path: "",
    element: <ProductList />,
    title: "product list",
  },
  {
    path: "/:id",
    element: <IndividualProduct />,
    title: "individual product",
  },
];

export default pagesData;
