import mongoose, { Schema, model } from "mongoose";
import TOrder from "./order.types";

const OrderSchema = new Schema<TOrder>(
  {
    customerName: { type: String, required: true },
    customerPhone: { type: String, required: true },
    customerAddress: { type: String, required: true },

    products: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true }, // Price at the time of order
        // This should match the price in Product at the time of order
      },
    ],

    totalAmount: { type: Number, required: true },

    paymentMethod: {
      type: String,
      enum: ["COD"],
      required: true,
      default: "COD",
    },

    isConfirmed: { type: Boolean, required: true, default: false },
    isShipped: { type: Boolean, required: true, default: false },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const orderModel = model<TOrder>("Order", OrderSchema);

export default orderModel;
