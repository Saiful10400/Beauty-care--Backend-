import httpStatus from "http-status";
import catchAsync from "../../Utility/catchAsync";
import sendResponse from "../../Utility/sendResponse";
import { Request, Response } from "express";
import { brandService } from "./brand.service";

// create brand controller
const createBrand = catchAsync(async (req: Request, res: Response) => {
  const data = await brandService.createBrand(req.body);
  sendResponse(res, {
    data,
    success: true,
    statusCode: httpStatus.OK,
    message: "Brand created successfully",
  });
});

//get brands controller
const getBrands = catchAsync(async (req: Request, res: Response) => {
  const data = await brandService.getBrands(
    Number(req.query.limit),
    Number(req.query.offset)
  );
  sendResponse(res, {
    data,
    success: true,
    statusCode: httpStatus.OK,
    message: "Brands retrieved successfully",
  });
});

const brandController = {
  createBrand,
  getBrands,
};
export default brandController;
