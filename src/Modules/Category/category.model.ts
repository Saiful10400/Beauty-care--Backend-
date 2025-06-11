import { Schema, model } from "mongoose";
import tCategory from "./category.types";

const CategorySchema = new Schema<tCategory>(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String },
    imageUrl: { type: String },
    isFeatured: { type: Boolean, default: true },
  },
  {
    timestamps: false,
  }
);

// Export the model
export const categoryModel = model<tCategory>("Category", CategorySchema);
