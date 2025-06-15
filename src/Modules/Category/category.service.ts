import { categoryModel } from "./category.model";
import tCategory from "./category.types";

// create a category.
const createCategory = async (payload: tCategory) => {
  const result = await categoryModel.create(payload);
  return result;
};

// get all categories.
const getAllCategories = async (limit: number, offset: number) => {
  const result = await categoryModel.find({}).limit(limit).skip(offset);
  return result;
};

// delete a category by id
const deleteCategory = async (id: string) => {
  const result = await categoryModel.findByIdAndDelete(id);
  return result;
};

const categoryService = {
  createCategory,
  getAllCategories,
  deleteCategory,
};
export default categoryService;
