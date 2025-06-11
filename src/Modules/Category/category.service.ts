import { categoryModel } from "./category.model";
import tCategory from "./category.types";

// create a category.
const createCategory = async (payload: tCategory) => {
  const result = await categoryModel.create(payload);
  return result;
};

// get all categories.
const getAllCategories = async () => {
  const result = await categoryModel.find({});
  return result;
};

const categoryService = {
  createCategory,getAllCategories
};
export default categoryService;
