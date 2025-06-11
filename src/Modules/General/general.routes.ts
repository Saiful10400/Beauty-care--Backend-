import { Router, Request, Response, NextFunction } from "express";
import generalController from "./general.controller";

const generalRouter = Router();

type tApi = {
  path: string;
  method: "get" | "post" | "put" | "delete";
  fn: (req: Request, res: Response, next: NextFunction) => void;
};

const apis: tApi[] = [
  { method: "put", path: "/update", fn: generalController.updateGeneral },
  { method: "get", path: "/get", fn: generalController.getGeneral },
];

apis.forEach((api) => {
  generalRouter[api.method](api.path, api.fn);
});

export default generalRouter;
// This code defines the routes for the general module in an Express application.
