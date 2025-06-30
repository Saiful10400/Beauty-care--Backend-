import { Router, Request, Response, NextFunction } from "express";
import productcontroller from "./product.controller";

const productRouter = Router();

type tApi = {
  path: string;
  method: "get" | "post" | "put" | "delete";
  fn: (req: Request, res: Response, next: NextFunction) => void;
};

const apis: tApi[] = [
  { method: "post", path: "/create", fn: productcontroller.createAProduct },
  {
    method: "get",
    path: "/get/:id",
    fn: productcontroller.getProductById,
  },
  {
    method: "get",
    path: "/get/slug/:slug",
    fn: productcontroller.getProductBySlug,
  },
  {
    method: "put",
    path: "/update/:id",
    fn: productcontroller.updateAProduct,
  },
  {
    method: "delete",
    path: "/delete/:id",
    fn: productcontroller.deleteAProduct,
  },
  {
    method: "get",
    path: "/get",
    fn: productcontroller.getProducts,
  },
];

apis.forEach((api) => {
  productRouter[api.method](api.path, api.fn);
});

export default productRouter;
// This code defines the routes for the general module in an Express application.
