import { Router, Request, Response, NextFunction } from "express";
import offercontroller from "./offer.controller";

const comboOfferRoute = Router();

type tApi = {
  path: string;
  method: "get" | "post" | "put" | "delete";
  fn: (req: Request, res: Response, next: NextFunction) => void;
};

const apis: tApi[] = [
  { method: "post", path: "/create", fn: offercontroller.createComboOffer },

  {
    method: "delete",
    path: "/delete/:id",
    fn: offercontroller.deleteComboOffer,
  },

  {
    method: "get",
    path: "/get",
    fn: offercontroller.getAll,
  },
];

apis.forEach((api) => {
  comboOfferRoute[api.method](api.path, api.fn);
});

export default comboOfferRoute;
// This code defines the routes for the general module in an Express application.
