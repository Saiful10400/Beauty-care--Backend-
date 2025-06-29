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

const generalService = { updateGeneral, getGeneral };
export default generalService;
