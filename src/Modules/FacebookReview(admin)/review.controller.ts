// create facebook reveiw controller

import catchAsync from "../../Utility/catchAsync";
import { Request, Response } from "express";
import httpStatus from "http-status";
import sendResponse from "../../Utility/sendResponse";
import facebooReviewService from "./review.service";

// create fbreview
const createFacebookReview = catchAsync(async (req: Request, res: Response) => {
  const data = await facebooReviewService.createFacebookREview(req.body);
  sendResponse(res, {
    data,
    success: true,
    statusCode: httpStatus.OK,
    message: "Facebook review create successfully.",
  });
});

//update facebook review controller
const updateFacebookReview = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = await facebooReviewService.updateFacebookReview(id, req.body);
  sendResponse(res, {
    data,
    success: true,
    statusCode: httpStatus.OK,
    message: "Facebook review updated successfully.",
  });
});

// get facebook reviews controller
const getFacebookReviews = catchAsync(async (req: Request, res: Response) => {
  const data = await facebooReviewService.getFacebookReviews();
  sendResponse(res, {
    data,
    success: true,
    statusCode: httpStatus.OK,
    message: "Facebook reviews fetched successfully.",
  });
});

const facebookReviewController = {
  createFacebookReview,
  updateFacebookReview,
  getFacebookReviews,
};

export default facebookReviewController;
