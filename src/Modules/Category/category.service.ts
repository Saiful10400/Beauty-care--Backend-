import { categoryModel } from "./category.model";
import tCategory from "./category.types";

// create a category.
const createCategory = async (payload: tCategory) => {
  const result = await categoryModel.create(payload);
  return result;
};

// get all categories.
const getAllCategories = async (limit: number, offset: number) => {
  const result = await categoryModel
    .find({})
    .limit(limit)
    .skip(offset)
    .sort({ _id: -1 });
  return { result, total: await categoryModel.countDocuments() };
};

// get a category by id
const getCategoryById = async (id: string) => {
  const result = await categoryModel.findById(id);
  if (!result) {
    throw new Error(`Category with ID ${id} not found.`);
  }
  return result;
};

// update a category by id
const updateCategory = async (id: string, payload: tCategory) => {
  const result = await categoryModel.findByIdAndUpdate(id, payload, {
    new: true, // return the updated document
  });
  if (!result) {
    throw new Error(`Category with ID ${id} not found.`);
  }
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
  getCategoryById,
  updateCategory,
};
export default categoryService;
