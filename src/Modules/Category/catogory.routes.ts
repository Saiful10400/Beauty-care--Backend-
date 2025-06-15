import { Router, Request, Response, NextFunction } from "express";
import categoryController from "./category.controller";

const categoryRouter = Router();

type tApi = {
  path: string;
  method: "get" | "post" | "put" | "delete";
  fn: (req: Request, res: Response, next: NextFunction) => void;
};

const apis: tApi[] = [
  { method: "post", path: "/create", fn: categoryController.createCategory },
  { method: "get", path: "/get", fn: categoryController.getAllCategories },
  {
    method: "delete",
    path: "/delete/:id",
    fn: categoryController.deleteCategory,
  },
];

apis.forEach((api) => {
  categoryRouter[api.method](api.path, api.fn);
});

export default categoryRouter;
// This code defines the routes for the general module in an Express application.
