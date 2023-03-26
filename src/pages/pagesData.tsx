import { routerType } from "../types/router.types";
import ProductList from "./ProductList/ProductList";
import IndividualProduct from "./IndividualProduct/IndividualProduct";
import Cart from "./Cart/Cart";
const pagesData: routerType[] = [
  {
    path: "",
    element: <ProductList />,
    title: "product list",
  },
  {
    path: "/:slug",
    element: <IndividualProduct />,
    title: "individual product",
  },
  {
    path: "/cart",
    element: <Cart />,
    title: "cart",
  },
  {
    path: "*",
    element: <div>Not Found 404</div>,
    title: "not found",
  },
];

export default pagesData;
