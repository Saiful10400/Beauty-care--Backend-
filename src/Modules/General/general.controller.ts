// update general controller
import { Request, Response } from "express";
import catchAsync from "../../Utility/catchAsync";
import generalService from "./general.service";
import sendResponse from "../../Utility/sendResponse";
import httpStatus from "http-status";

// update general controller
const updateGeneral = catchAsync(async (req: Request, res: Response) => {
  const data = await generalService.updateGeneral(req.body);
  sendResponse(res, {
    data,
    success: true,
    statusCode: httpStatus.OK,
    message: "general updated successfully",
  });
});

// get general controller//
const getGeneral = catchAsync(async (req: Request, res: Response) => {
  const data = await generalService.getGeneral();
  sendResponse(res, {
    data,
    success: true,
    statusCode: httpStatus.OK,
    message: "general fetched successfully",
  });
});

// login hadnle//
const loginHandle = catchAsync(async (req: Request, res: Response) => {
  const data = await generalService.loginHandle(req.body);
  sendResponse(res, {
    data,
    success: true,
    statusCode: httpStatus.OK,
    message: "login status",
  });
});

const generalController = {
  updateGeneral,
  getGeneral,
  loginHandle,
};
export default generalController;
// This code defines a controller for updating general settings in an Express application.
