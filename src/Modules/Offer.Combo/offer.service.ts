import appError from "../../Errors/appError";
import { generalModel } from "../General/general.model";
import { productModel } from "../Product/product.model";

import comboOfferModle from "./offer.model";
import TComboOffer from "./Offer.types";

// create a compo offer.
const createCombo = async (payload: TComboOffer) => {
  const result = await comboOfferModle.create(payload);
  return result;
};

// delete combo.
const deletecombo = async (id: string) => {
  const result = await comboOfferModle.findByIdAndDelete(id);
  return result;
};

// get combo.

const getComboOffers = async (limit: number, offset: number) => {
  const result = await comboOfferModle
    .find()
    .limit(limit)
    .skip(offset)
    .populate("categoryIds")
    .populate("brandsId");
  return { result, total: await comboOfferModle.countDocuments() };
};

// update free offer for a separet perchese
const updateFreeGiftOffer = async (payload: {
  product: string;
  buyAbove: number;
  applicable: boolean;
}) => {
  const updateObj: Record<string, string | number | boolean> = {};

  Object.keys(payload).forEach((e) => {
    updateObj[`freeGift.${e}`] = payload[e as keyof typeof payload];
  });
  const result = await generalModel.findOneAndUpdate(
    {},
    { $set: updateObj },
    { new: true }
  );
  return result;
};

// give a percentage offer.
const updatePercentageOffer = async (payload: string[], percentage: number) => {
  try {
    // get all targeted product.
    const products = await productModel.find({ _id: { $in: payload } });

    const updatedOfferProducts = products.map((item) => {
      return {
        updateOne: {
          filter: { _id: item._id },
          update: {
            $set: {
              discountPrice:
                item.price - Math.ceil(item.price * (percentage / 100)),
              haveOffer: true,
            },
          },
        },
      };
    });

    const result = await productModel.bulkWrite(updatedOfferProducts);
    return result;
  } catch (err) {
    new appError(400, "faild to update");
  }
};

const offerService = {
  createCombo,
  deletecombo,
  getComboOffers,
  updateFreeGiftOffer,
  updatePercentageOffer,
};
export default offerService;
