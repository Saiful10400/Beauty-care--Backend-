import { Router, Request, Response, NextFunction } from "express";
import facebookReviewController from "./review.controller";

const facebookReviewRoute = Router();

type tApi = {
  path: string;
  method: "get" | "post" | "put" | "delete";
  fn: (req: Request, res: Response, next: NextFunction) => void;
};

const apis: tApi[] = [
  {
    method: "post",
    path: "/create",
    fn: facebookReviewController.createFacebookReview,
  },
  {
    method: "get",
    path: "/get",
    fn: facebookReviewController.getFacebookReviews,
  },
  {
    method: "put",
    path: "/update/:id",
    fn: facebookReviewController.updateFacebookReview,
  },
];

apis.forEach((api) => {
  facebookReviewRoute[api.method](api.path, api.fn);
});

export default facebookReviewRoute;
// This code defines the routes for the general module in an Express application.
