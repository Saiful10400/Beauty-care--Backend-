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
  const { limit, offset } = req.query;
  const data = await offerService.getComboOffers(Number(limit), Number(offset));
  sendResponse(res, {
    data,
    success: true,
    statusCode: httpStatus.OK,
    message: "offer retreive successfully",
  });
});

/// update free offer.
const updateFreeOffer = catchAsync(async (req: Request, res: Response) => {
  const data = await offerService.updateFreeGiftOffer(req.body);
  sendResponse(res, {
    data,
    success: true,
    statusCode: httpStatus.OK,
    message: "free offer project updated successfully",
  });
});

/// create percentage offer.
const createPercentageOffer = catchAsync(
  async (req: Request, res: Response) => {
    const { percentage } = req.query;

    const data = await offerService.createPercentageOffer(
      req.body.products,
      Number(percentage)
    );
    sendResponse(res, {
      data,
      success: true,
      statusCode: httpStatus.OK,
      message: "percentage offer created successfully",
    });
  }
);

// delete a offer percentage offer.
const deletePercentageOffer = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const data = await offerService.deletePercentageOffer(id);
    sendResponse(res, {
      data,
      success: true,
      statusCode: httpStatus.OK,
      message: "percentage offer deleted successfully",
    });
  }
);

const offercontroller = {
  createComboOffer,
  deleteComboOffer,
  getAll,
  updateFreeOffer,
  createPercentageOffer,
  deletePercentageOffer,
};
export default offercontroller;
