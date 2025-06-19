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

// get category by id
const getCategoryById = catchAsync(async (req: Request, res: Response) => {
  const data = await categoryService.getCategoryById(req.params.id);
  sendResponse(res, {
    data,
    success: true,
    statusCode: httpStatus.OK,
    message: "Category retrieved successfully",
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

// update category
const updateCategory = catchAsync(async (req: Request, res: Response) => {
  const data = await categoryService.updateCategory(req.params.id, req.body);
  sendResponse(res, {
    data,
    success: true,
    statusCode: httpStatus.OK,
    message: "Category updated successfully",
  });
});

const categoryController = {
  createCategory,
  getAllCategories,
  deleteCategory,
  getCategoryById,
  updateCategory,
};
export default categoryController;
