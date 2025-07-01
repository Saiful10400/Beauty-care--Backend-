import { Router, Request, Response, NextFunction } from "express";
import orderController from "./order.controller";

const orderRouter = Router();
 
type tApi = {
  path: string;
  method: "get" | "post" | "put" | "delete";
  fn: (req: Request, res: Response, next: NextFunction) => void;
};

const apis: tApi[] = [
  { method: "post", path: "/create", fn: orderController.createOrder },
  {
    method: "get",
    path: "/get/:id",
    fn: orderController.getOrderById,
  }
];

apis.forEach((api) => {
  orderRouter[api.method](api.path, api.fn);
});

export default orderRouter;
// This code defines the routes for the general module in an Express application.
