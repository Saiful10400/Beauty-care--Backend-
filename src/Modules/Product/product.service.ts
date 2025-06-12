import { productModel } from "./product.model";
import TProduct from "./product.types";

// create product service
const createProduct = async (payload: TProduct) => {
  const result = await productModel.create(payload);
  return result;
};

// get product by slug service
const getAProductBySlug = async (slug: string) => {
  const result = await productModel
    .findOne({ slug })
    .populate("brandId")
    .populate("categoryIds");
  return result;
};

// update product service
const updateProduct = async (slug: string, payload: TProduct) => {
  const result = await productModel.findOneAndUpdate({ slug }, payload, {
    new: true,
  });
  return result;
};

const productService = {
  createProduct,
  getAProductBySlug,
  updateProduct,
};
export default productService;
