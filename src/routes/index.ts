import { Router } from "express";
import generalRouter from "../Modules/General/general.routes";
import brandRouter from "../Modules/Brand/brand.routes";
import categoryRouter from "../Modules/Category/catogory.routes";

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
];

moduleRoutes.forEach((item) => routes.use(item.path, item.route));

export default routes;
