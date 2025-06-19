import mongoose, { Schema, model } from "mongoose";

// Define the Mongoose schema
const ProductSchema = new Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String },
    shortDescription: { type: String },

    // Reference to Brand (as ObjectId)
    brandId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Brand",
      required: true,
    },

    // Array of references to Category
    categoryIds: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },

    price: { type: Number, required: true },
    discountPrice: { type: Number, default: 0 },

    inStock: { type: Boolean, required: true },

    images: {
      type: [String],
      required: true,
      validate: [
        (val: string[]) => val.length > 0,
        "At least one image is required.",
      ],
    },

    tags: { type: [String], default: [] },

    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt
    versionKey: false,
  }
);

// Export the model
export const productModel = model("Product", ProductSchema);
