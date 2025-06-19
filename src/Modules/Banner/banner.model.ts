import { Schema, model } from "mongoose";
import { TBanner } from "./banner.types";

const bannerSchema = new Schema<TBanner>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    type: {
      type: String,
      enum: ["offer", "page"],
      required: true,
    },
    asset: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const bannerModel = model<TBanner>("Banner", bannerSchema);
export default bannerModel;