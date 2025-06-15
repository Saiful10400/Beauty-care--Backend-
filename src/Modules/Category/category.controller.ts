// create category

import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../Utility/catchAsync";
import categoryService from "./category.service";
import sendResponse from "../../Utility/sendResponse";

const createCategory = catchAsync(async (req: Request, res: Response) => {
  const data = await categoryService.createCategory(req.body);
  sendResponse(res, {
    data,
    success: true,
    statusCode: httpStatus.OK,
    message: "Category created successfully",
  });
});

// retrieve all categories
const getAllCategories = catchAsync(async (req: Request, res: Response) => {
  const data = await categoryService.getAllCategories(
    Number(req.query.limit),
    Number(req.query.offset)
  );
  sendResponse(res, {
    data,
    success: true,
    statusCode: httpStatus.OK,
    message: "Categories retrieved successfully",
  });
});

// delete category
const deleteCategory = catchAsync(async (req: Request, res: Response) => {
  const data = await categoryService.deleteCategory(req.params.id);
  sendResponse(res, {
    data,
    success: true,
    statusCode: httpStatus.OK,
    message: "Categories deleted.",
  });
});

const categoryController = {
  createCategory,
  getAllCategories,
  deleteCategory,
};
export default categoryController;
