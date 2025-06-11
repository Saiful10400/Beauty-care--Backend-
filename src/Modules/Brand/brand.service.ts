import { brandModel } from "./brand.model";
import { Tbrand } from "./brand.types";

// create brand service
const createBrand = async (payload: Tbrand) => {
  const result = await brandModel.create(payload);
  return result;
};

//get brands.

const getBrands = async () => {
  const result = await brandModel.find();
  return result;
};

export const brandService = {
  createBrand,
  getBrands,
};
