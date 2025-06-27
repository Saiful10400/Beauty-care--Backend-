import { Router, Request, Response, NextFunction } from "express";
import offercontroller from "./offer.controller";

const offerRoutes = Router();

type tApi = {
  path: string;
  method: "get" | "post" | "put" | "delete";
  fn: (req: Request, res: Response, next: NextFunction) => void;
};

const apis: tApi[] = [
  {
    method: "post",
    path: "/combo-offer/create",
    fn: offercontroller.createComboOffer,
  },

  {
    method: "delete",
    path: "/combo-offer/delete/:id",
    fn: offercontroller.deleteComboOffer,
  },

  {
    method: "get",
    path: "/combo-offer/get",
    fn: offercontroller.getAll,
  },
  {
    method: "put",
    path: "/freeGift/update",
    fn: offercontroller.updateFreeOffer,
  },
  {
    method: "post",
    path: "/percentageOffer/create",
    fn: offercontroller.createPercentageOffer,
  },
  {
    method: "delete",
    path: "/percentageOffer/delete/:id",
    fn: offercontroller.deletePercentageOffer,
  },
];

apis.forEach((api) => {
  offerRoutes[api.method](api.path, api.fn);
});

export default offerRoutes;
// This code defines the routes for the general module in an Express application.
