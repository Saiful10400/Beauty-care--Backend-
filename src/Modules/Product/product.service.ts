import { FilterQuery, SortOrder } from "mongoose";
import { productModel } from "./product.model";
import TProduct from "./product.types";
import comboOfferModle from "../Offer.Combo/offer.model";
import TComboOffer from "../Offer.Combo/Offer.types";

// create product service
const createProduct = async (payload: TProduct) => {
  const result = await productModel.create(payload);
  return result;
};

// get a product by id.
const getProductById = async (id: string) => {
  const result = await productModel
    .findById(id) // find product by id
    .populate("brandId") // populate brand details
    .populate("categoryIds"); // populate category details
  return result;
};

// get a product by slug.
const getProductBySlug = async (
  slug: string,
  query: FilterQuery<TComboOffer>
) => {
  if (query.isCombo === "true") {
    const result = await comboOfferModle
      .findOne({ slug }) // find product by id
      .populate("brandsId") // populate brand details
      .populate("categoryIds"); // populate category details
    return result;
  }

  const result = await productModel
    .findOne({ slug }) // find product by id
    .populate("brandId") // populate brand details
    .populate("categoryIds"); // populate category details
  return result;
};

// get all productsyar
const getProducts = async ({
  limit,
  offset,
  sort,
  ...query
}: FilterQuery<TProduct>) => {
  const conditions: FilterQuery<TProduct>[] = [];
  const order = Number(sort) || 1;
  if (query.maxPrice || query.minPrice) {
    const priceCnd = Object.keys(query).map((item) => {
      if (query.comboOffer) {
        if (item === "maxPrice") return { price: { $lte: query.maxPrice } };
        if (item === "minPrice") return { price: { $gte: query.minPrice } };
      } else {
        if (item === "maxPrice")
          return { price: { $lte: query.maxPrice }, haveOffer: false };
        if (item === "minPrice")
          return { price: { $gte: query.minPrice }, haveOffer: false };
      }
      return {};
    });
    conditions.push({ $and: priceCnd });
  }

  if (query.categoryIds) {
    conditions.push({ categoryIds: { $in: JSON.parse(query.categoryIds) } });
  }

  if (query.brandIds) {
    conditions.push({ brandId: { $in: JSON.parse(query.brandIds) } });
  }

  if (query.searchTerm) {
    const regex = new RegExp(query.searchTerm, "i");

    conditions.push({
      $or: [
        { name: regex },
        { description: regex },
        { shortDescription: regex },
        { tags: { $in: [regex] } },
      ],
    });
  }

  if (query.inStock) {
    conditions.push({ inStock: query.inStock === "true" });
  }
  if (query.haveOffers && (query.comboOffer === "false" || !query.comboOffer)) {
    conditions.push({ haveOffer: query.haveOffers === "true" });
  }

 
  console.dir(conditions, { depth: "infinity" });

  if (query.comboOffer === "true") {
    const result = await comboOfferModle
      .find({ $and: [...conditions] })
      .populate("categoryIds")
      .populate("brandsId")
      .limit(limit)
      .skip(offset)
      .sort({ _id: order as SortOrder });
    return {
      result,
      total: await comboOfferModle.countDocuments({ $and: [...conditions] }),
    };
  }

  const result = await productModel
    .find({ $and: [...conditions] })
    .populate("brandId")
    .populate("categoryIds")
    .limit(limit)
    .skip(offset)
    .sort({ _id: order as SortOrder });
  return {
    result,
    total: await productModel.countDocuments({ $and: [...conditions] }),
  };
};

// update product service
const updateProduct = async (id: string, payload: TProduct) => {
  const result = await productModel.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return result;
};

// delete a product by id.
const deleteProduct = async (id: string) => {
  const result = await productModel.findByIdAndDelete(id);
  return result;
};

const productService = {
  createProduct,
  updateProduct,
  deleteProduct,
  getProducts,
  getProductById,
  getProductBySlug,
};
export default productService;
