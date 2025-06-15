import { brandModel } from "./brand.model";
import { Tbrand } from "./brand.types";

// create brand service
const createBrand = async (payload: Tbrand) => {
  const result = await brandModel.create(payload);
  return result;
};

//get brands.

const getBrands = async (limit: number, offset: number) => {
  const result = await brandModel.find().limit(limit).skip(offset);
  return result;
};

// delete a brand by id
const deleteBrand = async (id: string) => {
  const result = await brandModel.findByIdAndDelete(id);
  return result;
};  

export const brandService = {
  createBrand,
  getBrands,deleteBrand
};
