import { Router, Request, Response, NextFunction } from "express";
import brandController from "./brand.controller";

const brandRouter = Router();

type tApi = {
  path: string;
  method: "get" | "post" | "put" | "delete";
  fn: (req: Request, res: Response, next: NextFunction) => void;
};

const apis: tApi[] = [
  { method: "post", path: "/create", fn: brandController.createBrand },
  { method: "get", path: "/get", fn: brandController.getBrands },
  { method: "get", path: "/get/:id", fn: brandController.getBrandById },
  { method: "delete", path: "/delete/:id", fn: brandController.deleteBrand },
  { method: "put", path: "/update/:id", fn: brandController.updateBrand },
];

apis.forEach((api) => {
  brandRouter[api.method](api.path, api.fn);
});

export default brandRouter;
// This code defines the routes for the general module in an Express application.
