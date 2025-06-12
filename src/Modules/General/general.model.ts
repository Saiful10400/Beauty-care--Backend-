import { model, Schema } from "mongoose";
import { Tgeneral } from "./general.types";

const generalSchema = new Schema<Tgeneral>(
  {
    siteName: { type: String, required: true },
    logoUrl: { type: String, required: true },
    contactEmail: { type: String, required: true },
    phone: { type: String, required: true },
    aboutUs: { type: String, required: true },
    address: { type: String, required: true },
    socialLinks: {
      facebook: { type: String, required: true },
      instagram: { type: String, required: true },
    },
  },
  { timestamps: true ,versionKey:false}
);

export const generalModel = model<Tgeneral>("General", generalSchema);
