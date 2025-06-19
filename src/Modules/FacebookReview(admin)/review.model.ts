import { Schema, model } from "mongoose";
import { TFacebookReview } from "./review.type";

const facebookReviewSchema = new Schema<TFacebookReview>(
  {
    customerName: {
      type: String,
      required: true,
      trim: true,
    },
    profileImageUrl: {
      type: String,
      default: null,
    },
    message: {
      type: String,
      required: true,
      trim: true,
    },
    reviewDate: {
      type: String,
      required: true,
    },
    isVisible: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

export const facebookReviewModel = model<TFacebookReview>(
  "FacebookReview",
  facebookReviewSchema
);
