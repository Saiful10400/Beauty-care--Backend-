import { Router, Request, Response, NextFunction } from "express";
import bannerController from "./banner.controller";

const bannerRoute = Router();

type tApi = {
  path: string;
  method: "get" | "post" | "put" | "delete";
  fn: (req: Request, res: Response, next: NextFunction) => void;
};

const apis: tApi[] = [
  { method: "post", path: "/create", fn: bannerController.createBanner },
  { method: "get", path: "/get", fn: bannerController.createBanner },
  { method: "put", path: "/update/:id", fn: bannerController.updateBanner },
];

apis.forEach((api) => {
  bannerRoute[api.method](api.path, api.fn);
});

export default bannerRoute;
// This code defines the routes for the general module in an Express application.
