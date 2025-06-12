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

const orderController = {
  createOrder,
  getOrderById,
};
export default orderController;
