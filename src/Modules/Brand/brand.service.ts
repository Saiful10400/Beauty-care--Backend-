import mongoose from "mongoose";
import { brandModel } from "./brand.model";
import { Tbrand } from "./brand.types";
import { productModel } from "../Product/product.model";
import appError from "../../Errors/appError";

// create brand service
const createBrand = async (payload: Tbrand) => {
  const result = await brandModel.create(payload);
  return result;
};

//get brands.

const getBrands = async (limit: number, offset: number) => {
  const result = await brandModel.find().limit(limit).skip(offset);
  return { result, total: await brandModel.countDocuments() };
};

// get a brand by id
const getBrandById = async (id: string) => {
  const result = await brandModel.findById(id);
  return result;
};

// delete a brand by id (soft delete,all products of this brand will be deleted softly)
const deleteBrand = async (id: string) => {
  const session = await mongoose.startSession();

  try {
    await session.withTransaction(async () => {
      // 1. Find and delete the brand
      const deletedBrand = await brandModel.findByIdAndDelete(id, { session });

      if (!deletedBrand) {
        throw new Error(`Brand with ID ${id} not found.`);
      }

 

      // 2. Delete all products associated with this brand
      const deleteResult = await productModel.deleteMany(
        { brand: id },
        { session }
      );

      console.log(
        `Deleted ${deleteResult.deletedCount} products associated with ${deletedBrand.name}`
      );

      // If everything goes well, the transaction will be committed automatically by withTransaction()
    });

    console.log(
      "Transaction for brand and product deletion completed successfully!"
    );
  } catch {
    new appError(400, "Transaction aborted due to error:");
  } finally {
    session.endSession();  
  }
  return { message: "Brand and associated products deleted successfully" };
};

// update a brand by id
const updateBrand = async (id: string, payload: Tbrand) => {
  const result = await brandModel.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return result;
};

export const brandService = {
  createBrand,
  getBrands,
  deleteBrand,
  getBrandById,
  updateBrand,
};
