import { productModel } from "./product.model";
import TProduct from "./product.types";

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
// get product by slug service
const getProducts = async () => {
  const result = await productModel
    .find()
    .populate("brandId")
    .populate("categoryIds");
  return { result, total: await productModel.countDocuments() };
  return result;
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
};
export default productService;
