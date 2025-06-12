import { Schema, model } from "mongoose";
import { Tbrand } from "./brand.types";

// Define the schema
const BrandSchema: Schema = new Schema<Tbrand>(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String },
    logoUrl: { type: String },
    websiteUrl: { type: String },
    isFeatured: { type: Boolean, default: true },
  },
  { timestamps: true, versionKey: false }
);

// Create and export the model
export const brandModel = model<Tbrand>("Brand", BrandSchema);
