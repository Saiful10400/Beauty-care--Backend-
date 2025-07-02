import catchAsync from "../../Utility/catchAsync";
import { Request, Response } from "express";
import bannerService from "./banner.service";
import sendResponse from "../../Utility/sendResponse";
import httpStatus from "http-status";

//1. create banner.
const createBanner = catchAsync(async (req: Request, res: Response) => {
  const data = await bannerService.createBanner(req.body);
  sendResponse(res, {
    data,
    success: true,
    statusCode: httpStatus.OK,
    message: "Banner created successfully",
  });
});

//2. update banner by id.
const updateBanner = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = await bannerService.updateBanner(id, req.body);
  sendResponse(res, {
    data,
    success: true,
    statusCode: httpStatus.OK,
    message: "Banner updated successfully",
  });
});

// 3. get banners
const getBanners = catchAsync(async (req: Request, res: Response) => {
  const data = await bannerService.getBanners(req.query);
  sendResponse(res, {
    data,
    success: true,
    statusCode: httpStatus.OK,
    message: "Banners retrieved successfully",
  });
});

const bannerController = {
  createBanner,
  updateBanner,
  getBanners,
};
export default bannerController;
