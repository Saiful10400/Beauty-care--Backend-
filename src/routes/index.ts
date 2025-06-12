import { Router } from "express";
import generalRouter from "../Modules/General/general.routes";
import brandRouter from "../Modules/Brand/brand.routes";
import categoryRouter from "../Modules/Category/catogory.routes";
import productRouter from "../Modules/Product/product.routes";
import orderRouter from "../Modules/Order/order.routes";

const routes = Router();

const moduleRoutes = [
  {
    path: "/general",
    route: generalRouter,
  },
  {
    path: "/brand",
    route: brandRouter,
  },
  {
    path: "/category",
    route: categoryRouter,
  },
  {
    path: "/product",
    route: productRouter,
  },
  {
    path: "/order",
    route: orderRouter,
  },
];

moduleRoutes.forEach((item) => routes.use(item.path, item.route));

export default routes;
