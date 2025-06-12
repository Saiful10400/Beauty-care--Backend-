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
    path: "/get/:slug",
    fn: productcontroller.getAProductBySlug,
  },
];

apis.forEach((api) => {
  productRouter[api.method](api.path, api.fn);
});

export default productRouter;
// This code defines the routes for the general module in an Express application.
