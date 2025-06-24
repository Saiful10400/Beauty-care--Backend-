import { Schema, model } from "mongoose";
import TComboOffer from "./Offer.types";

const ComboOfferSchema = new Schema<TComboOffer>(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String },
    shortDescription: { type: String },
    brandsId: [{ type: Schema.Types.ObjectId, ref: "Brand", required: true }],
    categoryIds: [
      { type: Schema.Types.ObjectId, ref: "Category", required: true },
    ],
    price: { type: Number, required: true },
    discountPrice: { type: Number },
    inStock: { type: Boolean, required: true },
    images: [{ type: String, required: true }],
    rating: { type: Number, min: 0, max: 5 },
    isComboOffer: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

const comboOfferModle = model<TComboOffer>("ComboOffer", ComboOfferSchema);
export default comboOfferModle;
