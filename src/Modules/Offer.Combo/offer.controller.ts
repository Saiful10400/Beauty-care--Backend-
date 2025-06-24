import { Request, Response } from "express";
import catchAsync from "../../Utility/catchAsync";
import sendResponse from "../../Utility/sendResponse";
import httpStatus from "http-status";
import offerService from "./offer.service";

const createComboOffer = catchAsync(async (req: Request, res: Response) => {
  const data = await offerService.createCombo(req.body);
  sendResponse(res, {
    data,
    success: true,
    statusCode: httpStatus.OK,
    message: "offer created successfully",
  });
});

const deleteComboOffer = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = await offerService.deletecombo(id);
  sendResponse(res, {
    data,
    success: true,
    statusCode: httpStatus.OK,
    message: "offer deleted successfully",
  });
});

const getAll = catchAsync(async (req: Request, res: Response) => {
  const data = await offerService.getComboOffers();
  sendResponse(res, {
    data,
    success: true,
    statusCode: httpStatus.OK,
    message: "offer retreive successfully",
  });
});

const offercontroller = { createComboOffer, deleteComboOffer, getAll };
export default offercontroller;
