import mongoose, { Schema } from "mongoose";
import TOrder, { TorderProduct } from "./order.types";

const OrderProductSchema = new Schema<TorderProduct>(
  {
    productId: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    imageUrl: { type: String, required: true },
    haveOffer: { type: Boolean, default: false },
  },
  { _id: false }
);

const OrderSchema = new Schema<TOrder>(
  {
    customerName: { type: String, required: true },
    customerPhone: { type: String, required: true },
    customerAddress: { type: String, required: true },
    products: { type: [OrderProductSchema], required: true },
    totalAmount: { type: Number, required: true },
    paymentMethod: {
      type: String,
      enum: ["COD"],
      default: "COD",
    },
    deliveryCharge: { type: Number, required: true },
    isConfirmed: { type: Boolean, default: false },
    isShipped: { type: Boolean, default: false },
    freeGiftEligible: { type: Boolean, required: true },
    giftProduct: {type:{name:String,imageUrl:String}},
  },
  { timestamps: true }
);

// If you use Next.js or a hot-reloading environment, guard against model overwrite
const orderModel = mongoose.model<TOrder>("Order", OrderSchema);

export default orderModel;
