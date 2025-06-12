import httpStatus from "http-status";
import catchAsync from "../../Utility/catchAsync";
import sendResponse from "../../Utility/sendResponse";
import { Request, Response } from "express";
import productService from "./product.service";

// create a product controller
const createAProduct = catchAsync(async (req: Request, res: Response) => {
  const data = await productService.createProduct(req.body);
  sendResponse(res, {
    data,
    success: true,
    statusCode: httpStatus.OK,
    message: "Product created successfully",
  });
});

// get a product by slug controller
const getAProductBySlug = catchAsync(async (req: Request, res: Response) => {
  const { slug } = req.params;
  const data = await productService.getAProductBySlug(slug);
  sendResponse(res, {
    data,
    success: true,
    statusCode: httpStatus.OK,
    message: "Product retrieved successfully",
  });
});

const productcontroller = {
  createAProduct,
  getAProductBySlug,
};
export default productcontroller;
