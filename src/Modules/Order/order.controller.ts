import httpStatus from "http-status";
import catchAsync from "../../Utility/catchAsync";
import sendResponse from "../../Utility/sendResponse";
import { Request, Response } from "express";
import orderService from "./order.service";

// create order.
const createOrder = catchAsync(async (req: Request, res: Response) => {
  const data = await orderService.createOrder(req.body);
  sendResponse(res, {
    data,
    success: true,
    statusCode: httpStatus.OK,
    message: "Order created successfully.",
  });
});

// get all order by id.
const getAllOrder = catchAsync(async (req: Request, res: Response) => {
  const data = await orderService.getAllOrder();
  sendResponse(res, {
    data,
    success: true,
    statusCode: httpStatus.OK,
    message: "Orders retrieved successfully.",
  });
});

// get a order by id.
const getOrderById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = await orderService.getOrderById(id);
  sendResponse(res, {
    data,
    success: true,
    statusCode: httpStatus.OK,
    message: "Order retrieved successfully.",
  });
});

// update a order by id.
const updateAOrder = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = await orderService.updateOrder(id, req.body);
  sendResponse(res, {
    data,
    success: true,
    statusCode: httpStatus.OK,
    message: "Order updated successfully.",
  });
});

// delete a order by id.
const deleteAOrder = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = await orderService.deleteOrder(id);
  sendResponse(res, {
    data,
    success: true,
    statusCode: httpStatus.OK,
    message: "Order deleted successfully.",
  });
});

const orderController = {
  createOrder,
  getOrderById,
  getAllOrder,
  updateAOrder,
  deleteAOrder,
};
export default orderController;
