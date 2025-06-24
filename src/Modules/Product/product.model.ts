import mongoose, { Schema, model } from "mongoose";

// Define the Mongoose schema
const ProductSchema = new Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String },
    shortDescription: { type: String },

    // Reference to Brand
    brandId: {
      type: Schema.Types.ObjectId,
      ref: "Brand",
      required: true,
    },

    // Fix: Should be an array of ObjectIds
    categoryIds: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },

    price: { type: Number, required: true },
    discountPrice: { type: Number, default: 0 },

    inStock: { type: Boolean, required: true },

    images: {
      type: [String],
      required: true,
      validate: {
        validator: (val: string[]) => val.length > 0,
        message: "At least one image is required.",
      },
    },

    tags: { type: [String], default: [] },

    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },

    // Fix: 'type' is missing and 'required' should be added if necessary
    gender: {
      type: String,
      enum: ["male", "female"],
      required: true, // change to true if needed
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// Optional: Prevent model overwrite issue in development
export const productModel =
  mongoose.models.Product || model("Product", ProductSchema);
