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

// get a product by id controller
const getProductById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = await productService.getProductById(id);
  if (!data) {
    return sendResponse(res, {
      data: null,
      success: false,
      statusCode: httpStatus.NOT_FOUND,
      message: "Product not found",
    });
  }
  sendResponse(res, {
    data,
    success: true,
    statusCode: httpStatus.OK,
    message: "Product retrieved successfully",
  });
});



// get a product by slug controller
const getProductBySlug = catchAsync(async (req: Request, res: Response) => {
  const { slug } = req.params;
    const{isCombo}=req.query
  const data = await productService.getProductBySlug(slug,{isCombo});
  if (!data) {
    return sendResponse(res, {
      data: null,
      success: false,
      statusCode: httpStatus.NOT_FOUND,
      message: "Product not found",
    });
  }
  sendResponse(res, {
    data,
    success: true,
    statusCode: httpStatus.OK,
    message: "Product retrieved successfully",
  });
});





// get all products controller
const getProducts = catchAsync(async (req: Request, res: Response) => {
 
  if (req.query.haveOffer) req.query.haveOffer = "true";
  const data = await productService.getProducts(req.query);
  sendResponse(res, {
    data,
    success: true,
    statusCode: httpStatus.OK,
    message: "Products retrieved successfully",
  });
});

// update a product controller
const updateAProduct = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = await productService.updateProduct(id, req.body);
  sendResponse(res, {
    data,
    success: true,
    statusCode: httpStatus.OK,
    message: "Product updated successfully",
  });
});

// delete a product controller.
const deleteAProduct = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const data = await productService.deleteProduct(id);
  sendResponse(res, {
    data,
    success: true,
    statusCode: httpStatus.OK,
    message: "Product deleted successfully",
  });
});

const productcontroller = {
  createAProduct,

  getProducts,
  updateAProduct,
  deleteAProduct,
  getProductById,
  getProductBySlug
};
export default productcontroller;
