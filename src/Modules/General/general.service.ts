import { generalModel } from "./general.model";
import { Tgeneral } from "./general.types";

// update general.
const updateGeneral = async (payload: Partial<Tgeneral>) => {
  const result = await generalModel.findOneAndUpdate({}, payload, {
    upsert: true,
  });
  return result;
};

//get general.
const getGeneral = async () => {
  const result = await generalModel.findOne().populate("freeGift.product");
  return result;
};

// login handle.
const loginHandle = async (paylod: { password: string; email: string }) => {
  const result = await generalModel.findOne({ auth: paylod });
  if (result) {
    return { authorized: true };
  } else {
    return { authorized: false };
  }
};

const generalService = { updateGeneral, getGeneral, loginHandle };
export default generalService;
