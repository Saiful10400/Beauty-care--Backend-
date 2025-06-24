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

const getComboOffers = async () => {
  const result = await comboOfferModle.find().populate("categoryIds").populate("brandsId")

  return result;
};

const offerService = { createCombo, deletecombo, getComboOffers };
export default offerService;
